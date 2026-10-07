# List Sort Controls Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let the "your list" grid be sorted by Recently Listened (today's default), Release Date, Rating, or Genre, each with a direction toggle; Genre renders as grouped sections instead of a flat reorder.

**Architecture:** This is a vanilla-JS, no-bundler, no-framework site — `public/index.html` loads `data-source.js`, `app.js`, `graph.js` as plain classic `<script>` tags (not ES modules), so everything shares one global scope. All new logic is added as plain top-level functions inside `public/app.js`, next to the existing `applySearch`/`renderCards`/`entryMatches` it extends. No new files, no new script tags, no build-tooling changes.

**Tech Stack:** Vanilla JS (classic scripts, ES2020+ syntax), no framework, no test runner. The repo has no automated test framework (`package.json` only has `build`/`dev` scripts). Pure logic (the sort comparators and the genre grouping) is verified with scripted Playwright `browser_evaluate` calls against the running dev server, calling the functions by name (they're `window` globals because the script is non-module) — this is the pragmatic equivalent of a unit test given the constraints, and mirrors how DOM/visual changes in this project are already verified in this codebase's history (Playwright screenshots, no test framework). End-to-end rendering is verified the same way: load the real page, drive the real controls, read the real DOM.

## Global Constraints

- No persistence: sort selection is in-memory only, resets to `"recent"`/`"desc"` on every page load. No new `localStorage` key.
- `public/app.js` stays a classic (non-module) script — do not add `export`/`import` syntax, do not change the `<script>` tags' `type` attribute.
- Unknown/missing sort keys (unparseable release year, missing rating) always sort last, in both directions.
- An album with multiple genres appears in exactly one genre section — its first-listed genre (`album.genres[0]`). Albums with no genres land in a trailing "unspecified" section that always sorts last, in both directions.
- Within any section/flat list, entries that tie on the active sort key keep their existing relative order (stable sort, no secondary key).
- Reuse the existing per-card DOM markup/logic exactly as `renderCards` builds it today — do not change card HTML/classes as part of this feature.
- Styling matches the existing mono/uppercase/flat-fill/zero-radius language already used by `#search-input`, `.tab-btn`, etc. — no rounded corners, no new color outside existing CSS custom properties in `public/styles.css`.

---

## File Structure

- **Modify `public/index.html`** — add the sort `<select>` and direction-toggle `<button>` inside `#search-bar` (lines ~49-53); add a new `#genre-sections` container as a sibling of `#album-grid` (line ~55).
- **Modify `public/app.js`** — add sort/group state and pure logic functions near `entryMatches`/`applySearch` (currently lines 416-440); extract the per-card DOM builder out of `renderCards` (currently lines 442-478) into a shared `buildAlbumCard(entry)` helper; add `renderGroupedCards(sections)`; rewire `applySearch` to sort/group before rendering; add event listeners for the two new controls near the existing search listeners (currently lines 863-877).
- **Modify `public/styles.css`** — style `.sort-select` / `.sort-dir-btn` to match `.search-bar`'s existing children (near the `.search-bar`/`#search-input` rules, currently lines 661-710); add `.genre-section` / `.genre-section-heading` rules (near `.insight-section h3`, currently lines 1230-1247, which is the closest existing "small uppercase mono section label" pattern to match).

No new files. No changes to `public/data-source.js` or `public/graph.js`.

---

## Task 1: Extract card-building into a shared helper (pure refactor, no behavior change)

**Files:**
- Modify: `public/app.js:442-478` (the `renderCards` function)

**Interfaces:**
- Consumes: nothing new — uses the same globals `renderCards` already uses today: `albumGrid`, `makeCoverImage`, `albumImage`, `sampledWashGradient`, `openModal`.
- Produces: `buildAlbumCard(entry) -> HTMLElement` — later tasks (`renderCards`, `renderGroupedCards`) both call this instead of building card markup themselves.

This task only moves code; it must not change what ends up on screen. Do it first and verify it's a no-op before building sort logic on top of it.

- [ ] **Step 1: Read the current `renderCards` function to confirm the exact code being moved**

Run: view `public/app.js` lines 442-478. Confirm it still matches:

```js
function renderCards(entries) {
  albumGrid.innerHTML = "";

  for (const entry of entries) {
    const album = entry.album;
    const card = document.createElement("article");
    card.className = "album-card";
    card.innerHTML = `
      <div class="art-frame"></div>
      <div class="card-body">
        <p class="card-title" title="${album.name.replace(/"/g, "&quot;")}">${album.name}</p>
        <p class="card-artist">${album.artist}</p>
        <div class="card-meta">
          <span>${album.releaseDate}</span>
          <span class="stars" style="color: ${ratingColor(entry.rating)}">${starString(entry.rating)}</span>
        </div>
      </div>
    `;

    const cover = makeCoverImage(
      albumImage(album, 300),
      `${album.name} cover`,
      (css) => card.style.setProperty("--plate", css),
      undefined,
      (grad) => card.style.setProperty("--plate-grad", grad)
    );
    cover.addEventListener("load", () => {
      const wash = sampledWashGradient(cover);
      if (wash) card.style.setProperty("--plate-wash", wash);
    });
    cover.loading = "lazy";
    card.querySelector(".art-frame").appendChild(cover);

    card.addEventListener("click", () => openModal(album, entry));
    albumGrid.appendChild(card);
  }
}
```

If the file has drifted from this, stop and re-read the surrounding code before continuing — the later tasks assume this exact starting shape.

- [ ] **Step 2: Replace it with a `buildAlbumCard` helper plus a thin `renderCards`**

Replace the function from Step 1 with:

```js
function buildAlbumCard(entry) {
  const album = entry.album;
  const card = document.createElement("article");
  card.className = "album-card";
  card.innerHTML = `
    <div class="art-frame"></div>
    <div class="card-body">
      <p class="card-title" title="${album.name.replace(/"/g, "&quot;")}">${album.name}</p>
      <p class="card-artist">${album.artist}</p>
      <div class="card-meta">
        <span>${album.releaseDate}</span>
        <span class="stars" style="color: ${ratingColor(entry.rating)}">${starString(entry.rating)}</span>
      </div>
    </div>
  `;

  const cover = makeCoverImage(
    albumImage(album, 300),
    `${album.name} cover`,
    (css) => card.style.setProperty("--plate", css),
    undefined,
    (grad) => card.style.setProperty("--plate-grad", grad)
  );
  cover.addEventListener("load", () => {
    const wash = sampledWashGradient(cover);
    if (wash) card.style.setProperty("--plate-wash", wash);
  });
  cover.loading = "lazy";
  card.querySelector(".art-frame").appendChild(cover);

  card.addEventListener("click", () => openModal(album, entry));
  return card;
}

function renderCards(entries) {
  albumGrid.innerHTML = "";
  for (const entry of entries) {
    albumGrid.appendChild(buildAlbumCard(entry));
  }
}
```

- [ ] **Step 3: Verify it's a no-op by running the real app**

Run (if not already running): `npm --prefix . run dev` is the project's own dev command but normally runs via the shared `sleeve-atlas` launch entry on `localhost:4001`. Use whichever of those is already running — this feature should be developed against that live session, since `npm run build` is also required after any `public/` edit for the Netlify-served `dist/` copy to update (see Task 5, Step 6 for the full rebuild-and-check cycle; for this task a quick manual look is enough).

Use Playwright: navigate to `http://localhost:4001/`, sign in if not already, and take a screenshot of the "your list" grid. Compare against what it looked like before this edit (same cards, same order, same look). There should be zero visible difference.

- [ ] **Step 4: Commit**

```bash
git add public/app.js
git commit -m "Extract album-card DOM building into a shared buildAlbumCard helper"
```

---

## Task 2: Pure sort/group logic + scripted verification

**Files:**
- Modify: `public/app.js` — add new functions near `entryMatches` (currently `public/app.js:416-422`)

**Interfaces:**
- Consumes: entry objects shaped like `{ album: { releaseDate, genres }, rating }` (this is exactly the shape of elements in `allEntries`, already established by the existing `entryMatches(entry, needle)`).
- Produces:
  - `sortEntries(entries, sortMode, dir) -> Array` — `sortMode` is one of `"recent" | "release" | "rating"` (NOT `"genre"` — genre uses `groupByGenre` instead, see below). `dir` is `"asc" | "desc"`. Returns a new array; does not mutate `entries`.
  - `genreLabel(entry) -> string | null` — `entry.album.genres[0]` with `-` replaced by spaces, or `null` if the album has no genres.
  - `groupByGenre(entries, dir) -> Array<{ label: string, entries: Array }>` — buckets `entries` by `genreLabel`, sorted alphabetically by `dir`, with a trailing `{ label: "unspecified", entries: [...] }` section (only present if at least one entry has no genre) that always comes last regardless of `dir`.
  - Later tasks (Task 5) call `sortEntries` for `currentSort !== "genre"` and `groupByGenre` for `currentSort === "genre"`.

- [ ] **Step 1: Add the functions**

Insert immediately after the existing `entryMatches` function (`public/app.js:416-422`):

```js
function sortKeyReleaseYear(entry) {
  const y = parseInt(entry.album.releaseDate, 10);
  return Number.isFinite(y) ? y : null;
}

function sortKeyRating(entry) {
  return typeof entry.rating === "number" ? entry.rating : null;
}

// Shared by release-date and rating sorts: entries whose key is null (bad
// date, no rating) always sort to the end, in both directions — a missing
// value isn't "low", it's unknown, and shouldn't jump to the top on asc.
function compareByKey(keyFn, dir) {
  return (a, b) => {
    const ka = keyFn(a);
    const kb = keyFn(b);
    if (ka === null && kb === null) return 0;
    if (ka === null) return 1;
    if (kb === null) return -1;
    return dir === "asc" ? ka - kb : kb - ka;
  };
}

function sortEntries(entries, sortMode, dir) {
  if (sortMode === "release") return entries.slice().sort(compareByKey(sortKeyReleaseYear, dir));
  if (sortMode === "rating") return entries.slice().sort(compareByKey(sortKeyRating, dir));
  // "recent": entries already arrive in allEntries' order, which IS today's
  // default (most-recently-logged first) — that's "desc" for this key. "asc"
  // just reverses it. There's no comparator because log order isn't a value
  // on the entry itself to sort by, it's the array's own order.
  return dir === "asc" ? entries.slice().reverse() : entries.slice();
}

function genreLabel(entry) {
  const g = (entry.album.genres || [])[0];
  return g ? g.replace(/-/g, " ") : null;
}

function groupByGenre(entries, dir) {
  const buckets = new Map();
  const unspecified = [];
  for (const entry of entries) {
    const label = genreLabel(entry);
    if (label === null) {
      unspecified.push(entry);
      continue;
    }
    if (!buckets.has(label)) buckets.set(label, []);
    buckets.get(label).push(entry);
  }
  const labels = [...buckets.keys()].sort((a, b) => (dir === "asc" ? a.localeCompare(b) : b.localeCompare(a)));
  const sections = labels.map((label) => ({ label, entries: buckets.get(label) }));
  if (unspecified.length) sections.push({ label: "unspecified", entries: unspecified });
  return sections;
}
```

- [ ] **Step 2: Rebuild dist so the dev server serves the new code**

```bash
npm run build
```

Expected output: `built dist/ — ... notes ..., ... albums in stats index ...` with no errors.

- [ ] **Step 3: Verify the logic with Playwright against the running dev server**

Navigate Playwright to `http://localhost:4001/` (reload if already open, to pick up the rebuilt `dist/`). Then run this via `browser_evaluate` (it only calls global functions and logs — it does not touch the page's own state, so it's safe to run against the live session):

```js
() => {
  const e1 = { album: { releaseDate: "1984", genres: ["punk"] }, rating: 5 };
  const e2 = { album: { releaseDate: "1991", genres: ["grunge", "rock"] }, rating: 3 };
  const e3 = { album: { releaseDate: "unknown", genres: [] }, rating: null };
  const e4 = { album: { releaseDate: "1974", genres: ["funk"] }, rating: 4 };
  const all = [e1, e2, e3, e4];

  const results = {};
  results.releaseDesc = sortEntries(all, "release", "desc").map((e) => e.album.releaseDate);
  results.releaseAsc = sortEntries(all, "release", "asc").map((e) => e.album.releaseDate);
  results.ratingDesc = sortEntries(all, "rating", "desc").map((e) => e.rating);
  results.ratingAsc = sortEntries(all, "rating", "asc").map((e) => e.rating);
  results.recentDesc = sortEntries(all, "recent", "desc").map((e) => e.album.releaseDate);
  results.recentAsc = sortEntries(all, "recent", "asc").map((e) => e.album.releaseDate);
  results.genreAsc = groupByGenre(all, "asc").map((s) => [s.label, s.entries.length]);
  results.genreDesc = groupByGenre(all, "desc").map((s) => [s.label, s.entries.length]);
  return results;
}
```

Expected return value:

```json
{
  "releaseDesc": ["1991", "1984", "1974", "unknown"],
  "releaseAsc": ["1974", "1984", "1991", "unknown"],
  "ratingDesc": [5, 4, 3, null],
  "ratingAsc": [3, 4, 5, null],
  "recentDesc": ["1984", "1991", "unknown", "1974"],
  "recentAsc": ["1974", "unknown", "1991", "1984"],
  "genreAsc": [["funk", 1], ["grunge", 1], ["punk", 1], ["unspecified", 1]],
  "genreDesc": [["punk", 1], ["grunge", 1], ["funk", 1], ["unspecified", 1]]
}
```

Note `"unknown"` and `null` land last in both directions (releaseDesc/Asc and ratingDesc/Asc), `recentDesc` is literally the input array order unchanged, `recentAsc` is the input array reversed, and `unspecified` is always last in both `genreAsc` and `genreDesc`.

If the actual output doesn't match, fix the functions from Step 1 before moving on — don't proceed to wiring this into the UI with unverified logic.

- [ ] **Step 4: Commit**

```bash
git add public/app.js
git commit -m "Add sort comparators and genre-grouping logic"
```

---

## Task 3: Add the sort control markup and the genre-sections container

**Files:**
- Modify: `public/index.html:49-55`

**Interfaces:**
- Produces: `#sort-select` (a `<select>` with values `recent`/`release`/`rating`/`genre`), `#sort-dir-btn` (a `<button>`), `#genre-sections` (a `<div>`, initially `hidden`) — Task 5 looks these up by id and wires them to the logic from Task 2.

- [ ] **Step 1: Replace the search-bar block**

Replace (currently `public/index.html:49-55`):

```html
    <div class="search-bar" id="search-bar" hidden>
      <input id="search-input" type="search" placeholder="search albums, artists, years, genres&hellip;" autocomplete="off" />
      <button id="search-clear" class="search-clear" aria-label="Clear search">&times;</button>
      <span class="search-count" id="search-count"></span>
    </div>

    <div id="album-grid" class="album-grid"></div>
```

with:

```html
    <div class="search-bar" id="search-bar" hidden>
      <input id="search-input" type="search" placeholder="search albums, artists, years, genres&hellip;" autocomplete="off" />
      <button id="search-clear" class="search-clear" aria-label="Clear search">&times;</button>
      <select id="sort-select" class="sort-select" aria-label="Sort by">
        <option value="recent">recently listened</option>
        <option value="release">release date</option>
        <option value="rating">rating</option>
        <option value="genre">genre</option>
      </select>
      <button id="sort-dir-btn" class="sort-dir-btn" aria-label="Sort descending">&darr;</button>
      <span class="search-count" id="search-count"></span>
    </div>

    <div id="album-grid" class="album-grid"></div>
    <div id="genre-sections" hidden></div>
```

- [ ] **Step 2: Commit**

```bash
git add public/index.html
git commit -m "Add sort control markup and genre-sections container"
```

---

## Task 4: Style the new controls

**Files:**
- Modify: `public/styles.css` — add new rules near the `.search-bar`/`#search-input` block (currently `public/styles.css:661-710`) and near `.insight-section h3` (currently `public/styles.css:1230-1247`)

- [ ] **Step 1: Add `.sort-select` / `.sort-dir-btn`, matching the existing search-bar children**

Insert after the `.search-count` rule (currently ending around `public/styles.css:710`):

```css
.sort-select {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: 0.64rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: var(--paper-2);
  color: var(--ink);
  border: 1px solid var(--edge-2);
  border-radius: 0;
  padding: 0.45rem 0.6rem;
  cursor: pointer;
}

.sort-select:focus { outline: 1px solid var(--accent); outline-offset: -1px; }

.sort-dir-btn {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  line-height: 1;
  background: var(--paper-2);
  color: var(--ink-2);
  border: 1px solid var(--edge-2);
  border-radius: 0;
  width: 2.1rem;
  height: 2.1rem;
  padding: 0;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.sort-dir-btn:hover { color: var(--ink); border-color: var(--ink); }
```

- [ ] **Step 2: Add `.genre-section` / `.genre-section-heading`, matching `.insight-section h3`'s label style**

Insert after the `.insight-section h3` rule (currently ending around `public/styles.css:1247`):

```css
.genre-section { margin-bottom: 2.2rem; }
.genre-section:last-child { margin-bottom: 0; }

.genre-section-heading {
  font-family: var(--font-mono);
  font-size: 0.64rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-2);
  margin: 0 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--edge);
}
```

- [ ] **Step 3: Visually verify against the running dev server**

Rebuild and reload:

```bash
npm run build
```

Navigate Playwright to `http://localhost:4001/`, sign in if needed, take a screenshot of the search-bar row. Confirm: the select and the direction button sit inline with the search input and count, same height, same flat/square/mono look as the rest of the bar (no rounded corners, no color outside the existing palette).

- [ ] **Step 4: Commit**

```bash
git add public/styles.css
git commit -m "Style the sort controls and genre section headings"
```

---

## Task 5: Wire the controls to the logic and render genre sections

**Files:**
- Modify: `public/app.js` — add state, `renderGroupedCards`, rewire `applySearch`, add event listeners

**Interfaces:**
- Consumes: `sortEntries`, `groupByGenre`, `buildAlbumCard` (Tasks 1-2), `#sort-select`/`#sort-dir-btn`/`#genre-sections` (Task 3).
- Produces: the finished feature — no further tasks depend on this one.

- [ ] **Step 1: Add state and element lookups**

Immediately after the existing `let allEntries = [];` (`public/app.js:29`), add:

```js
let currentSort = "recent";
let sortDir = "desc";
```

Immediately after the existing `const searchCount = document.getElementById("search-count");` (`public/app.js:71`), add:

```js
const sortSelect = document.getElementById("sort-select");
const sortDirBtn = document.getElementById("sort-dir-btn");
const genreSectionsEl = document.getElementById("genre-sections");
```

- [ ] **Step 2: Make `renderCards` own showing the flat grid / hiding the genre sections**

`renderCards` already exists from Task 1. Change it to:

```js
function renderCards(entries) {
  genreSectionsEl.hidden = true;
  albumGrid.hidden = false;
  albumGrid.innerHTML = "";
  for (const entry of entries) {
    albumGrid.appendChild(buildAlbumCard(entry));
  }
}
```

(Only the first three lines are new — the loop body is unchanged from Task 1.)

- [ ] **Step 3: Add `renderGroupedCards`**

Add immediately after `renderCards`:

```js
function renderGroupedCards(sections) {
  albumGrid.hidden = true;
  genreSectionsEl.innerHTML = "";
  for (const { label, entries } of sections) {
    const section = document.createElement("section");
    section.className = "genre-section";

    const heading = document.createElement("h3");
    heading.className = "genre-section-heading";
    heading.textContent = label;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "album-grid";
    for (const entry of entries) {
      grid.appendChild(buildAlbumCard(entry));
    }
    section.appendChild(grid);

    genreSectionsEl.appendChild(section);
  }
  genreSectionsEl.hidden = false;
}
```

- [ ] **Step 4: Rewire `applySearch` to sort/group before rendering**

Find the existing `applySearch` (`public/app.js:424-440`):

```js
function applySearch() {
  const needle = searchInput.value.trim().toLowerCase();
  const matches = needle ? allEntries.filter((e) => entryMatches(e, needle)) : allEntries;

  searchCount.textContent = needle
    ? `${matches.length} of ${allEntries.length}`
    : `${allEntries.length} albums`;

  renderCards(matches);

  if (!matches.length) {
    listEmptyState.hidden = false;
    listEmptyState.textContent = `no matches for "${searchInput.value.trim()}"`;
  } else {
    listEmptyState.hidden = true;
  }
}
```

Replace the single `renderCards(matches);` line with:

```js
  if (currentSort === "genre") {
    renderGroupedCards(groupByGenre(matches, sortDir));
  } else {
    renderCards(sortEntries(matches, currentSort, sortDir));
  }
```

(Everything else in the function — the `needle`/`matches` computation above it, and the empty-state handling below it — stays exactly as it is today.)

- [ ] **Step 5: Wire the two new controls**

Add near the existing search listeners (after `public/app.js:876`, right before the `// escape closes...` comment):

```js
function updateSortDirBtn() {
  sortDirBtn.textContent = sortDir === "desc" ? "↓" : "↑";
  sortDirBtn.setAttribute("aria-label", sortDir === "desc" ? "Sort descending" : "Sort ascending");
}

sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;
  applySearch();
});

sortDirBtn.addEventListener("click", () => {
  sortDir = sortDir === "desc" ? "asc" : "desc";
  updateSortDirBtn();
  applySearch();
});
```

- [ ] **Step 6: Rebuild and do a full end-to-end check against the running dev server**

```bash
npm run build
```

Expected output: `built dist/ — ...` with no errors.

Using Playwright against `http://localhost:4001/` (reload after the rebuild), signed in to a real project:

1. Confirm the grid's default order on load is unchanged from before this feature (same as Task 1's baseline screenshot) — `sort-select` should read "recently listened" and the direction button should show `↓`.
2. Select "release date" from `#sort-select`. Screenshot the grid; confirm album years descend left-to-right/top-to-bottom (read a handful of `.card-meta span` year values via `browser_evaluate` and confirm they're non-increasing, ignoring any trailing entries with unparseable dates).
3. Click `#sort-dir-btn`. Confirm the button now shows `↑` and the year order has flipped to ascending (same check, non-decreasing).
4. Select "rating". Confirm `.stars` values (read via the `title`/`style` or by re-deriving from the known test project's ratings) go from the direction indicated by the toggle; re-toggle direction and confirm it flips.
5. Select "genre". Confirm `#genre-sections` is visible and `#album-grid` is hidden (`browser_evaluate` checking `.hidden` on both elements), confirm section headings read as lowercase genre names in alphabetical order (or reverse, matching the toggle), and confirm an "unspecified" section (if the signed-in project has any album with no genre) appears last regardless of toggle direction.
6. With "genre" still selected, type a search term that matches only some albums into `#search-input`. Confirm sections with no matching albums disappear entirely (count `.genre-section` elements before/after).
7. Switch back to "recently listened". Confirm `#album-grid` is visible again, `#genre-sections` is hidden, and the order matches step 1's baseline.

If any check fails, fix the relevant function from Task 2 or the wiring in this task before continuing — do not move on with a known-broken check.

- [ ] **Step 7: Commit**

```bash
git add public/app.js
git commit -m "Wire sort/direction controls to the grid, add genre grouping view"
```

---

## Post-implementation

After Task 5, the feature is complete and matches every section of `docs/superpowers/specs/2026-10-07-list-sort-controls-design.md`. No further tasks.
