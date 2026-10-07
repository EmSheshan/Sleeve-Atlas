# List sort controls — design

## Problem

The main "your list" grid (`public/app.js` `renderGrid`/`renderCards`) only ever shows one order: most-recently-logged first (`project.history` reversed). There's no way to sort by release date, rating, or genre, even though every entry already carries the data needed to (`album.releaseDate`, `album.genres`, `entry.rating`).

## Scope

Add a sort control to the "your list" view only. Does not touch Stats or Music Map.

## UI

A `<select id="sort-select">` plus a direction-toggle `<button id="sort-dir">` sit in `.search-bar`, alongside the existing search input and count. Styled with the same mono/uppercase/flat-fill treatment as the rest of the search bar and nav — no new visual language.

Options (value → label):
- `recent` → "Recently Listened" (default on load)
- `release` → "Release Date"
- `rating` → "Rating"
- `genre` → "Genre"

The direction toggle is a single button that flips between two states (e.g. `↓`/`↑` or `desc`/`asc`), always visible, applies to whichever sort is currently selected.

## Sort semantics

All four options honor the direction toggle.

- **Recently Listened**: today's existing order is `desc` (newest logged first — `project.history` reversed, which is the current unconditional behavior). `asc` reverses it.
- **Release Date**: key is `parseInt(album.releaseDate, 10)`. `desc` = newest year first, `asc` = oldest first. Entries whose `releaseDate` doesn't parse to a number sort to the end in both directions (never interleaved into the middle by `NaN` comparison behavior).
- **Rating**: key is `entry.rating`. `desc` = highest first, `asc` = lowest first. Unrated entries (`rating` null/undefined) sort to the end in both directions.
- **Genre**: see "Genre grouping" below. Direction controls section order (A→Z vs Z→A), not within-section order.

## Genre grouping

Genre is structurally different from the other three: it groups rather than flatly reorders.

- Group key per album = `album.genres[0]` (the first genre the API lists), displayed with the same `-` → space formatting already used on the Stats page (`g.key.replace(/-/g, " ")`).
- An album with multiple genres appears in exactly one section (its first genre) — not duplicated across sections it also matches.
- Albums with no genres (`album.genres` empty/missing) are grouped into a trailing section labeled "unspecified", which always sorts last regardless of direction.
- Sections are ordered alphabetically by genre label (`asc`) or reverse-alphabetically (`desc`); "unspecified" is excluded from the alphabetical ordering and always trails.
- Within a section, cards keep their current relative order (stable sort, no secondary key) — consistent with the other three sorts each being a single-key sort.
- Rendering: genre mode produces repeated `<section class="genre-section">` blocks, each with a small heading (reusing the existing small-uppercase-mono label style, e.g. `.insight-section h3`) followed by its own `.album-grid`. The other three sorts keep rendering as today's single flat `.album-grid`. This avoids inventing new grid-spanning-header CSS inside the existing grid.

## Interaction with search

Unchanged pipeline, sort inserted as a step: filter by search text (existing `entryMatches`) → sort/group by the active sort+direction → render. A genre section with zero matches after filtering is omitted entirely (no empty-section headers). The existing "X of Y albums" count line continues to reflect the filtered count regardless of sort mode.

## Explicit non-goals / defaults chosen without a separate question

- **No persistence.** The sort selection is in-memory only and resets to "Recently Listened" on every page load, matching how search already resets. No new `localStorage` key.
- No secondary sort key within genre sections (e.g. not also sorting by rating inside each genre group).
- No change to the Today's Pick banner, Stats view, or Music Map.

## Implementation sketch

- `public/index.html`: add `<select id="sort-select">` and `<button id="sort-dir">` inside `#search-bar`.
- `public/styles.css`: style the new controls to match `.search-bar`/`#search-input`; add `.genre-section` + heading styles (likely reusing `.insight-section h3`'s rule set or a near-identical new rule).
- `public/app.js`:
  - New module-level state: `currentSort` (default `"recent"`), `sortDir` (default `"desc"`).
  - `applySearch()` gains a sort/group step between filtering and rendering.
  - Comparator functions per sort key, each direction-aware, each pushing "unknown" values (bad date, no rating) to the end regardless of direction.
  - `renderCards(entries)` (flat) stays as-is for the three non-genre modes.
  - New `renderGroupedCards(entries)` for genre mode: buckets filtered entries by `genres[0]` (or "unspecified"), orders the buckets, and renders each as its own `<section>` + grid, reusing the same per-card markup/logic `renderCards` already has (refactor the per-card DOM-building into a shared helper so it isn't duplicated).
  - Event listeners on `#sort-select` (`change`) and `#sort-dir` (`click`) both re-run the same apply step.

## Testing

Manual verification via the running dev server (`localhost:4001`), signed in: exercise each of the four sort options, toggle direction on each, confirm genre grouping buckets correctly (including an "unspecified" tail section if any album lacks genres), and confirm search text still filters correctly under every sort mode, including genre mode (sections with no matches disappear).
