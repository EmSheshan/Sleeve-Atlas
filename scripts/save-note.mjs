// Saves one album note into data/insights.json, keyed by the generator's album
// uuid. Looks the uuid up by album+artist from the live project so notes always
// line up with what the app renders.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "data");
const insightsPath = path.join(dataDir, "insights.json");

const PROJECT = process.env.SLEEVE_PROJECT || "emsh";

let projectCache = null;
async function albumIndex() {
  if (projectCache) return projectCache;
  const res = await fetch(`https://1001albumsgenerator.com/api/v1/projects/${PROJECT}`);
  if (!res.ok) throw new Error(`project fetch failed: ${res.status}`);
  const data = await res.json();
  const index = new Map();
  const add = (album) => {
    if (album?.uuid) index.set(`${album.artist}::${album.name}`.toLowerCase(), album);
  };
  (data.history || []).forEach((e) => add(e.album));
  add(data.currentAlbum);
  projectCache = index;
  return index;
}

export async function saveNote(note) {
  const index = await albumIndex();
  const key = `${note.artist}::${note.album}`.toLowerCase();
  const album = index.get(key);
  if (!album) throw new Error(`album not found in project: ${note.artist} — ${note.album}`);

  if (!existsSync(dataDir)) await mkdir(dataDir, { recursive: true });
  const all = existsSync(insightsPath)
    ? JSON.parse(await readFile(insightsPath, "utf-8"))
    : {};

  // keep a cover url on the note so the influence map can draw the sleeve
  const images = (album.images || []).slice().sort((a, b) => Math.abs(a.width - 300) - Math.abs(b.width - 300));

  all[album.uuid] = {
    ...note,
    uuid: album.uuid,
    image: images[0]?.url || null,
    savedAt: new Date().toISOString(),
  };
  await writeFile(insightsPath, JSON.stringify(all, null, 2), "utf-8");

  const words = [note.albumLine, ...note.overview].join(" ").split(/\s+/).length +
    note.listeningNotes.reduce((n, b) => n + b.text.split(/\s+/).length + b.label.split(/\s+/).length, 0);
  console.log(`saved ${note.artist} — ${note.album}  [${album.uuid}]  ~${words} words`);
  return album.uuid;
}
