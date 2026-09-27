// Local server. Two jobs:
//
//   1. serve dist/ over http (fetch() of the baked JSON needs a real origin)
//   2. proxy the one write the app makes — submitting a rating
//
// Reading is all done straight from the browser, since the 1001 Albums
// Generator API allows cross-origin GETs. Writing it does NOT allow: the
// preflight answers `Access-Control-Allow-Methods: GET, OPTIONS`, so a POST
// from another origin is blocked by the browser before it's even sent. Hence
// this proxy, and hence rating only working when you run the app locally —
// the GitHub Pages build has no server behind it.
import express from "express";
import path from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");
const PORT = process.env.PORT || 4001;

if (!existsSync(dist)) {
  console.error("dist/ not found — run `npm run build` first.");
  process.exit(1);
}

const app = express();
app.use(express.json());
app.use(express.static(dist));

// Lets the client tell whether it's running locally (rating available) or on
// Pages (read-only), instead of guessing from the hostname.
app.get("/api/capabilities", (_req, res) => res.json({ canRate: true }));

// The generator has three separate write endpoints, and which one applies
// depends entirely on the album's state. Posting to the wrong one just returns
// `{success:false}` with an errorCode, which is what made this look broken:
//
//   /rate            rate an album that is NOT yet rated (from the history view)
//   /notes           edit the review on a history album — refuses once rated
//   /listening-note  notes on the CURRENT album, before it has a rating at all
//
// Ratings are one-way: once an album has one, both /rate and /notes answer
// `already-rated` and there is no API route that overwrites it.
const WRITES = {
  rate: {
    path: "rate",
    body: ({ rating, notes, generatedAlbumId, fromHistoryView }) => ({
      rating,
      notes: notes || "",
      fromHistoryView: Boolean(fromHistoryView),
      generatedAlbumId: generatedAlbumId || undefined,
      isUserAlbum: false,
    }),
  },
  notes: {
    path: "notes",
    body: ({ notes, generatedAlbumId }) => ({
      notes: notes || "",
      generatedAlbumId: generatedAlbumId || undefined,
      isUserAlbum: false,
    }),
  },
  "listening-note": {
    path: "listening-note",
    body: ({ notes }) => ({ notes: notes || "", isUserAlbum: false }),
  },
};

// Upstream error codes, in words that say what the user can do about it.
const REASONS = {
  "already-rated": "1001 locks the rating and review once an album has been rated — there's no API route that changes it.",
  "old-session-error": "1001 says that isn't your current album any more. Refresh and try again.",
  "listened-not-found": "1001 has no listen recorded for this album yet.",
};

app.post("/api/write/:kind", async (req, res) => {
  const write = WRITES[req.params.kind];
  if (!write) return res.status(404).json({ error: true, message: `unknown write "${req.params.kind}"` });

  const { projectName, albumId } = req.body || {};
  if (!projectName || !albumId) {
    return res.status(400).json({ error: true, message: "projectName and albumId are required" });
  }
  if (req.params.kind === "rate" && req.body.rating == null) {
    return res.status(400).json({ error: true, message: "rating is required" });
  }

  try {
    const upstream = await fetch(
      `https://1001albumsgenerator.com/api/${encodeURIComponent(projectName)}/${encodeURIComponent(albumId)}/${write.path}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(write.body(req.body)),
      }
    );

    const text = await upstream.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return res.status(502).json({ error: true, message: `unexpected response: ${text.slice(0, 120)}` });
    }

    if (!data.success) {
      const code = data.errorCode || "";
      return res.status(502).json({
        error: true,
        code,
        message: REASONS[code] || (code ? `1001 said: ${code}` : "1001 rejected that, without saying why."),
        detail: data,
      });
    }
    res.json({ ok: true, detail: data });
  } catch (err) {
    res.status(502).json({ error: true, message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Sleeve Atlas running at http://localhost:${PORT}`);
});
