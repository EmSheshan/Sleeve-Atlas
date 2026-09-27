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

app.post("/api/rate", async (req, res) => {
  const { projectName, albumId, rating, notes, generatedAlbumId, fromHistoryView } = req.body || {};
  if (!projectName || !albumId || rating == null) {
    return res.status(400).json({ error: true, message: "projectName, albumId and rating are required" });
  }

  try {
    const upstream = await fetch(
      `https://1001albumsgenerator.com/api/${encodeURIComponent(projectName)}/${encodeURIComponent(albumId)}/rate`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          notes: notes || "",
          fromHistoryView: Boolean(fromHistoryView),
          generatedAlbumId: generatedAlbumId || undefined,
          isUserAlbum: false,
        }),
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
      return res.status(502).json({ error: true, message: "the generator rejected that", detail: data });
    }
    res.json({ ok: true, detail: data });
  } catch (err) {
    res.status(502).json({ error: true, message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Sleeve Atlas running at http://localhost:${PORT}`);
});
