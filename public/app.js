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

const searchBar = document.getElementById("search-bar");
const searchInput = document.getElementById("search-input");
const searchClear = document.getElementById("search-clear");
const searchCount = document.getElementById("search-count");
const setupPanel = document.getElementById("setup-panel");
const projectChip = document.getElementById("project-chip");
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

// Picks the sleeve's signature colour: scores quantised colour buckets by area
// but weights vividness heavily, so a small block of saturated colour beats a
// large muddy one (the red title on a brown Beach Boys sleeve, say).
function dominantColor(img) {
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

  let best = null;
  let bestScore = -1;
  for (const v of buckets.values()) {
    const r = v.r / v.n, g = v.g / v.n, b = v.b / v.n;
    const [, s, l] = rgbToHsl(r, g, b);
    // area x vividness, penalising colours pinned to the light/dark extremes
    const score = v.n * (0.08 + Math.pow(s, 2) * 4.5) * (1 - Math.abs(l - 0.5) * 0.9);
    if (score > bestScore) {
      bestScore = score;
      best = { r, g, b };
    }
  }

  if (!best && fallback.n) {
    best = { r: fallback.r / fallback.n, g: fallback.g / fallback.n, b: fallback.b / fallback.n };
  }
  if (!best) return null;

  return { r: Math.round(best.r), g: Math.round(best.g), b: Math.round(best.b) };
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

// Builds a cover <img> that can be safely sampled, falling back to a plain
// load if the CDN ever refuses the CORS request.
function makeCoverImage(src, alt, onSampled, opts) {
  const img = document.createElement("img");
  img.alt = alt;
  img.crossOrigin = "anonymous";

  img.addEventListener("load", () => {
    const css = sampledPlate(img, opts);
    if (css) onSampled(css);
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
        <p class="card-title">${album.name}</p>
        <p class="card-artist">${album.artist}</p>
        <div class="card-meta">
          <span>${album.releaseDate}</span>
          <span class="stars" style="color: ${ratingColor(entry.rating)}">${starString(entry.rating)}</span>
        </div>
      </div>
    `;

    const cover = makeCoverImage(albumImage(album, 300), `${album.name} cover`, (css) =>
      card.style.setProperty("--plate", css)
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

  try {
    const res = await fetch(`/api/project/${encodeURIComponent(shareId)}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Could not load that project");

    localStorage.setItem(STORAGE_KEY, shareId);
    projectContext = {
      name: data.name || null,
      groupSlug: data.group?.slug || null,
      groupName: null,
    };
    // the setup box is a one-time action, so fold it down to a chip once loaded
    setupPanel.hidden = true;
    projectChip.hidden = false;
    projectChip.textContent = `${data.name || shareId} · change`;

    renderTodayPick(data);
    renderGrid(data);
    loadGroupName();
  } catch (err) {
    listEmptyState.hidden = false;
    listEmptyState.textContent = `Couldn't load that project: ${err.message}`;
  }
}

loadBtn.addEventListener("click", () => {
  const shareId = extractShareId(shareInput.value);
  if (!shareId) return;
  loadProject(shareId);
});

shareInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") loadBtn.click();
});

// --- Search ---

projectChip.addEventListener("click", () => {
  setupPanel.hidden = false;
  projectChip.hidden = true;
  shareInput.focus();
});

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

// "/" anywhere jumps to the search box
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && modal.hidden) {
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
    const res = await fetch(`/api/album-stats?${qs}`);
    const data = await res.json();
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
    const res = await fetch(`/api/group/${encodeURIComponent(projectContext.groupSlug)}`);
    if (!res.ok) return;
    const data = await res.json();
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
    const res = await fetch(
      `/api/group/${encodeURIComponent(projectContext.groupSlug)}/album/${encodeURIComponent(album.uuid)}`
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "could not load group reviews");

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
    const res = await fetch(`/api/global-reviews/${encodeURIComponent(album.uuid)}?sort=top&limit=30`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "could not load reviews");

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
    spotifyLink.href = `https://open.spotify.com/album/${album.spotifyId}`;
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


  const modalCard = modal.querySelector(".modal-card");
  modalCard.style.removeProperty("--plate");
  modalCard.scrollTop = 0;
  modalCover.alt = `${album.name} cover`;
  modalCover.crossOrigin = "anonymous";
  modalCover.onload = () => {
    const css = sampledPlate(modalCover);
    if (css) modalCard.style.setProperty("--plate", css);
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

  loadInsight(album);
  modal.hidden = false;
}

modalCloseBtn.addEventListener("click", () => { modal.hidden = true; });
modal.addEventListener("click", (e) => { if (e.target === modal) modal.hidden = true; });

async function loadInsight(album) {
  resetInsightPanels();
  try {
    const res = await fetch(`/api/insight/${encodeURIComponent(album.uuid)}`);
    if (!res.ok) throw new Error("not written yet");
    const data = await res.json();
    renderInsight(data.insight);
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

// --- Tabs ---

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("is-active"));
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("is-active"));
    btn.classList.add("is-active");
    document.getElementById(`${btn.dataset.view}-view`).classList.add("is-active");
    if (btn.dataset.view === "map" && window.renderGraph) window.renderGraph();
  });
});

// --- Boot ---

const savedShareId = localStorage.getItem(STORAGE_KEY);
if (savedShareId) {
  shareInput.value = savedShareId;
  loadProject(savedShareId);
}
