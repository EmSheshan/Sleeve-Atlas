# Sleeve Atlas

A companion to [1001 Albums Generator](https://1001albumsgenerator.com/). It pulls your album history from the public API and pairs each record with a researched note — why it matters, how it was made, what to listen for — plus a force-directed map of what influenced what.

The site is **fully static**. There's no server and no API key.

## Running it locally

```bash
npm install
npm start
```

Then open http://localhost:4001 and enter your generator project name (e.g. `emsh`), or paste your full generator URL.

`npm start` builds `dist/` and serves it. The Express dependency is only a local static file server — `fetch()` of the baked JSON needs http rather than `file://`. Use `npm run build` alone to produce `dist/` without serving.

## How it's built

The 1001 Albums Generator API sends `Access-Control-Allow-Origin: *` on every endpoint used here, so the browser calls it directly and no proxy is needed. Only two things get baked at build time.

- `public/data-source.js` — the single data layer. Live data (project, group, group reviews, global reviews) goes straight to the upstream API; notes and rating averages come from baked JSON. Same code path locally and in production.
- `scripts/build-static.mjs` — produces `dist/`: the app, `data/insights.json` (the notes), and `data/album-stats.json` (global averages, trimmed from the upstream ~800KB table to the two fields used, keyed by both Spotify id and `artist::title` since the two upstream tables disagree on ids).
- `scripts/notes/*.mjs` — one file per album note, each calling `saveNote()` from `scripts/save-note.mjs`, which resolves the album's uuid and writes into `data/insights.json`.
- `public/graph.js` — D3 map. The graph is **derived from the notes** at runtime rather than stored, so it can't drift out of sync with them.
- `server/index.js` — local static file server only.

## Adding a note

Each note carries `influencedBy` and `influenced` arrays; those are what build the map. Write a new file under `scripts/notes/`, modelled on any existing one, then:

```bash
node scripts/notes/<slug>.mjs
```

It prints the word count so the 450–650 budget can be checked. `artist` and `album` must match the generator API's spelling exactly — `saveNote()` looks the album up by artist and title.

## Deploying

Pushing to `main` triggers `.github/workflows/static.yml`, which runs the build and publishes `dist/` to GitHub Pages.
