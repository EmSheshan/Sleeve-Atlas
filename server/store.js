import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "data");

async function ensureDataDir() {
  if (!existsSync(dataDir)) await mkdir(dataDir, { recursive: true });
}

async function readJson(filename, fallback) {
  await ensureDataDir();
  const filePath = path.join(dataDir, filename);
  if (!existsSync(filePath)) return fallback;
  try {
    const raw = await readFile(filePath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

async function writeJson(filename, value) {
  await ensureDataDir();
  const filePath = path.join(dataDir, filename);
  await writeFile(filePath, JSON.stringify(value, null, 2), "utf-8");
}

export const insightsStore = {
  async getAll() {
    return readJson("insights.json", {});
  },
  async get(key) {
    const all = await this.getAll();
    return all[key];
  },
  async set(key, value) {
    const all = await this.getAll();
    all[key] = value;
    await writeJson("insights.json", all);
    return value;
  },
};

function nodeId(artist, name) {
  return `${artist}::${name}`.toLowerCase().replace(/\s+/g, " ").trim();
}

// The influence map is derived from the notes rather than stored separately —
// one source of truth, and it can't drift out of sync with insights.json.
export const graphStore = {
  async get() {
    const insights = await insightsStore.getAll();
    const nodes = {};
    const edges = {};

    const upsert = (node) => {
      nodes[node.id] = { ...nodes[node.id], ...node };
    };

    for (const insight of Object.values(insights)) {
      if (!insight.artist || !insight.album) continue;

      const centre = {
        id: nodeId(insight.artist, insight.album),
        label: insight.album,
        artist: insight.artist,
        album: insight.album,
        year: insight.year || "",
        image: insight.image || null,
        source: "list",
      };
      upsert(centre);

      const link = (rel, direction) => {
        if (!rel.artist || !rel.album) return;
        const other = {
          id: nodeId(rel.artist, rel.album),
          label: rel.album,
          artist: rel.artist,
          album: rel.album,
          year: rel.year || "",
          source: "inferred",
        };
        // a related record that also has its own note is a list album, not inferred
        if (!nodes[other.id] || nodes[other.id].source !== "list") upsert(other);

        const [from, to] =
          direction === "influencedBy" ? [other.id, centre.id] : [centre.id, other.id];
        edges[`${from}->${to}`] = { id: `${from}->${to}`, source: from, target: to, note: rel.note || "" };
      };

      (insight.influencedBy || []).forEach((r) => link(r, "influencedBy"));
      (insight.influenced || []).forEach((r) => link(r, "influenced"));
    }

    return { nodes, edges };
  },
};
