# Sleeve Atlas

A mid-century-modern companion to [1001 Albums Generator](https://1001albumsgenerator.com/). Pulls your album history from its public API, and lets you ask Claude for the liner notes: why an album matters, who's on it, what to listen for, and what it influenced (or was influenced by). Every album you ask about gets added to a growing influence map.

## Setup

1. Copy `.env.example` to `.env` and add your own Anthropic API key:

   ```
   ANTHROPIC_API_KEY=sk-ant-...
   ```

2. Install dependencies and run:

   ```bash
   npm install
   npm start
   ```

3. Open http://localhost:4001. Enter your 1001 Albums Generator share ID (find it on your generator page under "Share your journey" — either the full `/shares/...` URL or just the ID at the end).

## How it's built

- `server/index.js` — Express app. Proxies `GET /api/v1/projects/:shareId` from 1001albumsgenerator.com (avoids CORS, adds a 5-minute cache), and exposes `POST /api/insight` which asks Claude (model `claude-sonnet-5`) for a structured read on an album.
- `server/claude.js` — the prompt and JSON-schema contract for album insight.
- `server/store.js` — flat-file cache for insights (`data/insights.json`) and the accumulated influence graph (`data/graph.json`). Nothing here is a database; it's just enough persistence to avoid re-asking Claude for the same album twice and to let the map grow across sessions.
- `public/` — no build step. Plain HTML/CSS/JS, D3 (via CDN) for the force-directed influence map.

Nothing is sent to Anthropic except the album's public metadata (title, artist, year, genres/styles, Wikipedia link) already returned by the 1001 Albums Generator API.
