// Lists the next N albums that still need a Sleeve Atlas note: today's current
// pick first (if it doesn't have one yet), then past history oldest-listened
// first, so the daily automation both stays current and works through the
// backlog of already-rated albums that predate this note-writing process.
//
// Usage: node next-notes.mjs [count]   (default 3)
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const insightsPath = path.join(__dirname, "..", "data", "insights.json");
const PROJECT = process.env.SLEEVE_PROJECT || "emsh";
const count = parseInt(process.argv[2], 10) || 3;

const res = await fetch(`https://1001albumsgenerator.com/api/v1/projects/${PROJECT}`);
if (!res.ok) throw new Error(`project fetch failed: ${res.status}`);
const data = await res.json();

const insights = existsSync(insightsPath)
  ? JSON.parse(await readFile(insightsPath, "utf-8"))
  : {};
const written = new Set(Object.keys(insights));

const seen = new Set();
const queue = [];
const add = (album, generatedAt, tag) => {
  if (!album?.uuid || written.has(album.uuid) || seen.has(album.uuid)) return;
  seen.add(album.uuid);
  queue.push({ ...album, generatedAt: generatedAt ?? "9999", tag });
};

add(data.currentAlbum, "0", "today's pick");
const history = (data.history || [])
  .slice()
  .sort((a, b) => new Date(a.generatedAt) - new Date(b.generatedAt));
for (const entry of history) add(entry.album, entry.generatedAt, "backlog, oldest unwritten");

if (queue.length === 0) {
  console.log("backlog clear — every album in the project already has a note.");
  process.exit(0);
}

const picked = queue.slice(0, count);
console.log(`NEXT ALBUMS TO NOTE (${picked.length} of ${queue.length} remaining):`);
picked.forEach((a, i) => {
  console.log(`${i + 1}. [${a.tag}] ${a.artist} — ${a.name} (${a.releaseDate})  uuid=${a.uuid}`);
});
console.log(`\n${queue.length - picked.length} will remain in the backlog after this run.`);
