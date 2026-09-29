// Builds dist/ — a fully static site with no server behind it.
//
// Everything live (the project, group and global reviews) is fetched from the
// 1001 Albums Generator API directly by the browser, which its CORS headers
// allow. Only two things need baking: the album notes, and a trimmed index of
// global average ratings, since the upstream table is ~800KB of mostly fields
// we don't use.
import { readFile, writeFile, mkdir, cp, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

async function build() {
  await rm(dist, { recursive: true, force: true });
  await mkdir(path.join(dist, "data"), { recursive: true });

  // 1. the app itself
  await cp(path.join(root, "public"), dist, { recursive: true });

  // 2. the notes
  const insightsPath = path.join(root, "data", "insights.json");
  const insights = existsSync(insightsPath)
    ? JSON.parse(await readFile(insightsPath, "utf-8"))
    : {};
  await writeFile(
    path.join(dist, "data", "insights.json"),
    JSON.stringify(insights),
    "utf-8"
  );

  // 3. global averages, trimmed to the two fields the app reads and keyed by
  //    both spotify id and artist::title (the two tables disagree on ids).
  //
  //    The result is cached into data/ and committed, so a build never depends
  //    on the upstream being reachable. It goes down — rate limiting returns
  //    403 to everything — and without a fallback that took the whole deploy
  //    with it, including the GitHub Action.
  const cachePath = path.join(root, "data", "album-stats.json");
  let stats = null;

  try {
    const res = await fetch("https://1001albumsgenerator.com/api/v1/albums/stats");
    if (!res.ok) throw new Error(`returned ${res.status}`);
    const { albums = [] } = await res.json();
    if (!albums.length) throw new Error("returned an empty album list");

    stats = {};
    for (const a of albums) {
      const entry = { averageRating: a.averageRating, votes: a.votes };
      if (a.spotifyId) stats[a.spotifyId] = entry;
      if (a.id) stats[a.id] = entry;
      stats[`${a.artist || ""}::${a.name || ""}`.toLowerCase().replace(/\s+/g, " ").trim()] = entry;
    }
    // how many albums are in the pool at all, for the "% complete" figure. Kept
    // as a reserved key rather than a wrapper object so album lookups still index
    // straight into this table; no album key can collide with it.
    stats.__total = albums.length;
    await writeFile(cachePath, JSON.stringify(stats), "utf-8");
  } catch (err) {
    if (!existsSync(cachePath)) {
      throw new Error(`album stats fetch failed (${err.message}) and no cache at data/album-stats.json`);
    }
    stats = JSON.parse(await readFile(cachePath, "utf-8"));
    console.warn(`  ! album stats fetch failed (${err.message}) — using the cached copy`);
  }

  await writeFile(
    path.join(dist, "data", "album-stats.json"),
    JSON.stringify(stats),
    "utf-8"
  );

  // GitHub Pages runs Jekyll otherwise, which skips files beginning with _
  await writeFile(path.join(dist, ".nojekyll"), "", "utf-8");

  const kb = (o) => Math.round(JSON.stringify(o).length / 1024);
  console.log(
    `built dist/ — ${Object.keys(insights).length} notes (${kb(insights)}KB), ` +
      `${stats.__total} albums in stats index (${kb(stats)}KB)`
  );
}

build().catch((err) => {
  console.error("build failed:", err.message);
  process.exit(1);
});
