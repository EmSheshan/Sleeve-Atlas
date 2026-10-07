# Sleeve Atlas

A companion to [1001 Albums Generator](https://1001albumsgenerator.com/). It pulls your album history from the public API and pairs each record with a researched note — why it matters, how it was made, what to listen for — plus a force-directed map of what influenced what.

The site is static except for one thing: submitting a rating/review has to POST to the 1001 Albums Generator API, and its CORS preflight only allows `GET, OPTIONS` — a cross-origin POST never leaves the browser. `netlify/functions/` is a same-origin proxy around that, so it works wherever the site is deployed, not just locally.

## Running it locally

```bash
npm install
npm run build
npm run dev
```

`npm run dev` runs `netlify dev` (via `npx`, no global install needed), which serves `dist/` and the functions in `netlify/functions/` together on one local port, and prints the URL to open. Use `npm run build` alone to produce `dist/` without serving.

## How it's built

The 1001 Albums Generator API sends `Access-Control-Allow-Origin: *` on every GET endpoint used here, so the browser calls those directly. Only the write path needs a proxy.

- `public/data-source.js` — the single data layer. Live reads (project, group, group reviews, global reviews) go straight to the upstream API; notes and rating averages come from baked JSON; writes (`canRate`/`write`) go through `netlify/functions/`. Same relative paths locally (`netlify dev`) and in production.
- `netlify/functions/write.mjs` — proxies the three upstream write endpoints (`rate`, `notes`, `listening-note`) around the CORS restriction.
- `netlify/functions/capabilities.mjs` — tells the client rating is available.
- `scripts/build-static.mjs` — produces `dist/`: the app, `data/insights.json` (the notes), and `data/album-stats.json` (global averages, trimmed from the upstream ~800KB table to the two fields used, keyed by both Spotify id and `artist::title` since the two upstream tables disagree on ids).
- `scripts/notes/*.mjs` — one file per album note, each calling `saveNote()` from `scripts/save-note.mjs`, which resolves the album's uuid and writes into `data/insights.json`.
- `public/graph.js` — D3 map. The graph is **derived from the notes** at runtime rather than stored, so it can't drift out of sync with them.

## Adding a note

Each note carries `influencedBy` and `influenced` arrays; those are what build the map. Write a new file under `scripts/notes/`, modelled on any existing one, then:

```bash
node scripts/notes/<slug>.mjs
```

It prints the word count so the 450–650 budget can be checked. `artist` and `album` must match the generator API's spelling exactly — `saveNote()` looks the album up by artist and title. Keep `influencedBy` + `influenced` to 6 entries combined — each one is a node+edge on the map, and past that it stops reading as a map.

Run `node scripts/check-notes.mjs` after writing any batch — it checks the word budget, the 6-entry cap, that influence dates run the right direction, that every `influencedBy`/`influenced` reference actually resolves to the album it names (catches e.g. `album: "The Beatles (White Album)"` instead of `"The White Album"`, which silently fails to link), and that no record is spelled two different ways across notes.

## Deploying

Connected to Netlify: pushing to `main` triggers a build (`npm run build`, configured in `netlify.toml`) and publishes `dist/` plus the functions. GitHub Pages is no longer used — it can't run the proxy functions at all (static-only host, no server-side execution).
