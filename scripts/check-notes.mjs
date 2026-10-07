// Validates the saved notes. Run after writing any batch.
//
// The timeline check exists because it's an easy mistake to make: naming a
// later, better-known album as an influence when the dates make it impossible
// (Melodrama can't have influenced a 2014 record). Influence has to run
// forwards, and a wrong link is worse than a missing one.
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const insights = JSON.parse(await readFile(path.join(root, "data", "insights.json"), "utf-8"));

const problems = [];
const note = (album, msg) => problems.push(`${album}: ${msg}`);

for (const entry of Object.values(insights)) {
  const { album, year } = entry;
  const y = parseInt(year, 10);

  for (const rel of entry.influenced || []) {
    const ry = parseInt(rel.year, 10);
    if (ry && y && ry < y) {
      note(album, `claims to have influenced "${rel.album}" (${rel.year}) — which predates it (${year})`);
    }
  }
  for (const rel of entry.influencedBy || []) {
    const ry = parseInt(rel.year, 10);
    if (ry && y && ry > y) {
      note(album, `claims influence from "${rel.album}" (${rel.year}) — which postdates it (${year})`);
    }
  }

  const words =
    [entry.albumLine, ...(entry.overview || [])].join(" ").split(/\s+/).length +
    (entry.listeningNotes || []).reduce(
      (n, b) => n + b.label.split(/\s+/).length + b.text.split(/\s+/).length,
      0
    );
  if (words < 450 || words > 650) note(album, `${words} words, outside the 450-650 budget`);

  const bullets = (entry.listeningNotes || []).length;
  if (bullets < 4 || bullets > 6) note(album, `${bullets} listening notes, should be 4-6`);

  if (!(entry.sources || []).length) note(album, "no sources");
  if (!entry.image) note(album, "no cover image");

  // Every influencedBy/influenced entry is a node+edge on the map — uncapped,
  // a handful of over-connected albums turn it into a hairball. Keep each
  // note's own fan-out small so the map stays readable.
  const links = (entry.influencedBy || []).length + (entry.influenced || []).length;
  if (links > 6) note(album, `${links} influencedBy+influenced entries, over the 6-node cap`);
}

// The map keys nodes on a canonical form of artist+album, so "The Pretenders"
// and "Pretenders" land on one node either way. But two spellings still make
// the displayed name depend on which note happens to be read first, so flag
// them and keep the prose consistent. Mirrors canon() in public/data-source.js.
const canon = (s) => {
  const base = (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[‘’']/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const stripped = base.replace(/\b(the|a|an)\b/g, " ").replace(/\s+/g, " ").trim();
  return stripped || base;
};

const spellings = new Map();
const seeName = (artist, alb, where, isNote) => {
  if (!artist || !alb) return;
  const key = `${canon(artist)}::${canon(alb)}`;
  if (!spellings.has(key)) spellings.set(key, { variants: new Map(), hasNote: false });
  const rec = spellings.get(key);
  if (isNote) rec.hasNote = true;
  const exact = `${artist} — ${alb}`;
  if (!rec.variants.has(exact)) rec.variants.set(exact, new Set());
  rec.variants.get(exact).add(where);
};

for (const entry of Object.values(insights)) {
  seeName(entry.artist, entry.album, `the note for ${entry.album}`, true);
  for (const r of entry.influencedBy || []) seeName(r.artist, r.album, `influencedBy in ${entry.album}`, false);
  for (const r of entry.influenced || []) seeName(r.artist, r.album, `influenced in ${entry.album}`, false);
}

// A relation whose artist already has a note, but whose album canon is a
// near-miss of that note's real album canon (usually the album field
// redundantly repeating the artist name, e.g. "The Beatles (White Album)"
// instead of "The White Album"), silently fails to link to the existing
// node and spawns an orphan instead — the exact bug that broke Faust IV's
// White Album reference. Catch it by canon alone, same as graph()'s own
// node identity.
const notesByArtist = new Map();
for (const entry of Object.values(insights)) {
  const a = canon(entry.artist);
  if (!notesByArtist.has(a)) notesByArtist.set(a, new Set());
  notesByArtist.get(a).add(canon(entry.album));
}
const noteIds = new Set(
  Object.values(insights).map((e) => `${canon(e.artist)}::${canon(e.album)}`)
);

for (const entry of Object.values(insights)) {
  for (const rel of [...(entry.influencedBy || []), ...(entry.influenced || [])]) {
    const relArtist = canon(rel.artist);
    const relAlbum = canon(rel.album);
    if (noteIds.has(`${relArtist}::${relAlbum}`)) continue;
    const realAlbums = notesByArtist.get(relArtist);
    if (!realAlbums) continue;
    // Specifically: the album text contains the artist's own name (e.g.
    // "The Beatles (White Album)"), and stripping it out lands exactly on an
    // album this artist already has a note for. Narrower than a plain
    // substring check, which also fires on legitimately distinct albums that
    // happen to share a prefix (Led Zeppelin III has no note of its own, but
    // "led zeppelin" IS a substring of its canon — not a naming bug).
    const stripped = relAlbum
      .split(" ")
      .filter((w) => !relArtist.split(" ").includes(w))
      .join(" ")
      .trim();
    if (stripped && realAlbums.has(stripped)) {
      note(
        entry.album,
        `links to "${rel.artist} — ${rel.album}", which won't match the real note "${rel.artist} — ${stripped}" — the album field redundantly includes the artist name`
      );
    }
  }
}

for (const { variants, hasNote } of spellings.values()) {
  if (variants.size < 2) continue;
  // A record with its own note always wins the label — graph() upserts the
  // "list" node over any inferred one — so those spellings can't disagree on
  // screen and aren't worth failing over. Records that only ever appear as a
  // relation have no such anchor, and there the display really is arbitrary.
  if (hasNote) continue;
  const lines = [...variants]
    .map(([name, where]) => `"${name}" (${[...where].join(", ")})`)
    .join(" vs ");
  note("naming", `same record spelled two ways, and neither is a note — ${lines}`);
}

console.log(`checked ${Object.keys(insights).length} notes`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  problems.forEach((p) => console.log("  " + p));
  process.exit(1);
}
console.log("all clean");
