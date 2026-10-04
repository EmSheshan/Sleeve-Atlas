const STORAGE_KEY = "sleeve-atlas:share-id";

const shareInput = document.getElementById("share-id-input");
const loadBtn = document.getElementById("load-project-btn");
const albumGrid = document.getElementById("album-grid");
const listEmptyState = document.getElementById("list-empty-state");
const todayPickEl = document.getElementById("today-pick");

const modal = document.getElementById("album-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalCover = document.getElementById("modal-cover");
const modalYearGenre = document.getElementById("modal-year-genre");
const modalTitle = document.getElementById("modal-title");
const modalArtist = document.getElementById("modal-artist");
const modalRating = document.getElementById("modal-rating");

const insightEmpty = document.getElementById("insight-empty");
const insightLoading = document.getElementById("insight-loading");
const insightLoaded = document.getElementById("insight-loaded");

let currentAlbum = null;
let projectContext = { name: null, groupSlug: null, groupName: null };

const spotifyLink = document.getElementById("spotify-link");
const wikiLink = document.getElementById("wiki-link");
const modalReview = document.getElementById("modal-review");

let currentEntry = null;
let allEntries = [];

const rateBlock = document.getElementById("rate-block");
const rateTitle = document.getElementById("rate-title");
const rateStarsEl = document.getElementById("rate-stars");
const rateNotesEl = document.getElementById("rate-notes");
const rateSubmitBtn = document.getElementById("rate-submit");
const rateStatus = document.getElementById("rate-status");
let pendingRating = null;

const searchBar = document.getElementById("search-bar");
const searchInput = document.getElementById("search-input");
const searchClear = document.getElementById("search-clear");
const searchCount = document.getElementById("search-count");
const accountModal = document.getElementById("account-modal");
const accountBtn = document.getElementById("account-btn");
const accountCloseBtn = document.getElementById("account-close-btn");
const accountHeading = document.getElementById("account-heading");
const accountBlurb = document.getElementById("account-blurb");
const accountStatus = document.getElementById("account-status");
const signOutBtn = document.getElementById("sign-out-btn");
const scoreRow = document.getElementById("score-row");

const revTabGroup = document.getElementById("rev-tab-group");
const revPanelGroup = document.getElementById("rev-panel-group");
const revPanelGlobal = document.getElementById("rev-panel-global");

function extractShareId(value) {
  const trimmed = value.trim().replace(/\/+$/, "");
  if (!trimmed) return "";
  // handles https://1001albumsgenerator.com/emsh, .../shares/<id>, bare "shares/<id>", or a bare slug
  const fromUrl = trimmed.match(/1001albumsgenerator\.com\/(?:shares\/)?([^/?#\s]+)/i);
  if (fromUrl) return fromUrl[1];
  const fromPath = trimmed.match(/^shares\/([^/?#\s]+)/i);
  if (fromPath) return fromPath[1];
  return trimmed;
}

function starString(rating) {
  if (rating === null || rating === undefined) return "unrated";
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}


// --- Dominant-colour sampling, so each sleeve's accent plate matches the art ---

// 96 is deliberate: coarser grids average thin vivid details (a red album title
// over a brown sleeve) away into mud before they can win a bucket.
const SAMPLE = 96;
const sampleCanvas = document.createElement("canvas");
sampleCanvas.width = SAMPLE;
sampleCanvas.height = SAMPLE;
const sampleCtx = sampleCanvas.getContext("2d", { willReadFrequently: true });
const plateCache = new Map();

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [h, s, l];
}

function hslToRgb(h, s, l) {
  if (s === 0) {
    const v = Math.round(l * 255);
    return { r: v, g: v, b: v };
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue = (t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  return {
    r: Math.round(hue(h + 1 / 3) * 255),
    g: Math.round(hue(h) * 255),
    b: Math.round(hue(h - 1 / 3) * 255),
  };
}

// Scores quantised colour buckets by area but weights vividness heavily, so
// a small block of saturated colour beats a large muddy one (the red title
// on a brown Beach Boys sleeve, say). Shared by dominantColor (top pick) and
// dominantPalette (top n, for the multi-colour gradient line).
function scoredColorBuckets(img) {
  sampleCtx.clearRect(0, 0, SAMPLE, SAMPLE);
  sampleCtx.drawImage(img, 0, 0, SAMPLE, SAMPLE);
  const { data } = sampleCtx.getImageData(0, 0, SAMPLE, SAMPLE);

  const buckets = new Map();
  const fallback = { r: 0, g: 0, b: 0, n: 0 };

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (data[i + 3] < 200) continue;
    fallback.r += r; fallback.g += g; fallback.b += b; fallback.n += 1;

    const [, , l] = rgbToHsl(r, g, b);
    if (l < 0.22 || l > 0.88) continue;

    const key = `${r >> 4}-${g >> 4}-${b >> 4}`;
    const cur = buckets.get(key) || { r: 0, g: 0, b: 0, n: 0 };
    cur.r += r; cur.g += g; cur.b += b; cur.n += 1;
    buckets.set(key, cur);
  }

  const scored = [];
  for (const v of buckets.values()) {
    const r = v.r / v.n, g = v.g / v.n, b = v.b / v.n;
    const [, s, l] = rgbToHsl(r, g, b);
    // area x vividness, penalising colours pinned to the light/dark extremes
    const score = v.n * (0.08 + Math.pow(s, 2) * 4.5) * (1 - Math.abs(l - 0.5) * 0.9);
    scored.push({ r, g, b, score });
  }
  scored.sort((a, b) => b.score - a.score);

  if (!scored.length && fallback.n) {
    scored.push({ r: fallback.r / fallback.n, g: fallback.g / fallback.n, b: fallback.b / fallback.n, score: 0 });
  }
  return scored;
}

function dominantColor(img) {
  const [best] = scoredColorBuckets(img);
  if (!best) return null;
  return { r: Math.round(best.r), g: Math.round(best.g), b: Math.round(best.b) };
}

// Top n distinct swatches from the same scoring pass, for the multi-colour
// gradient line. "Distinct" means far enough apart in RGB space that two
// buckets of the same hue don't both make the cut — otherwise a sleeve
// dominated by one colour would still show as a flat line.
function dominantPalette(img, n = 3) {
  const scored = scoredColorBuckets(img);
  const MIN_DIST = 40;
  const picked = [];
  for (const c of scored) {
    if (picked.length >= n) break;
    const tooClose = picked.some((p) => Math.hypot(p.r - c.r, p.g - c.g, p.b - c.b) < MIN_DIST);
    if (!tooClose) picked.push(c);
  }
  for (const c of scored) {
    if (picked.length >= n) break;
    if (!picked.includes(c)) picked.push(c);
  }
  return picked.map((c) => ({ r: Math.round(c.r), g: Math.round(c.g), b: Math.round(c.b) }));
}

// Push a sampled colour into a range that reads as printed ink on cream paper.
function inkify({ r, g, b }, { minS = 0.42, minL = 0.3, maxL = 0.52 } = {}) {
  const [h, s, l] = rgbToHsl(r, g, b);
  return hslToRgb(h, Math.max(s, minS), Math.min(Math.max(l, minL), maxL));
}

function cssRgb({ r, g, b }) {
  return `rgb(${r}, ${g}, ${b})`;
}

function sampledPlate(img, opts) {
  const cacheKey = img.src + JSON.stringify(opts || {});
  if (plateCache.has(cacheKey)) return plateCache.get(cacheKey);
  let css = null;
  try {
    const rgb = dominantColor(img);
    if (rgb) css = cssRgb(inkify(rgb, opts));
  } catch {
    css = null; // tainted canvas — keep the default plate
  }
  plateCache.set(cacheKey, css);
  return css;
}

function sampledGradient(img, opts) {
  const cacheKey = "grad:" + img.src + JSON.stringify(opts || {});
  if (plateCache.has(cacheKey)) return plateCache.get(cacheKey);
  let css = null;
  try {
    const palette = dominantPalette(img, 3).map((rgb) => cssRgb(inkify(rgb, opts)));
    if (palette.length) css = `linear-gradient(90deg, ${palette.join(", ")})`;
  } catch {
    css = null; // tainted canvas — keep the default plate
  }
  plateCache.set(cacheKey, css);
  return css;
}

// Builds a cover <img> that can be safely sampled, falling back to a plain
// load if the CDN ever refuses the CORS request.
function makeCoverImage(src, alt, onSampled, opts, onGradient) {
  const img = document.createElement("img");
  img.alt = alt;
  img.crossOrigin = "anonymous";

  img.addEventListener("load", () => {
    const css = sampledPlate(img, opts);
    if (css) onSampled(css);
    if (onGradient) {
      const grad = sampledGradient(img, opts);
      if (grad) onGradient(grad);
    }
  });

  img.addEventListener(
    "error",
    () => {
      if (img.crossOrigin) {
        img.removeAttribute("crossorigin");
        img.src = src;
      }
    },
    { once: true }
  );

  img.src = src;
  return img;
}

function albumImage(album, size = 300) {
  const images = album.images || [];
  const byWidth = images.slice().sort((a, b) => Math.abs(a.width - size) - Math.abs(b.width - size));
  return byWidth[0]?.url || "";
}

function renderTodayPick(project) {
  if (!project.currentAlbum) {
    todayPickEl.hidden = true;
    return;
  }
  const a = project.currentAlbum;
  const art = albumImage(a, 640);
  todayPickEl.hidden = false;
  todayPickEl.style.removeProperty("--wash");

  todayPickEl.innerHTML = `
    <div class="tp-tile" style="background-image: url('${art}')"></div>
    <div class="tp-wash"></div>
    <div class="tp-hatch"></div>
    <span class="glow glow-focus tp-glow tp-glow-1"></span>
    <span class="glow glow-focus tp-glow tp-glow-2"></span>
    <div class="grain"></div>
    <div class="tp-text">
      <p class="eyebrow">today&rsquo;s pick</p>
      <h3>${a.name}</h3>
      <p class="sub">${a.artist} &middot; ${a.releaseDate}</p>
    </div>
  `;

  // darker, richer than a card plate so the cream type stays readable on top
  const cover = makeCoverImage(
    art,
    `${a.name} cover`,
    (css) => todayPickEl.style.setProperty("--wash", css),
    { minS: 0.58, minL: 0.27, maxL: 0.42 }
  );
  cover.className = "tp-cover";
  todayPickEl.insertBefore(cover, todayPickEl.querySelector(".tp-text"));

  todayPickEl.style.cursor = "pointer";
  todayPickEl.onclick = () => openModal(a, null);
}

function renderGrid(project) {
  allEntries = (project.history || []).slice().reverse();

  if (!allEntries.length) {
    albumGrid.innerHTML = "";
    searchBar.hidden = true;
    listEmptyState.hidden = false;
    listEmptyState.textContent = "no history yet on this project.";
    return;
  }

  searchBar.hidden = false;
  applySearch();
}

function entryMatches(entry, needle) {
  const a = entry.album;
  return [a.name, a.artist, a.releaseDate, ...(a.genres || []), ...(a.styles || [])]
    .join(" ")
    .toLowerCase()
    .includes(needle);
}

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
    cover.loading = "lazy";
    card.querySelector(".art-frame").appendChild(cover);

    card.addEventListener("click", () => openModal(album, entry));
    albumGrid.appendChild(card);
  }
}

async function loadProject(shareId) {
  listEmptyState.hidden = false;
  listEmptyState.textContent = "Loading your albums…";
  albumGrid.innerHTML = "";
  todayPickEl.hidden = true;
  setAccountStatus("checking that project…");

  try {
    const data = await Data.project(shareId);

    localStorage.setItem(STORAGE_KEY, shareId);
    projectContext = {
      name: data.name || null,
      groupSlug: data.group?.slug || null,
      groupName: null,
      // today's album is the only one the generator still accepts writes for,
      // so the write panel needs to know which uuid that is
      currentAlbumUuid: data.currentAlbum?.uuid || null,
      currentAlbumNotes: data.currentAlbumNotes || "",
    };
    setSignedIn(data.name || shareId);
    closeAccount();

    renderTodayPick(data);
    renderGrid(data);
    loadGroupName();
  } catch (err) {
    listEmptyState.hidden = false;
    listEmptyState.textContent = `Couldn't load that project: ${err.message}`;
    setAccountStatus(`couldn't load that one — ${err.message}`, true);
  }
}

// --- Account ---

function setAccountStatus(text, isError = false) {
  accountStatus.hidden = !text;
  accountStatus.textContent = text || "";
  accountStatus.classList.toggle("is-error", Boolean(isError));
}

function setSignedIn(name) {
  accountBtn.textContent = name;
  accountBtn.classList.remove("is-out");
  accountBtn.title = `Signed in as ${name} — click to change`;
  accountHeading.textContent = "Your project";
  accountBlurb.textContent = `Signed in as ${name}. You'll stay signed in on this device.`;
  loadBtn.textContent = "switch";
  signOutBtn.hidden = false;
  setAccountStatus("");
}

function setSignedOut() {
  accountBtn.textContent = "sign in";
  accountBtn.classList.add("is-out");
  accountBtn.title = "Load your 1001 Albums Generator project";
  accountHeading.textContent = "Sign in";
  accountBlurb.textContent =
    "Sign in with your 1001 Albums Generator project to load your list, ratings and reviews.";
  loadBtn.textContent = "sign in";
  signOutBtn.hidden = true;
  setAccountStatus("");
}

function openAccount() {
  accountModal.hidden = false;
  setAccountStatus("");
  shareInput.focus();
  shareInput.select();
}

function closeAccount() {
  accountModal.hidden = true;
}

accountBtn.addEventListener("click", openAccount);
accountCloseBtn.addEventListener("click", closeAccount);
accountModal.addEventListener("click", (e) => {
  if (e.target === accountModal) closeAccount();
});

signOutBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  projectContext = { name: null, groupSlug: null, groupName: null, currentAlbumUuid: null, currentAlbumNotes: "" };
  allEntries = [];
  albumGrid.innerHTML = "";
  todayPickEl.hidden = true;
  searchBar.hidden = true;
  shareInput.value = "";
  listEmptyState.hidden = false;
  listEmptyState.textContent =
    "sign in to pull in your history — or head to the music map, which needs no account.";
  renderStatsView();
  setSignedOut();
  closeAccount();
});

loadBtn.addEventListener("click", () => {
  const shareId = extractShareId(shareInput.value);
  if (!shareId) {
    setAccountStatus("that doesn't look like a project name or url", true);
    return;
  }
  loadProject(shareId);
});

shareInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") loadBtn.click();
});

// --- Stats ---

const statsEmptyState = document.getElementById("stats-empty-state");
const statsBody = document.getElementById("stats-body");

const pct = (n, d) => (d ? (n / d) * 100 : 0);

function tally(entries, keyFn) {
  const m = new Map();
  for (const e of entries) {
    for (const k of [].concat(keyFn(e))) {
      if (!k) continue;
      const cur = m.get(k) || { n: 0, sum: 0 };
      cur.n++;
      cur.sum += e.rating;
      m.set(k, cur);
    }
  }
  return [...m].map(([k, v]) => ({ key: k, n: v.n, avg: v.sum / v.n }));
}

// Each row supplies its own bar width as a 0-1 fraction, because the two kinds
// of card measure different things: the ratings histogram is a count, and
// decades/genres are an average score.
function barRows(rows, { marker } = {}) {
  const tick =
    marker != null
      ? `<span class="bar-marker" style="left:${marker * 100}%"></span>`
      : "";
  return rows
    .map(
      (r) => `
      <li>
        <span class="bar-key">${escapeHtml(r.label)}</span>
        <span class="bar-track">${tick}<span class="bar-fill" style="width:${
          r.frac * 100
        }%; background:${ratingColor(r.avg)}"></span></span>
        <span class="bar-n">${r.n}</span>
        <span class="bar-avg" style="color:${r.note ? "var(--ink-3)" : ratingColor(r.avg)}">${
          r.note ?? r.avg.toFixed(2)
        }</span>
      </li>`
    )
    .join("");
}

// A rating runs 1 to 5, so 1 is an empty bar rather than 0. On a 0-5 scale
// every average here would land between 49% and 76% and the chart would say
// nothing; anchoring at the real floor roughly doubles the usable spread.
const ratingFrac = (avg) => Math.max(0, Math.min(1, (avg - 1) / 4));

function diffTable(rows) {
  if (!rows.length) return `<p class="stat-none">nothing to compare yet</p>`;
  return `
    <table>
      <thead><tr><th>album</th><th>you</th><th>global</th><th>diff</th></tr></thead>
      <tbody>
        ${rows
          .map(
            (r) => `
          <tr data-uuid="${escapeHtml(r.uuid)}">
            <td>
              <span class="dt-album">${escapeHtml(r.name)}</span>
              <span class="dt-artist">${escapeHtml(r.artist)}</span>
            </td>
            <td class="dt-num" style="color:${ratingColor(r.you)}">${r.you}</td>
            <td class="dt-num">${r.global.toFixed(2)}</td>
            <td class="dt-num dt-diff ${r.diff >= 0 ? "is-up" : "is-down"}">${r.diff >= 0 ? "+" : ""}${r.diff.toFixed(2)}</td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>`;
}

function artistTable(rows) {
  if (!rows.length) return `<p class="stat-none">no artist has two rated albums yet</p>`;
  return `
    <table>
      <thead><tr><th>artist</th><th>albums</th><th>average</th></tr></thead>
      <tbody>
        ${rows
          .map(
            (r) => `
          <tr class="artist-row" data-artist="${escapeHtml(r.key)}" tabindex="0" role="button" aria-expanded="false">
            <td><span class="at-name">${escapeHtml(r.key)}</span></td>
            <td class="dt-num">${r.n}</td>
            <td class="dt-num" style="color:${ratingColor(r.avg)}">${r.avg.toFixed(2)}</td>
          </tr>
          <tr class="artist-albums" hidden><td colspan="3"></td></tr>`
          )
          .join("")}
      </tbody>
    </table>`;
}

async function renderStatsView() {
  const rated = allEntries.filter((e) => e.rating != null);
  if (!rated.length) {
    statsBody.hidden = true;
    statsEmptyState.hidden = false;
    statsEmptyState.textContent = projectContext.name
      ? "nothing rated yet on this project."
      : "sign in to see your stats.";
    return;
  }
  statsEmptyState.hidden = true;
  statsBody.hidden = false;

  const total = (await Data.poolSize()) || rated.length;
  const avg = rated.reduce((s, e) => s + e.rating, 0) / rated.length;
  const done = pct(rated.length, total);

  document.getElementById("hero-rated").textContent = rated.length;
  document.getElementById("hero-avg").textContent = avg.toFixed(2);
  document.getElementById("hero-avg").style.color = ratingColor(avg);
  // floored, not rounded — a progress figure shouldn't claim a percent you
  // haven't finished, and shouldn't read 100% until it actually is
  document.getElementById("hero-pct").textContent = `${Math.floor(done)}%`;
  document.getElementById("progress-fill").style.width = `${done}%`;
  document.getElementById("progress-caption").textContent =
    `${(total - rated.length).toLocaleString()} of ${total.toLocaleString()} still to go`;

  // ratings — fixed 1..5 so an unused rating still shows as an empty row
  // This card is a distribution, so its bar stays a count — "average rating"
  // for the row labelled 5 stars is always 5. The trailing column carries
  // share-of-total instead, which the label doesn't already tell you.
  const histMax = Math.max(...[1, 2, 3, 4, 5].map((s) => rated.filter((e) => e.rating === s).length), 1);
  const hist = [5, 4, 3, 2, 1].map((star) => {
    const n = rated.filter((e) => e.rating === star).length;
    return {
      label: `${star} star${star > 1 ? "s" : ""}`,
      n,
      avg: star,
      frac: n / histMax,
      note: `${Math.round(pct(n, rated.length))}%`,
    };
  });
  document.getElementById("rating-bars").innerHTML = barRows(hist);

  // Decades and genres measure how well you rate them, not how many you've
  // heard — the count is still printed, it just isn't what the bar draws.
  // Both carry a tick at your overall average so above/below reads at a glance.
  const decades = tally(rated, (e) => {
    const y = parseInt(e.album.releaseDate, 10);
    return y ? `${Math.floor(y / 10) * 10}s` : null;
  }).sort((a, b) => a.key.localeCompare(b.key));
  document.getElementById("decade-bars").innerHTML = barRows(
    decades.map((d) => ({ ...d, label: d.key, frac: ratingFrac(d.avg) })),
    { marker: ratingFrac(avg) }
  );

  // picked by count so the list is substantial, then ordered by score so it
  // reads as a ranking
  const genres = tally(rated, (e) => e.album.genres || [])
    .sort((a, b) => b.n - a.n)
    .slice(0, 10)
    .sort((a, b) => b.avg - a.avg);
  document.getElementById("genre-bars").innerHTML = barRows(
    genres.map((g) => ({ ...g, label: g.key.replace(/-/g, " "), frac: ratingFrac(g.avg) })),
    { marker: ratingFrac(avg) }
  );

  // your rating against everyone else's
  const diffs = rated
    .filter((e) => e.globalRating != null)
    .map((e) => ({
      uuid: e.album.uuid,
      name: e.album.name,
      artist: e.album.artist,
      you: e.rating,
      global: e.globalRating,
      diff: e.rating - e.globalRating,
    }));
  const byDiff = diffs.slice().sort((a, b) => b.diff - a.diff);
  document.getElementById("love-more").innerHTML = diffTable(byDiff.slice(0, 10));
  document.getElementById("love-less").innerHTML = diffTable(byDiff.slice(-10).reverse());

  // artists need more than one album before an average says anything
  const artists = tally(rated, (e) => e.album.artist).filter((a) => a.n >= 2);
  const best = artists.slice().sort((a, b) => b.avg - a.avg || b.n - a.n || a.key.localeCompare(b.key));
  document.getElementById("artists-top").innerHTML = artistTable(best.slice(0, 8));
  document.getElementById("artists-bottom").innerHTML = artistTable(
    best.slice().reverse().slice(0, 8)
  );
}

// open the album sheet from any stats table row carrying a uuid
statsBody.addEventListener("click", (e) => {
  const row = e.target.closest("tr[data-uuid]");
  if (!row) return;
  const entry = allEntries.find((x) => x.album.uuid === row.dataset.uuid);
  if (entry) openModal(entry.album, entry);
});

function toggleArtist(row) {
  const panel = row.nextElementSibling;
  if (!panel || !panel.classList.contains("artist-albums")) return;
  const open = !panel.hidden;
  if (open) {
    panel.hidden = true;
    row.setAttribute("aria-expanded", "false");
    return;
  }
  const albums = allEntries
    .filter((x) => x.album.artist === row.dataset.artist && x.rating != null)
    .sort((a, b) => b.rating - a.rating);
  panel.querySelector("td").innerHTML = albums
    .map(
      (x) => `
      <button class="artist-album" data-uuid="${escapeHtml(x.album.uuid)}">
        <span>${escapeHtml(x.album.name)}</span>
        <span class="stars" style="color:${ratingColor(x.rating)}">${starString(x.rating)}</span>
      </button>`
    )
    .join("");
  panel.hidden = false;
  row.setAttribute("aria-expanded", "true");
}

statsBody.addEventListener("click", (e) => {
  const btn = e.target.closest(".artist-album");
  if (btn) {
    const entry = allEntries.find((x) => x.album.uuid === btn.dataset.uuid);
    if (entry) openModal(entry.album, entry);
    return;
  }
  const row = e.target.closest(".artist-row");
  if (row) toggleArtist(row);
});

statsBody.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const row = e.target.closest(".artist-row");
  if (!row) return;
  e.preventDefault();
  toggleArtist(row);
});

// --- Search ---

searchInput.addEventListener("input", applySearch);
searchClear.addEventListener("click", () => {
  searchInput.value = "";
  applySearch();
  searchInput.focus();
});
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchInput.value = "";
    applySearch();
  }
});

// escape closes whichever sheet is open, innermost first
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (!modal.hidden) modal.hidden = true;
  else if (!accountModal.hidden) closeAccount();
});

// "/" anywhere jumps to the search box
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && modal.hidden && accountModal.hidden) {
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    e.preventDefault();
    searchInput.focus();
  }
});

// --- Score row: your rating vs group vs everyone ---

// 1 = red, 3 = amber, 5 = green. Piecewise rather than a straight 0->130 ramp,
// which would put the midpoint at olive instead of a true yellow.
function ratingColor(rating) {
  if (rating == null) return "var(--ink-2)";
  const r = Math.min(Math.max(Number(rating), 1), 5);
  if (r <= 3) {
    const t = (r - 1) / 2; // red -> amber
    return `hsl(${(t * 45).toFixed(0)}, 72%, ${(38 + t * 2).toFixed(0)}%)`;
  }
  const t = (r - 3) / 2; // amber -> green
  return `hsl(${(45 + t * 85).toFixed(0)}, ${(72 - t * 10).toFixed(0)}%, ${(40 - t * 8).toFixed(0)}%)`;
}

function scoreCell(kind, label, value, sub) {
  const shown =
    value == null
      ? `<span class="score-value" style="color: var(--ink-2)">&mdash;</span>`
      : `<span class="score-value" style="color: ${ratingColor(value)}">${value}<span class="score-out">/5</span></span>`;
  return `<div class="score-cell score-cell--${kind}">
    <span class="score-label">${label}</span>
    ${shown}
    ${sub ? `<span class="score-sub">${sub}</span>` : ""}
  </div>`;
}

function renderScoreRow({ you, group, groupCount, global, globalVotes }) {
  scoreRow.innerHTML = [
    scoreCell("you", "you", you == null ? null : you, null),
    scoreCell(
      "group",
      projectContext.groupName ? projectContext.groupName.toLowerCase() : "your group",
      group == null ? null : group.toFixed(2),
      groupCount ? `${groupCount} rated` : "not rated yet"
    ),
    scoreCell(
      "global",
      "everyone",
      global == null ? null : Number(global).toFixed(2),
      globalVotes ? `${globalVotes.toLocaleString()} votes` : null
    ),
  ].join("");
}

async function loadGlobalAverage(album, entry) {
  // history entries already carry the global rating; today's pick doesn't
  if (entry?.globalRating != null) {
    currentScores.global = entry.globalRating;
  }
  renderScoreRow(currentScores);

  const qs = new URLSearchParams({
    spotifyId: album.spotifyId || "",
    name: album.name || "",
    artist: album.artist || "",
  });
  try {
    const data = await Data.albumStats({ spotifyId: album.spotifyId, name: album.name, artist: album.artist });
    if (data.averageRating != null) {
      currentScores.global = data.averageRating;
      currentScores.globalVotes = data.votes;
      renderScoreRow(currentScores);
    }
  } catch {
    /* keep whatever the history entry gave us */
  }
}

let currentScores = {};

// --- Rating (local only — see data-source.js on why) ---

function renderRateStars() {
  const on = ratingColor(pendingRating);
  rateStarsEl.innerHTML = [1, 2, 3, 4, 5]
    .map((n) => {
      const lit = pendingRating && n <= pendingRating;
      return `<button type="button" class="rate-star${lit ? " is-on" : ""}"${
        lit ? ` style="color: ${on}"` : ""
      } data-star="${n}" aria-label="${n} star${n > 1 ? "s" : ""}">★</button>`;
    })
    .join("");
}

rateStarsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".rate-star");
  if (!btn) return;
  const n = Number(btn.dataset.star);
  pendingRating = pendingRating === n ? null : n; // click the same star to clear
  renderRateStars();
  rateStatus.textContent = "";
});

// What the generator will actually accept for this album. Anything else is a
// guaranteed `{success:false}`, so the panel doesn't offer it.
//
//   "listening-note"  today's album — notes only; it has no rating slot until
//                     the next album is generated
//   "rate"            in history and still unrated — rating + review together
//   null              already rated, and 1001 has no route that changes it
function writeModeFor(album, entry) {
  if (entry && entry.rating != null) return null;
  if (entry) return "rate";
  if (album.uuid && album.uuid === projectContext.currentAlbumUuid) return "listening-note";
  return null;
}

let writeMode = null;

async function setUpRating(album, entry) {
  writeMode = writeModeFor(album, entry);
  rateStatus.textContent = "";
  rateStatus.classList.remove("is-error");

  markWritable(false);
  if (!writeMode || !(await Data.canRate())) {
    rateBlock.hidden = true;
    return;
  }
  rateBlock.hidden = false;

  // This album can be written to, so land on the pane that lets you do it —
  // and flag the tab, so it's obvious even once you've clicked away.
  markWritable(true);
  if (album === currentAlbum) showSubPane("reviews");

  const notesOnly = writeMode === "listening-note";
  pendingRating = notesOnly ? null : entry?.rating ?? null;
  rateNotesEl.value = notesOnly ? projectContext.currentAlbumNotes : entry?.review || "";
  rateStarsEl.hidden = notesOnly;
  renderRateStars();

  rateTitle.textContent = notesOnly ? "listening notes" : "rate this one";
  rateNotesEl.placeholder = notesOnly
    ? "notes on today's album — you rate it once the next one lands"
    : "a few words on it (optional)";
  rateSubmitBtn.textContent = notesOnly ? "save notes to 1001" : "post to 1001";
}

rateSubmitBtn.addEventListener("click", async () => {
  if (!currentAlbum || !projectContext.name || !writeMode) return;

  const notesOnly = writeMode === "listening-note";
  if (!notesOnly && !pendingRating) {
    rateStatus.textContent = "pick a rating first";
    return;
  }
  if (notesOnly && !rateNotesEl.value.trim()) {
    rateStatus.textContent = "write something first";
    return;
  }

  const what = notesOnly
    ? `Save these notes to your public 1001 profile as ${projectContext.name}?`
    : `Post ${pendingRating}/5 to your public 1001 profile as ${projectContext.name}? 1001 won't let you change it afterwards.`;
  if (!confirm(what)) return;

  rateSubmitBtn.disabled = true;
  rateStatus.classList.remove("is-error");
  rateStatus.textContent = notesOnly ? "saving…" : "posting…";
  try {
    await Data.write(writeMode, {
      projectName: projectContext.name,
      albumId: currentAlbum.uuid,
      rating: notesOnly ? undefined : pendingRating,
      notes: rateNotesEl.value,
      generatedAlbumId: currentEntry?.generatedAlbumId || null,
      fromHistoryView: Boolean(currentEntry),
    });

    rateStatus.textContent = notesOnly ? "saved" : "posted";
    if (notesOnly) {
      projectContext.currentAlbumNotes = rateNotesEl.value;
      return;
    }

    if (currentEntry) {
      currentEntry.rating = pendingRating;
      currentEntry.review = rateNotesEl.value;
    }
    currentScores.you = pendingRating;
    renderScoreRow(currentScores);
    modalRating.innerHTML = `<span class="stars" style="color: ${ratingColor(pendingRating)}">${starString(pendingRating)}</span>`;
    loadGroupReviews(currentAlbum);
    // the rating is now locked upstream, so stop offering a write
    writeMode = null;
    rateSubmitBtn.disabled = true;
  } catch (err) {
    rateStatus.textContent = err.message;
    rateStatus.classList.add("is-error");
  } finally {
    if (writeMode) rateSubmitBtn.disabled = false;
  }
});

// --- Reviews ---

// Setting scrollTop on a display:none element is a no-op, and the inactive
// review tab is hidden while its content loads — so mark it and reset on reveal.
const pendingScrollReset = new WeakSet();

function resetPanelScroll(panel) {
  if (panel.hidden || !panel.offsetParent) {
    pendingScrollReset.add(panel);
    return;
  }
  panel.scrollTop = 0;
  pendingScrollReset.delete(panel);
}

function flushScrollReset(panel) {
  if (!pendingScrollReset.has(panel)) return;
  panel.scrollTop = 0;
  pendingScrollReset.delete(panel);
}

async function loadGroupName() {
  if (!projectContext.groupSlug) {
    revTabGroup.hidden = true;
    return;
  }
  revTabGroup.hidden = false;
  try {
    const data = await Data.group(projectContext.groupSlug);
    if (data.name) {
      projectContext.groupName = data.name;
      revTabGroup.textContent = data.name.toLowerCase();
    }
  } catch {
    /* keep the generic "your group" label */
  }
}

function reviewItem({ who, meta, text, isYou }) {
  const head = `
    <div class="rev-head">
      <span class="rev-who">${escapeHtml(who)}</span>
      ${isYou ? '<span class="rev-you">you</span>' : ""}
      ${meta ? `<span class="rev-meta">${meta}</span>` : ""}
    </div>`;
  const body = text ? `<p class="rev-text">${escapeHtml(text)}</p>` : "";
  return `<div class="rev-item">${head}${body}</div>`;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

async function loadGroupReviews(album) {
  if (!projectContext.groupSlug) {
    revPanelGroup.innerHTML = `<p class="rev-none">you&rsquo;re not in a group</p>`;
    return;
  }
  revPanelGroup.innerHTML = `<p class="rev-none">loading&hellip;</p>`;
  resetPanelScroll(revPanelGroup);
  try {
    const data = await Data.groupAlbum(projectContext.groupSlug, album.uuid);

    const rated = (data.reviews || []).filter((r) => r.rating != null);
    if (rated.length) {
      currentScores.group = rated.reduce((sum, r) => sum + r.rating, 0) / rated.length;
      currentScores.groupCount = rated.length;
    } else {
      currentScores.group = null;
      currentScores.groupCount = 0;
    }
    renderScoreRow(currentScores);

    const others = (data.reviews || []).filter(
      (r) => r.rating != null || r.review
    );
    if (!others.length) {
      revPanelGroup.innerHTML = data.notListened
        ? `<p class="rev-none">the group hasn&rsquo;t logged this one yet</p>`
        : `<p class="rev-none">no one in the group has rated this yet</p>`;
      return;
    }

    revPanelGroup.innerHTML = others
      .map((r) => {
        const isYou = r.projectName === projectContext.name;
        return reviewItem({
          who: r.projectName,
          meta:
            r.rating != null
              ? `<span style="color: ${ratingColor(r.rating)}">${starString(r.rating)}</span>`
              : "Unrated",
          // your own text is already shown in full as "your note" above
          text: isYou ? null : r.review,
          isYou,
        });
      })
      .join("");
    resetPanelScroll(revPanelGroup);
  } catch (err) {
    revPanelGroup.innerHTML = `<p class="rev-none">${escapeHtml(err.message)}</p>`;
  }
}

async function loadGlobalReviews(album) {
  revPanelGlobal.innerHTML = `<p class="rev-none">loading&hellip;</p>`;
  resetPanelScroll(revPanelGlobal);
  try {
    const data = await Data.globalReviews(album.uuid, 30);

    if (!data.reviews.length) {
      revPanelGlobal.innerHTML = `<p class="rev-none">no reviews yet</p>`;
      return;
    }

    revPanelGlobal.innerHTML = data.reviews
      .map((r) =>
        reviewItem({
          who: "anonymous",
          meta: [
            r.rating != null
              ? `<span style="color: ${ratingColor(r.rating)}">${starString(r.rating)}</span>`
              : null,
            r.thumbsUp ? `${r.thumbsUp} ▲` : null,
          ]
            .filter(Boolean)
            .join(" &middot; "),
          text: r.notes,
        })
      )
      .join("");
    resetPanelScroll(revPanelGlobal);
  } catch (err) {
    revPanelGlobal.innerHTML = `<p class="rev-none">${escapeHtml(err.message)}</p>`;
  }
}

document.querySelectorAll(".rev-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".rev-tab").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const showGroup = btn.dataset.rev === "group";
    revPanelGroup.hidden = !showGroup;
    revPanelGlobal.hidden = showGroup;
    // a panel that loaded while hidden couldn't be scrolled; do it now it's shown
    flushScrollReset(showGroup ? revPanelGroup : revPanelGlobal);
  });
});

// --- Notes / reviews sub-tabs ---

const subPanes = {
  notes: document.getElementById("sub-pane-notes"),
  reviews: document.getElementById("sub-pane-reviews"),
};

// a dot on the reviews tab when there's something you can actually post
function markWritable(on) {
  document
    .querySelector('.sub-tab[data-pane="reviews"]')
    ?.classList.toggle("has-action", Boolean(on));
}

function showSubPane(name) {
  document.querySelectorAll(".sub-tab").forEach((b) => {
    const on = b.dataset.pane === name;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", String(on));
  });
  for (const [key, pane] of Object.entries(subPanes)) pane.hidden = key !== name;

  // the review lists load while their pane is hidden, where scrollTop is a
  // no-op — same reason the group/global tabs defer it
  if (name === "reviews") {
    flushScrollReset(revPanelGroup);
    flushScrollReset(revPanelGlobal);
  }
}

document.querySelectorAll(".sub-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    showSubPane(btn.dataset.pane);
    // switching while scrolled deep into a note would otherwise drop you into
    // the middle of the other pane — bring the tab row back up with you
    btn.closest(".sub-tabs").scrollIntoView({ block: "start", behavior: "smooth" });
  });
});

// --- Modal / insight ---

function resetInsightPanels() {
  insightEmpty.hidden = true;
  insightLoading.hidden = false;
  insightLoaded.hidden = true;
}

function openModal(album, entry) {
  currentAlbum = album;
  currentEntry = entry || null;

  if (album.spotifyId) {
    // spotify: URI hands off to the desktop app rather than the web player.
    // No target="_blank" — a custom protocol there just leaves a blank tab.
    spotifyLink.href = `spotify:album:${album.spotifyId}`;
    spotifyLink.removeAttribute("target");
    spotifyLink.hidden = false;
  } else {
    spotifyLink.hidden = true;
  }
  if (album.wikipediaUrl) {
    wikiLink.href = album.wikipediaUrl;
    wikiLink.hidden = false;
  } else {
    wikiLink.hidden = true;
  }

  currentScores = {
    you: entry?.rating ?? null,
    group: null,
    groupCount: 0,
    global: entry?.globalRating ?? null,
    globalVotes: null,
  };
  renderScoreRow(currentScores);
  loadGlobalAverage(album, entry);


  // Default to the note; setUpRating flips this to reviews when the album can
  // actually be written to. The write box lives in the reviews pane, and an
  // album you could rate opened on the notes tab looked like an album you
  // couldn't rate at all.
  showSubPane("notes");

  const modalCard = modal.querySelector(".modal-card");
  modalCard.style.removeProperty("--plate");
  modalCard.style.removeProperty("--plate-grad");
  modalCard.scrollTop = 0;
  modalCover.alt = `${album.name} cover`;
  modalCover.crossOrigin = "anonymous";
  modalCover.onload = () => {
    const css = sampledPlate(modalCover);
    if (css) modalCard.style.setProperty("--plate", css);
    const grad = sampledGradient(modalCover);
    if (grad) modalCard.style.setProperty("--plate-grad", grad);
  };
  modalCover.src = albumImage(album, 640);
  modalYearGenre.textContent = [album.releaseDate, (album.genres || []).join(", ")].filter(Boolean).join(" • ");
  modalTitle.textContent = album.name;
  modalArtist.textContent = album.artist;
  // the numbers live in the score row below; this is just the visual
  modalRating.innerHTML = entry
    ? `<span class="stars" style="color: ${ratingColor(entry.rating)}">${starString(entry.rating)}</span>`
    : "";

  if (entry?.review) {
    modalReview.textContent = entry.review;
    modalReview.hidden = false;
  } else {
    modalReview.hidden = true;
  }

  // default back to the group tab each time the modal opens
  document.querySelectorAll(".rev-tab").forEach((b) =>
    b.classList.toggle("is-active", b.dataset.rev === "group")
  );
  revPanelGroup.hidden = false;
  revPanelGlobal.hidden = true;
  loadGroupReviews(album);
  loadGlobalReviews(album);

  setUpRating(album, entry);
  loadInsight(album);
  modal.hidden = false;
}

modalCloseBtn.addEventListener("click", () => { modal.hidden = true; });
modal.addEventListener("click", (e) => { if (e.target === modal) modal.hidden = true; });

async function loadInsight(album) {
  resetInsightPanels();
  try {
    const insight = await Data.insight(album.uuid);
    if (!insight) throw new Error("not written yet");
    renderInsight(insight);
  } catch {
    insightLoading.hidden = true;
    insightEmpty.hidden = false;
  }
}

function renderInsight(insight) {
  insightLoading.hidden = true;
  insightEmpty.hidden = true;
  insightLoaded.hidden = false;

  document.getElementById("insight-album-line").textContent = insight.albumLine || "";

  document.getElementById("insight-overview").innerHTML = (insight.overview || [])
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");

  document.getElementById("insight-listening").innerHTML = (insight.listeningNotes || [])
    .map((b) => `<li><strong>${escapeHtml(b.label)}</strong> ${escapeHtml(b.text)}</li>`)
    .join("");

  const lineageItem = (r) =>
    `<li><strong>${escapeHtml(r.album)}</strong> &mdash; ${escapeHtml(r.artist)}` +
    `${r.year ? ` (${escapeHtml(r.year)})` : ""}` +
    `<span class="lineage-note">${escapeHtml(r.note || "")}</span></li>`;

  const by = document.getElementById("insight-influenced-by");
  by.innerHTML =
    (insight.influencedBy || []).map(lineageItem).join("") ||
    `<li class="lineage-empty">no documented links recorded</li>`;

  const inf = document.getElementById("insight-influenced");
  inf.innerHTML =
    (insight.influenced || []).map(lineageItem).join("") ||
    `<li class="lineage-empty">no documented links recorded</li>`;

  document.getElementById("insight-sources").innerHTML = (insight.sources || [])
    .map(
      (s) =>
        `<li><a href="${encodeURI(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.title)}</a></li>`
    )
    .join("");
}

// The map lives in its own file and has no access to the history entries, so
// it opens an album through here. Falls back to a bare album object when the
// record isn't in your list — the notes still render, the ratings just don't.
window.openAlbumFromMap = async function openAlbumFromMap(uuid) {
  const entry = allEntries.find((e) => e.album.uuid === uuid);
  if (entry) {
    openModal(entry.album, entry);
    return true;
  }
  const insight = await Data.insight(uuid);
  if (!insight) return false;
  openModal({ uuid, name: insight.album, artist: insight.artist, releaseDate: insight.year, genres: [] }, null);
  return true;
};

// --- Tabs ---

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("is-active"));
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("is-active"));
    btn.classList.add("is-active");
    document.getElementById(`${btn.dataset.view}-view`).classList.add("is-active");
    if (btn.dataset.view === "map" && window.renderGraph) window.renderGraph();
    // recomputed on each visit rather than cached — a rating posted from the
    // album sheet should be reflected the moment you come back here
    if (btn.dataset.view === "stats") renderStatsView();
  });
});

// --- Boot ---

const savedShareId = localStorage.getItem(STORAGE_KEY);
if (savedShareId) {
  // optimistic: show the saved name straight away so the corner doesn't flash
  // "sign in" on every reload; loadProject corrects it if the name has changed
  setSignedIn(savedShareId);
  shareInput.value = savedShareId;
  loadProject(savedShareId);
} else {
  setSignedOut();
}
