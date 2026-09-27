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
}

console.log(`checked ${Object.keys(insights).length} notes`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  problems.forEach((p) => console.log("  " + p));
  process.exit(1);
}
console.log("all clean");
