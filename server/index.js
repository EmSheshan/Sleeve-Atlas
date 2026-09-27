import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { insightsStore, graphStore } from "./store.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

// --- 1001 Albums Generator proxy (avoids CORS, adds light caching) ---
const projectCache = new Map(); // shareId -> { data, expiresAt }
const PROJECT_CACHE_MS = 5 * 60 * 1000;

app.get("/api/project/:shareId", async (req, res) => {
  const { shareId } = req.params;
  const cached = projectCache.get(shareId);
  if (cached && cached.expiresAt > Date.now()) {
    return res.json(cached.data);
  }

  try {
    const upstream = await fetch(
      `https://1001albumsgenerator.com/api/v1/projects/${encodeURIComponent(shareId)}`
    );
    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error: true,
        message: `1001 Albums Generator returned ${upstream.status}`,
      });
    }
    const data = await upstream.json();
    projectCache.set(shareId, { data, expiresAt: Date.now() + PROJECT_CACHE_MS });
    res.json(data);
  } catch (err) {
    res.status(502).json({ error: true, message: `Failed to reach 1001 Albums Generator: ${err.message}` });
  }
});

// --- Reviews: the listener's group, and everyone on the site ---

const reviewCache = new Map();
const REVIEW_CACHE_MS = 5 * 60 * 1000;

async function cachedJson(key, url) {
  const hit = reviewCache.get(key);
  if (hit && hit.expiresAt > Date.now()) return hit.data;
  const upstream = await fetch(url);
  if (!upstream.ok) {
    const err = new Error(`1001 Albums Generator returned ${upstream.status}`);
    err.status = upstream.status;
    throw err;
  }
  const data = await upstream.json();
  reviewCache.set(key, { data, expiresAt: Date.now() + REVIEW_CACHE_MS });
  return data;
}

app.get("/api/group/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const data = await cachedJson(
      `group:${slug}`,
      `https://1001albumsgenerator.com/api/v1/groups/${encodeURIComponent(slug)}`
    );
    res.json({ name: data.name, slug: data.slug, members: data.members || [] });
  } catch (err) {
    res.status(err.status || 502).json({ error: true, message: err.message });
  }
});

app.get("/api/group/:slug/album/:uuid", async (req, res) => {
  const { slug, uuid } = req.params;
  try {
    const data = await cachedJson(
      `groupalbum:${slug}:${uuid}`,
      `https://1001albumsgenerator.com/api/v1/groups/${encodeURIComponent(slug)}/albums/${encodeURIComponent(uuid)}`
    );
    // the upstream answers 200 with an error body when the group hasn't heard it
    if (data.error) return res.json({ reviews: [], notListened: true });
    res.json({ reviews: data.reviews || [] });
  } catch (err) {
    // upstream 404s/500s here simply mean the group has no entry for this album
    // yet (today's pick, most often) — that's an empty state, not a failure
    res.json({ reviews: [], notListened: true });
  }
});

// Undocumented endpoint the site's own album pages call; shape is
// /api/reviews/<albumUuid>/<offset>/<limit>/<isUserAlbum>?sortBy=top|date|random
app.get("/api/global-reviews/:uuid", async (req, res) => {
  const { uuid } = req.params;
  const sort = ["top", "date", "random"].includes(req.query.sort) ? req.query.sort : "top";
  const limit = Math.min(Number(req.query.limit) || 30, 100);
  try {
    const data = await cachedJson(
      `global:${uuid}:${sort}:${limit}`,
      `https://1001albumsgenerator.com/api/reviews/${encodeURIComponent(uuid)}/0/${limit}/false?sortBy=${sort}`
    );
    const reviews = (data.reviews || [])
      .filter((r) => r.notes)
      .map((r) => ({
        id: r._id,
        notes: r.notes,
        rating: r.rating ?? null,
        thumbsUp: r.thumbsUp || 0,
        listenedAt: r.listenedAt || null,
      }))
      // upstream "top" is already like-ordered, but don't rely on it
      .sort((a, b) => b.thumbsUp - a.thumbsUp);
    res.json({ reviews });
  } catch (err) {
    res.status(err.status || 502).json({ error: true, message: err.message });
  }
});

// Global averages. The upstream only offers the whole 1088-album table (~800KB),
// so fetch it once an hour and index it rather than per-album.
let statsIndex = null;
let statsExpiresAt = 0;

async function getStatsIndex() {
  if (statsIndex && statsExpiresAt > Date.now()) return statsIndex;
  const upstream = await fetch("https://1001albumsgenerator.com/api/v1/albums/stats");
  if (!upstream.ok) throw new Error(`stats returned ${upstream.status}`);
  const data = await upstream.json();
  statsIndex = new Map();
  for (const a of data.albums || []) {
    const entry = { averageRating: a.averageRating, votes: a.votes };
    if (a.spotifyId) statsIndex.set(a.spotifyId, entry);
    if (a.id) statsIndex.set(a.id, entry);
    statsIndex.set(titleKey(a.artist, a.name), entry);
  }
  statsExpiresAt = Date.now() + 60 * 60 * 1000;
  return statsIndex;
}

function titleKey(artist, name) {
  return `${artist || ""}::${name || ""}`.toLowerCase().replace(/\s+/g, " ").trim();
}

// The project API and the stats table sometimes carry different Spotify ids for
// the same record (regional variants), so fall back to artist+title.
app.get("/api/album-stats", async (req, res) => {
  const { spotifyId, name, artist } = req.query;
  try {
    const index = await getStatsIndex();
    const hit =
      (spotifyId && index.get(spotifyId)) ||
      index.get(titleKey(artist, name)) ||
      null;
    res.json(hit || { averageRating: null, votes: null });
  } catch (err) {
    res.status(502).json({ error: true, message: err.message });
  }
});

app.get("/api/insight/:uuid", async (req, res) => {
  const insight = await insightsStore.get(req.params.uuid);
  if (!insight) return res.status(404).json({ error: true, message: "no notes written for this album yet" });
  res.json({ insight });
});

app.get("/api/graph", async (_req, res) => {
  const graph = await graphStore.get();
  res.json(graph);
});

app.listen(PORT, () => {
  console.log(`Sleeve Atlas running at http://localhost:${PORT}`);
});
