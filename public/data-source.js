// Single data layer for the whole app.
//
// The 1001 Albums Generator API sends `Access-Control-Allow-Origin: *` on every
// endpoint we use, so the browser can call it directly — the old Express proxy
// existed to dodge a CORS problem that doesn't actually exist. Everything else
// (the album notes, the global-average table) ships as static JSON built at
// deploy time. That means no server, and one code path locally and on Pages.

const UPSTREAM = "https://1001albumsgenerator.com";

function titleKey(artist, name) {
  return `${artist || ""}::${name || ""}`.toLowerCase().replace(/\s+/g, " ").trim();
}

async function loadJson(path, fallback) {
  try {
    const res = await fetch(path);
    if (!res.ok) return fallback;
    return await res.json();
  } catch {
    return fallback;
  }
}

let insightsPromise = null;
function allInsights() {
  if (!insightsPromise) insightsPromise = loadJson("data/insights.json", {});
  return insightsPromise;
}

let canRatePromise = null;

let statsPromise = null;
function statsIndex() {
  if (!statsPromise) statsPromise = loadJson("data/album-stats.json", {});
  return statsPromise;
}

window.Data = {
  // Rating needs a same-origin proxy (see the note at the top of this file),
  // so it's only available when a local server is behind the page.
  async canRate() {
    if (canRatePromise === null) {
      canRatePromise = fetch("api/capabilities")
        .then((r) => (r.ok ? r.json() : { canRate: false }))
        .then((d) => Boolean(d.canRate))
        .catch(() => false);
    }
    return canRatePromise;
  },

  // `kind` picks the upstream endpoint — see the WRITES table in server/index.js.
  // Which one applies depends on the album's state, so the caller decides.
  async write(kind, payload) {
    const res = await fetch(`api/write/${kind}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new Error(data.message || `write failed (${res.status})`);
      err.code = data.code || "";
      throw err;
    }
    return data;
  },

  async project(shareId) {
    const res = await fetch(`${UPSTREAM}/api/v1/projects/${encodeURIComponent(shareId)}`);
    if (!res.ok) throw new Error(`1001 Albums Generator returned ${res.status}`);
    return res.json();
  },

  async group(slug) {
    const res = await fetch(`${UPSTREAM}/api/v1/groups/${encodeURIComponent(slug)}`);
    if (!res.ok) throw new Error(`group lookup returned ${res.status}`);
    const data = await res.json();
    return { name: data.name, slug: data.slug, members: data.members || [] };
  },

  // A group that hasn't logged an album yet answers with an error body or a
  // 404/500 — all of which mean "nothing here yet", not a failure.
  async groupAlbum(slug, uuid) {
    try {
      const res = await fetch(
        `${UPSTREAM}/api/v1/groups/${encodeURIComponent(slug)}/albums/${encodeURIComponent(uuid)}`
      );
      if (!res.ok) return { reviews: [], notListened: true };
      const data = await res.json();
      if (data.error) return { reviews: [], notListened: true };
      return { reviews: data.reviews || [] };
    } catch {
      return { reviews: [], notListened: true };
    }
  },

  // Undocumented endpoint the site's own album pages call.
  async globalReviews(uuid, limit = 30) {
    const res = await fetch(
      `${UPSTREAM}/api/reviews/${encodeURIComponent(uuid)}/0/${limit}/false?sortBy=top`
    );
    if (!res.ok) throw new Error(`reviews returned ${res.status}`);
    const data = await res.json();
    const reviews = (data.reviews || [])
      .filter((r) => r.notes)
      .map((r) => ({
        id: r._id,
        notes: r.notes,
        rating: r.rating ?? null,
        thumbsUp: r.thumbsUp || 0,
        listenedAt: r.listenedAt || null,
      }))
      .sort((a, b) => b.thumbsUp - a.thumbsUp);
    return { reviews };
  },

  // The project API and the stats table sometimes carry different Spotify ids
  // for the same record, so fall back to artist+title.
  async albumStats({ spotifyId, name, artist }) {
    const index = await statsIndex();
    return (
      (spotifyId && index[spotifyId]) ||
      index[titleKey(artist, name)] || { averageRating: null, votes: null }
    );
  },

  async insight(uuid) {
    const all = await allInsights();
    return all[uuid] || null;
  },

  // The influence map is derived from the notes rather than stored, so it can
  // never drift out of sync with them.
  async graph() {
    const insights = await allInsights();
    const nodes = {};
    const edges = {};

    // Node identity has to survive the same record being named two ways across
    // two different notes — "The Pretenders" in one, "Pretenders" in another —
    // or the map grows a twin node with half the edges. So the id is built from
    // a canonical form: accents folded, punctuation dropped, leading articles
    // removed. Only the id is normalised; nodes still display their real name.
    const canon = (s) => {
      const base = (s || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "") // björk === bjork
        .replace(/[‘’']/g, "") // pepper's === peppers
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9]+/g, " ") // n.w.a === nwa, white light/white heat
        .replace(/\s+/g, " ")
        .trim();
      // "The The" and Jethro Tull's "A" are entirely article — keep those whole
      const stripped = base.replace(/\b(the|a|an)\b/g, " ").replace(/\s+/g, " ").trim();
      return stripped || base;
    };

    const nodeId = (artist, album) => `${canon(artist)}::${canon(album)}`;
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
        // a related record that also has its own note is a list album
        if (!nodes[other.id] || nodes[other.id].source !== "list") upsert(other);

        const [from, to] =
          direction === "influencedBy" ? [other.id, centre.id] : [centre.id, other.id];
        edges[`${from}->${to}`] = {
          id: `${from}->${to}`,
          source: from,
          target: to,
          note: rel.note || "",
        };
      };

      (insight.influencedBy || []).forEach((r) => link(r, "influencedBy"));
      (insight.influenced || []).forEach((r) => link(r, "influenced"));
    }

    return { nodes, edges };
  },
};
