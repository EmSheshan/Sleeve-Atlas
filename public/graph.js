(function () {
  const container = document.getElementById("graph-canvas");
  const mapEmptyState = document.getElementById("map-empty-state");
  const refreshBtn = document.getElementById("refresh-graph-btn");

  let loaded = false;
  let tooltip = null;
  // Showing everything by default. Hiding the single-mention records halved
  // the object count but didn't touch what actually makes the map hard to
  // read — the noted albums cross-reference each other densely, because music
  // does. The toggle stays for when you want a thinner picture.
  let showLeaves = true;
  let hiddenCount = 0;
  let lastGraph = null;

  function ensureTooltip() {
    if (tooltip) return tooltip;
    tooltip = document.createElement("div");
    tooltip.className = "graph-tooltip";
    tooltip.style.display = "none";
    container.appendChild(tooltip);
    return tooltip;
  }

  function showTooltip(html, x, y) {
    const el = ensureTooltip();
    el.innerHTML = html;
    el.style.left = `${x + 16}px`;
    el.style.top = `${y + 8}px`;
    el.style.display = "block";
  }

  function hideTooltip() {
    if (tooltip) tooltip.style.display = "none";
  }

  async function fetchGraph() {
    return Data.graph();
  }

  // --- Map statistics ---

  const statsEl = document.getElementById("map-stats");
  const CENTRAL_RUNNERS = 3;
  const LIST_LEN = 5;

  // Betweenness (Brandes). Run on the DIRECTED graph on purpose: influence has
  // a direction, and treating it as symmetric promotes leaf nodes that happen
  // to sit between two clusters over records things actually flow through.
  function betweenness(ids, adj) {
    const bc = Object.fromEntries(ids.map((i) => [i, 0]));
    for (const s of ids) {
      const stack = [];
      const pred = {};
      const sigma = {};
      const dist = {};
      for (const i of ids) {
        pred[i] = [];
        sigma[i] = 0;
        dist[i] = -1;
      }
      sigma[s] = 1;
      dist[s] = 0;
      const queue = [s];
      let head = 0;
      while (head < queue.length) {
        const v = queue[head++];
        stack.push(v);
        for (const w of adj[v]) {
          if (dist[w] < 0) {
            dist[w] = dist[v] + 1;
            queue.push(w);
          }
          if (dist[w] === dist[v] + 1) {
            sigma[w] += sigma[v];
            pred[w].push(v);
          }
        }
      }
      const delta = Object.fromEntries(ids.map((i) => [i, 0]));
      while (stack.length) {
        const w = stack.pop();
        for (const v of pred[w]) delta[v] += (sigma[v] / sigma[w]) * (1 + delta[w]);
        if (w !== s) bc[w] += delta[w];
      }
    }
    return bc;
  }

  function computeStats(nodes, edges) {
    const ids = nodes.map((n) => n.id);
    const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
    const inD = {};
    const outD = {};
    const adj = {};
    for (const i of ids) {
      inD[i] = 0;
      outD[i] = 0;
      adj[i] = [];
    }
    for (const e of edges) {
      if (!(e.source in outD) || !(e.target in inD)) continue;
      outD[e.source]++;
      inD[e.target]++;
      adj[e.source].push(e.target);
    }

    const year = (n) => parseInt(n.year, 10) || 0;
    // Nearly every source has out-degree 1, so rank by reach first. Ties break
    // oldest-first for sources (more root-like) and newest-first for sinks,
    // then by label so the order never wobbles between renders.
    const sources = nodes
      .filter((n) => inD[n.id] === 0 && outD[n.id] > 0)
      .sort((a, b) => outD[b.id] - outD[a.id] || year(a) - year(b) || a.label.localeCompare(b.label));
    const sinks = nodes
      .filter((n) => outD[n.id] === 0 && inD[n.id] > 0)
      .sort((a, b) => inD[b.id] - inD[a.id] || year(b) - year(a) || a.label.localeCompare(b.label));

    const bc = betweenness(ids, adj);
    const central = ids
      .filter((i) => bc[i] > 0)
      .sort((a, b) => bc[b] - bc[a] || byId[a].label.localeCompare(byId[b].label))
      .map((i) => ({ node: byId[i], score: bc[i] }));

    return { sources, sinks, central, inD, outD };
  }

  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Brandes is O(V*E) — 87ms at 441 nodes, and it was being rerun on every
  // draw even though the stats describe the whole web and never change when
  // the view is filtered. Cached against the graph it was computed from.
  let statsCache = { key: null, value: null };

  function renderStats(nodes, edges) {
    if (!statsEl) return;
    const key = `${nodes.length}:${edges.length}`;
    if (statsCache.key !== key) {
      statsCache = { key, value: computeStats(nodes, edges) };
    }
    const { sources, sinks, central, inD, outD } = statsCache.value;

    const row = (n, count, unit) => `
      <li>
        <span class="stat-name"><strong>${esc(n.label)}</strong> <span class="stat-by">${esc(n.artist || "")}</span></span>
        <span class="stat-count">${count} ${unit}${count === 1 ? "" : "s"}</span>
      </li>`;

    document.getElementById("stat-sources").innerHTML =
      sources.slice(0, LIST_LEN).map((n) => row(n, outD[n.id], "heir")).join("") ||
      `<li class="stat-none">none yet</li>`;
    document.getElementById("stat-sources-foot").textContent = sources.length
      ? `${sources.length} in all`
      : "";

    document.getElementById("stat-sinks").innerHTML =
      sinks.slice(0, LIST_LEN).map((n) => row(n, inD[n.id], "forebear")).join("") ||
      `<li class="stat-none">none yet</li>`;
    document.getElementById("stat-sinks-foot").textContent = sinks.length ? `${sinks.length} in all` : "";

    const centralEl = document.getElementById("stat-central");
    const footEl = document.getElementById("stat-central-foot");
    if (!central.length) {
      centralEl.innerHTML = `<p class="stat-none">nothing runs through anything yet — the chains are still too short.</p>`;
      footEl.textContent = "";
    } else {
      const top = central[0];
      centralEl.innerHTML = `
        <p class="stat-hero">${esc(top.node.label)}</p>
        <p class="stat-hero-by">${esc(top.node.artist || "")}${top.node.year ? ` &middot; ${esc(top.node.year)}` : ""}</p>
        <p class="stat-hero-meta">${inD[top.node.id]} in &middot; ${outD[top.node.id]} out</p>`;
      const runners = central.slice(1, 1 + CENTRAL_RUNNERS);
      footEl.innerHTML = runners.length
        ? `then ${runners.map((r) => esc(r.node.label)).join(", ")}`
        : "";
    }

    statsEl.hidden = false;
  }

  function draw(graph) {
    const allNodes = Object.values(graph.nodes || {});
    const allEdges = Object.values(graph.edges || {});

    container.innerHTML = "";
    hideTooltip();
    tooltip = null;

    if (!allNodes.length) {
      mapEmptyState.hidden = false;
      container.hidden = true;
      if (statsEl) statsEl.hidden = true;
      return;
    }
    mapEmptyState.hidden = true;
    container.hidden = false;

    // Stats always describe the whole web, not the filtered view.
    renderStats(allNodes, allEdges);

    // More than half the map is records mentioned exactly once and written up
    // nowhere — 223 of 419 at the last count. They double the object count and
    // add no structure, since a node with one edge tells you nothing the edge
    // didn't. Hidden by default; the toggle brings them back.
    const degree = {};
    for (const n of allNodes) degree[n.id] = 0;
    for (const e of allEdges) {
      degree[e.source]++;
      degree[e.target]++;
    }
    const keep = showLeaves
      ? new Set(allNodes.map((n) => n.id))
      : new Set(allNodes.filter((n) => n.source === "list" || degree[n.id] > 1).map((n) => n.id));

    const nodes = allNodes.filter((n) => keep.has(n.id));
    const edges = allEdges.filter((e) => keep.has(e.source) && keep.has(e.target));
    hiddenCount = allNodes.length - nodes.length;

    let width = container.clientWidth || 900;
    let height = container.clientHeight || 640;

    const svg = d3
      .select(container)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("role", "img")
      .attr("aria-label", `Influence map: ${nodes.length} albums, ${edges.length} links between them.`);

    const zoomLayer = svg.append("g");

    // The floor is set for real once the layout has settled — a fixed 0.35 was
    // less than the graph needed to fit on screen, so most of it simply could
    // not be reached by zooming out. It looked like nodes flying off.
    const zoom = d3
      .zoom()
      .scaleExtent([0.35, 2.5])
      // Recomputed as each gesture begins, not once. The layout is still
      // growing while the simulation runs, so a limit measured early leaves
      // you unable to zoom out far enough to see the finished graph.
      .on("start", () => applyBounds())
      .on("zoom", (event) => zoomLayer.attr("transform", event.transform));

    svg.call(zoom);

    // Fence the pannable area to the graph plus half a screen of slack, so you
    // can't scroll off into empty space with no way back. Applied once the
    // layout has settled, since the extent depends on where things ended up.
    // The canvas is a fixed 640px tall in the page and the full height of the
    // screen in fullscreen, and neither size was ever re-read after the first
    // draw — so the map used to keep the dimensions it was born with. Resizing
    // the viewport rather than redrawing keeps the layout you already have.
    function resize() {
      const w = container.clientWidth || width;
      const h = container.clientHeight || height;
      if (w === width && h === height) return;
      width = w;
      height = h;
      svg.attr("width", w).attr("height", h).attr("viewBox", [0, 0, w, h]);
      applyBounds({ fit: true });
    }

    const onViewportChange = () => requestAnimationFrame(resize);
    window.addEventListener("resize", onViewportChange);
    document.addEventListener("fullscreenchange", onViewportChange);

    // A fullscreened element is the only thing the browser paints — everything
    // outside it is simply not shown. The album sheet lives at the end of the
    // body, so "open notes" from the map did nothing visible in fullscreen.
    // Move it inside for the duration and put it back on exit.
    const albumModal = document.getElementById("album-modal");

    function reparentModal() {
      if (!albumModal) return;
      const fs = document.fullscreenElement;
      const wrap = container.closest(".graph-wrap");
      if (fs && wrap && fs.contains(wrap)) {
        if (albumModal.parentElement !== fs) fs.appendChild(albumModal);
      } else if (albumModal.parentElement !== document.body) {
        document.body.appendChild(albumModal);
      }
    }

    document.addEventListener("fullscreenchange", reparentModal);
    // exposed so the behaviour can be exercised without a real gesture
    window.__reparentMapModal = reparentModal;

    function applyBounds({ fit = false } = {}) {
      const b = zoomLayer.node().getBBox();
      if (!b.width || !b.height) return;
      zoom.translateExtent([
        [b.x - width / 2, b.y - height / 2],
        [b.x + b.width + width / 2, b.y + b.height + height / 2],
      ]);

      // Let the floor go to whatever actually contains the graph, with a little
      // slack, rather than a guessed constant. Never zoom past 1:1 — a small
      // graph should sit at its natural size, not be blown up to fill the box.
      const toFit = Math.min(1, Math.min(width / b.width, height / b.height) * 0.92);
      zoom.scaleExtent([Math.min(toFit, 0.35), 2.5]);

      if (!fit) return;
      const t = d3.zoomIdentity
        .translate(width / 2, height / 2)
        .scale(toFit)
        .translate(-(b.x + b.width / 2), -(b.y + b.height / 2));
      svg.transition().duration(450).call(zoom.transform, t);
    }

    const defs = svg.append("defs");

    const arrowhead = (id, fill, refX) =>
      defs
        .append("marker")
        .attr("id", id)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", refX)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("fill", fill);

    // refX 10 puts the marker's tip exactly on the path's end point; the paths
    // themselves are trimmed to each node's rim below, so one offset works for
    // both the big sleeve nodes and the small markers.
    arrowhead("arrow", "#51525a", 10);
    arrowhead("arrow-hot", "#d6361d", 10);

    const R_LIST = 26;
    const R_OTHER = 9;
    const radiusOf = (n) => (n.source === "list" ? R_LIST : R_OTHER);

    const linkData = edges.map((e) => ({ ...e }));
    const nodeData = nodes.map((n) => ({ ...n }));

    // The notes make ~20 separate webs that share no edges. D3 starts every
    // node in one spiral at the centre, so those webs begin interleaved and
    // spend the first seconds shoving each other apart — which is the tangle.
    // Giving each its own starting patch lets them settle rather than fight.
    (function seedComponents() {
      const adjacency = {};
      for (const n of nodeData) adjacency[n.id] = [];
      for (const e of linkData) {
        adjacency[e.source]?.push(e.target);
        adjacency[e.target]?.push(e.source);
      }
      const byId = Object.fromEntries(nodeData.map((n) => [n.id, n]));
      const seen = new Set();
      const groups = [];
      for (const n of nodeData) {
        if (seen.has(n.id)) continue;
        seen.add(n.id);
        const queue = [n.id];
        const group = [];
        while (queue.length) {
          const v = queue.shift();
          group.push(v);
          for (const w of adjacency[v]) {
            if (seen.has(w)) continue;
            seen.add(w);
            queue.push(w);
          }
        }
        groups.push(group);
      }
      groups.sort((a, b) => b.length - a.length);

      // biggest web in the middle, the rest ringed around it
      groups.forEach((group, i) => {
        const ring = i === 0 ? 0 : 320 + Math.sqrt(i) * 170;
        const angle = i * 2.39996; // golden angle, so rings don't line up
        const gx = width / 2 + Math.cos(angle) * ring;
        const gy = height / 2 + Math.sin(angle) * ring;
        const spread = 20 + Math.sqrt(group.length) * 24;
        group.forEach((id, j) => {
          const a = j * 2.39996;
          const r = spread * Math.sqrt((j + 0.5) / group.length);
          byId[id].x = gx + Math.cos(a) * r;
          byId[id].y = gy + Math.sin(a) * r;
        });
      });
    })();

    const simulation = d3
      .forceSimulation(nodeData)
      .force("link", d3.forceLink(linkData).id((d) => d.id).distance(165).strength(0.45))
      // Left uncapped on purpose. Capping the range compacts the layout, and
      // compacting is what makes it unreadable: distanceMax(900) shrank the
      // area 3.7x while total crossings barely moved, which took crossings
      // per screenful from 6 to 24. The graph being physically large is fine
      // — you zoom and pan. Dense is not.
      .force("charge", d3.forceManyBody().strength(-420))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX(width / 2).strength(0.015))
      .force("y", d3.forceY(height / 2).strength(0.015))
      .force(
        "collide",
        d3
          .forceCollide((d) => {
            const base = d.source === "list" ? 26 : 9;
            const chars = Math.min((d.label || "").length, 24);
            const halfLabel = chars * (d.source === "list" ? 2.6 : 2.1);
            return Math.max(base + 12, Math.min(halfLabel, 50));
          })
          .strength(1)
      );

    // Each edge is two paths: the thin visible one, plus a fat transparent one
    // underneath it that catches the pointer, so the arrows are easy to hover.
    const edge = zoomLayer
      .append("g")
      .selectAll("g")
      .data(linkData)
      .join("g")
      .attr("class", "edge")
      .style("cursor", (d) => (d.note ? "help" : "default"));

    const hit = edge
      .append("path")
      .attr("stroke", "transparent")
      .attr("stroke-width", 18)
      .attr("fill", "none")
      .style("pointer-events", "stroke");

    // An edge inherits colour from whichever end has real album art — same
    // sampledPlate() pipeline the grid cards and today's pick already use,
    // not a new extraction scheme. Falls back to the original flat grey for
    // edges where neither end has art (most external-only connections).
    // Looked up by id through nodeById rather than held as a closure over
    // the node object directly, so a colour that resolves later (the image
    // load is async) is picked up correctly by both the initial render and
    // the mouseleave restore, not just whichever ran first.
    const nodeById = Object.fromEntries(nodeData.map((n) => [n.id, n]));
    const edgeNodeId = (x) => (typeof x === "object" ? x.id : x);
    function edgeRestColor(e) {
      const s = nodeById[edgeNodeId(e.source)];
      const t = nodeById[edgeNodeId(e.target)];
      return (s && s.color) || (t && t.color) || "#51525a";
    }

    const link = edge
      .append("path")
      .attr("stroke", edgeRestColor)
      .attr("stroke-width", 1.8)
      .attr("stroke-opacity", (d) => (edgeRestColor(d) === "#51525a" ? 0.55 : 0.6))
      .attr("fill", "none")
      .attr("marker-end", "url(#arrow)")
      .style("pointer-events", "none")
      .style("transition", "stroke-width 0.15s ease, stroke-opacity 0.15s ease");

    edge
      .on("mouseenter", function (event, d) {
        d3.select(this).select("path:last-child")
          .attr("stroke", "#d6361d")
          .attr("stroke-width", 3.4)
          .attr("stroke-opacity", 1)
          .attr("marker-end", "url(#arrow-hot)");
        if (d.note) showTooltip(d.note, event.offsetX, event.offsetY);
      })
      .on("mousemove", (event, d) => {
        if (d.note) showTooltip(d.note, event.offsetX, event.offsetY);
      })
      .on("mouseleave", function (event, d) {
        const rest = edgeRestColor(d);
        d3.select(this).select("path:last-child")
          .attr("stroke", rest)
          .attr("stroke-width", 1.8)
          .attr("stroke-opacity", rest === "#51525a" ? 0.55 : 0.6)
          .attr("marker-end", "url(#arrow)");
        hideTooltip();
      });

    const node = zoomLayer
      .append("g")
      .selectAll("g")
      .data(nodeData)
      .join("g")
      .call(
        d3
          .drag()
          .on("start", (event, d) => {
            if (!event.active) { simulation.alphaTarget(0.25); run(); }
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    // Albums from the list are drawn as their own sleeve, clipped to a circle.
    // Every sleeve is the same size and the clip resolves in the node's own
    // translated space, so one definition covers all of them — no need for the
    // per-node clipPath this used to build.
    defs.append("clipPath").attr("id", "sleeve-clip").append("circle").attr("r", R_LIST);

    const withArt = node.filter((d) => d.source === "list" && d.image);

    withArt
      .append("image")
      .attr("href", (d) => d.image)
      .attr("x", -R_LIST)
      .attr("y", -R_LIST)
      .attr("width", R_LIST * 2)
      .attr("height", R_LIST * 2)
      .attr("preserveAspectRatio", "xMidYMid slice")
      .attr("clip-path", "url(#sleeve-clip)");

    withArt
      .append("circle")
      .attr("r", R_LIST)
      .attr("fill", "none")
      .attr("stroke", "rgba(22,23,27,0.42)")
      .attr("stroke-width", 2);

    // anything without a sleeve stays a plain marker
    node
      .filter((d) => !(d.source === "list" && d.image))
      .append("circle")
      .attr("r", (d) => (d.source === "list" ? R_LIST : R_OTHER))
      .attr("fill", (d) => (d.source === "list" ? "#2b2c33" : "#8e8f97"))
      .attr("stroke", "rgba(22,23,27,0.42)")
      .attr("stroke-width", 2);

    node
      .append("text")
      .text((d) => {
        const s = d.label || "";
        return s.length > 24 ? s.slice(0, 23).trimEnd() + "…" : s;
      })
      .attr("x", 0)
      .attr("y", (d) => (d.source === "list" ? R_LIST + 15 : 23))
      .attr("text-anchor", "middle")
      .attr("font-family", "Archivo, sans-serif")
      // condensed, so a label takes less of its neighbours' space in a graph
      // where everything overlaps everything
      .attr("font-stretch", "80%")
      .attr("font-weight", (d) => (d.source === "list" ? 700 : 500))
      .attr("letter-spacing", "-0.005em")
      .attr("font-size", (d) => (d.source === "list" ? 13 : 11))
      .attr("fill", "#16171b")
      // paper-coloured halo, so a label crossing a line or another label
      // stays readable instead of turning to mush
      .attr("paint-order", "stroke")
      .attr("stroke", "#dedcd8")
      .attr("stroke-width", 3.5)
      .attr("stroke-linejoin", "round");

    // Off-DOM <img> per list album with art, not the visible SVG <image> —
    // canvas sampling wants an HTMLImageElement loaded with explicit CORS,
    // and risks a tainted-canvas failure sampling the SVG element directly.
    // sampledPlate() caches by img.src, so this costs nothing extra if the
    // browser already fetched the same URL for the grid/modal this session.
    for (const d of nodeData) {
      if (d.source !== "list" || !d.image) continue;
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.addEventListener("load", () => {
        const css = sampledPlate(img);
        if (!css) return;
        d.color = css;
        link
          .filter((e) => edgeNodeId(e.source) === d.id || edgeNodeId(e.target) === d.id)
          .attr("stroke", css)
          .attr("stroke-opacity", 0.6);
      });
      img.src = d.image;
    }

    // Focus. At 419 nodes the whole map only fits on screen at 0.10 zoom,
    // where a label is a pixel and a half tall — you can see everything or
    // read anything, never both. Clicking a record dims everything it isn't
    // connected to, which stays legible however large the web gets.
    const neighbours = {};
    for (const n of nodeData) neighbours[n.id] = new Set([n.id]);
    for (const e of linkData) {
      const s = typeof e.source === "object" ? e.source.id : e.source;
      const t = typeof e.target === "object" ? e.target.id : e.target;
      neighbours[s]?.add(t);
      neighbours[t]?.add(s);
    }

    const focusCard = document.getElementById("focus-card");
    const focusOpen = document.getElementById("focus-open");

    let focused = null;
    function setFocus(id) {
      focused = id;
      const near = id ? neighbours[id] : null;
      const picked = id ? nodeData.find((d) => d.id === id) : null;

      node.classed("is-dimmed", (d) => Boolean(near) && !near.has(d.id));
      // the one you picked reads differently from the ones it merely touches
      node.classed("is-picked", (d) => d.id === id);
      edge.classed("is-dimmed", (d) => {
        if (!near) return false;
        const s = typeof d.source === "object" ? d.source.id : d.source;
        const t = typeof d.target === "object" ? d.target.id : d.target;
        return !(near.has(s) && near.has(t));
      });
      // its own links get the hover treatment, so the chain reads at a glance
      edge.classed("is-lit", (d) => {
        if (!id) return false;
        const s = typeof d.source === "object" ? d.source.id : d.source;
        const t = typeof d.target === "object" ? d.target.id : d.target;
        return s === id || t === id;
      });

      if (focusCard) {
        focusCard.hidden = !picked;
        if (picked) {
          document.getElementById("focus-album").textContent = picked.album || picked.label;
          document.getElementById("focus-artist").textContent = [picked.artist, picked.year]
            .filter(Boolean)
            .join(" · ");
          focusOpen.hidden = !picked.uuid;
          focusOpen.onclick = () => window.openAlbumFromMap?.(picked.uuid);
        }
      }
      if (!near) return;

      // Dimming alone isn't enough: at the zoom where the whole map fits, the
      // surviving nodes are still specks scattered across it. Zoom to them, so
      // a focused record is legible no matter how large the web has grown.
      const pts = nodeData.filter((d) => near.has(d.id));
      if (pts.length < 2) return;
      const pad = 120;
      const x0 = Math.min(...pts.map((p) => p.x)) - pad;
      const x1 = Math.max(...pts.map((p) => p.x)) + pad;
      const y0 = Math.min(...pts.map((p) => p.y)) - pad;
      const y1 = Math.max(...pts.map((p) => p.y)) + pad;
      const k = Math.min(2.2, Math.min(width / (x1 - x0), height / (y1 - y0)));
      const t = d3.zoomIdentity
        .translate(width / 2, height / 2)
        .scale(k)
        .translate(-(x0 + x1) / 2, -(y0 + y1) / 2);
      svg.transition().duration(500).call(zoom.transform, t);
    }

    svg.on("click", () => setFocus(null));
    document.getElementById("focus-clear")?.addEventListener("click", () => setFocus(null));

    node
      .on("click", (event, d) => {
        event.stopPropagation();
        setFocus(focused === d.id ? null : d.id);
      })
      // A dimmed node stays clickable — jumping focus from one record to its
      // neighbour is the main way you read the map — but it doesn't volunteer
      // a tooltip. Hovering something at 7% opacity and getting a card for it
      // is just noise over whatever you were actually looking at.
      .on("mouseenter", function (event, d) {
        if (this.classList.contains("is-dimmed")) return;
        showTooltip(`<strong>${d.artist}</strong><br/>${d.album || d.label} ${d.year ? `(${d.year})` : ""}`, event.offsetX, event.offsetY);
      })
      .on("mousemove", function (event) {
        if (!tooltip || this.classList.contains("is-dimmed")) return;
        tooltip.style.left = `${event.offsetX + 16}px`;
        tooltip.style.top = `${event.offsetY + 8}px`;
      })
      .on("mouseleave", hideTooltip);

    // Each edge is trimmed to the two nodes' rims along the arc, so the
    // arrowhead lands on the circle's edge whatever size it is. The obvious way
    // to do that is getTotalLength/getPointAtLength on a detached path — but
    // those cost ~55µs a call, which at a thousand-odd edges is ~120ms a tick.
    // So it's solved in closed form instead, at ~0.5µs a call.
    //
    // It works because the radius is always 1.4x the chord, which fixes the
    // swept angle at 2*asin(1/2.8) for every edge regardless of length. That
    // makes arc length a constant multiple of the distance, and trimming is
    // just rotating each endpoint about the arc's centre. Verified against the
    // browser's own geometry: agrees to 0.0013px.
    const THETA = 2 * Math.asin(1 / 2.8);
    const ARC_K = 1.4 * THETA;

    const curve = (ax, ay, bx, by) => {
      const dx = bx - ax;
      const dy = by - ay;
      const dr = Math.sqrt(dx * dx + dy * dy) * 1.4;
      return `M${ax},${ay}A${dr},${dr} 0 0,1 ${bx},${by}`;
    };

    const arc = (d) => {
      const ax = d.source.x;
      const ay = d.source.y;
      const bx = d.target.x;
      const by = d.target.y;
      const dx = bx - ax;
      const dy = by - ay;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (!dist) return curve(ax, ay, bx, by);

      const r = 1.4 * dist;
      const len = ARC_K * dist;
      const from = Math.min(radiusOf(d.source) + 2, len - 1);
      const to = Math.max(len - (radiusOf(d.target) + 3), from + 1);

      // centre of the circle the arc lies on (sweep-flag 1 puts it this side)
      const h = Math.sqrt(Math.max(r * r - (dist * dist) / 4, 0));
      const cx = (ax + bx) / 2 - (dy / dist) * h;
      const cy = (ay + by) / 2 + (dx / dist) * h;

      // walking `s` along the arc == rotating the start point by s/r about it
      const px = ax - cx;
      const py = ay - cy;
      const a1 = from / r;
      const c1 = Math.cos(a1);
      const s1 = Math.sin(a1);
      const a2 = to / r;
      const c2 = Math.cos(a2);
      const s2 = Math.sin(a2);

      return curve(
        cx + px * c1 - py * s1,
        cy + px * s1 + py * c1,
        cx + px * c2 - py * s2,
        cy + px * s2 + py * c2
      );
    };

    function paint() {
      // the fat hit path sits exactly under the visible one, so compute the
      // geometry once per edge and reuse it rather than solving it twice
      link.attr("d", (d) => (d.path = arc(d)));
      hit.attr("d", (d) => d.path);
      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    }

    // D3 drives its own timer at exactly one tick per frame, so settling is
    // limited by frame count rather than by work: 300 ticks is five seconds
    // however fast each one is, and at 441 nodes a tick costs 3.3ms of a 16.7ms
    // frame. Driving it here instead, as many ticks as fit in a budget, spends
    // the idle two thirds of each frame and gets to the same layout several
    // times sooner. The budget keeps it honest as the graph grows — at the full
    // list a tick is ~8ms, so it simply does fewer per frame rather than
    // dropping below 60fps.
    simulation.stop();
    let looping = false;

    function settledEnough() {
      return simulation.alpha() <= simulation.alphaMin() && simulation.alphaTarget() <= simulation.alphaMin();
    }

    // Dropping the expensive paint — 441 labels drawn twice over for their
    // halo, 532 arrowhead markers — is what makes dragging feel direct. But
    // only while you are actually dragging.
    //
    // Doing it for all motion meant the whole settle, which is a thousand
    // frames with the tidy passes, ran with no labels or arrows at all. That
    // is most of a minute of looking at an unlabelled map to fix a problem
    // that only exists under the cursor. Settling is free to be expensive:
    // nobody is waiting on a response.
    //
    // The debounce stays, because d3 counts a plain click as a drag gesture
    // and hiding every label for those few frames is just a flicker.
    const MOTION_HIDE_DELAY = 180;
    const MOTION_SHOW_DELAY = 140;
    let hideTimer = null;
    let showTimer = null;

    function motionStarted() {
      clearTimeout(showTimer);
      showTimer = null;
      if (hideTimer || svg.classed("is-moving")) return;
      hideTimer = setTimeout(() => {
        hideTimer = null;
        svg.classed("is-moving", true);
      }, MOTION_HIDE_DELAY);
    }

    function motionStopped() {
      clearTimeout(hideTimer);
      hideTimer = null;
      if (showTimer) return;
      showTimer = setTimeout(() => {
        showTimer = null;
        svg.classed("is-moving", false);
      }, MOTION_SHOW_DELAY);
    }

    // One tick per frame, which is what d3's own timer does. Running several
    // per frame settled the layout in a fraction of the time, and looked it —
    // everything lurched. The pacing is the animation.
    function step() {
      simulation.tick();
      paint();

      // alphaTarget is only held above zero while a pointer is down — dragging
      // a node, or holding tidy. That is the only time the paint cost is in
      // anyone's way.
      if (simulation.alphaTarget() > simulation.alphaMin()) motionStarted();
      else motionStopped();

      if (settledEnough()) {
        looping = false;
        motionStopped();
        onSettled();
      } else {
        requestAnimationFrame(step);
      }
    }

    function run() {
      if (looping) return;
      looping = true;
      requestAnimationFrame(step);
    }

    // d3's zoom answers the wheel and dragging, neither of which a keyboard
    // has. These are ordinary buttons, so they're in the tab order for free.
    const zoomControls = document.getElementById("zoom-controls");
    if (zoomControls) {
      zoomControls.hidden = false;
      const fullBtn = document.getElementById("fullscreen-toggle");
      if (fullBtn) {
        const label = () => {
          fullBtn.textContent = document.fullscreenElement ? "exit" : "full screen";
        };
        label();
        document.addEventListener("fullscreenchange", label);
      }
      const leavesBtn = document.getElementById("leaves-toggle");
      if (leavesBtn) {
        leavesBtn.textContent = showLeaves ? "thin out" : `show all${hiddenCount ? ` (+${hiddenCount})` : ""}`;
        leavesBtn.classList.toggle("is-held", showLeaves);
      }
      zoomControls.onclick = (e) => {
        const what = e.target.closest("button")?.dataset.zoom;
        if (!what || what === "tidy") return;
        if (what === "fit") applyBounds({ fit: true });
        else if (what === "leaves") {
          showLeaves = !showLeaves;
          if (lastGraph) draw(lastGraph);
        } else if (what === "full") {
          const wrap = container.closest(".graph-wrap") || container;
          if (document.fullscreenElement) document.exitFullscreen();
          else wrap.requestFullscreen?.().catch(() => {});
        } else svg.transition().duration(220).call(zoom.scaleBy, what === "in" ? 1.45 : 1 / 1.45);
      };

      // Tidy works like holding a node, because that is what people already
      // discovered it does: press and the layout keeps churning for as long as
      // you hold, release and it cools. A quick tap instead fires one full
      // anneal, so the button does something useful either way.
      const tidyBtn = zoomControls.querySelector('[data-zoom="tidy"]');
      if (tidyBtn) {
        let heldAt = 0;
        const hold = (e) => {
          e.preventDefault();
          heldAt = performance.now();
          queued = 0;
          tidyBtn.classList.add("is-held");
          // Held at full heat the charge force has nothing pushing back and
          // the layout just inflates — measured 5595px across growing to 5929
          // in a couple of seconds. Pulling the centring up for the duration
          // makes it churn in place instead, then it relaxes on release.
          simulation.force("x").strength(0.035);
          simulation.force("y").strength(0.035);
          // alphaTarget keeps it warm indefinitely rather than cooling off
          simulation.alphaDecay(DECAY * 0.45).alphaTarget(0.35).alpha(1);
          run();
        };
        const release = () => {
          if (!heldAt) return;
          const wasTap = performance.now() - heldAt < 220;
          heldAt = 0;
          tidyBtn.classList.remove("is-held");
          simulation.force("x").strength(0.015);
          simulation.force("y").strength(0.015);
          simulation.alphaTarget(0);
          if (wasTap) tidyHard();
        };
        tidyBtn.addEventListener("pointerdown", hold);
        tidyBtn.addEventListener("pointerup", release);
        tidyBtn.addEventListener("pointerleave", release);
        tidyBtn.addEventListener("pointercancel", release);
      }
    }

    // Holding a node reheats the simulation, which is why the map visibly
    // tidies itself while you drag: a settled layout is only a local minimum,
    // and warming it up lets knots slide apart. Measured over repeated passes
    // it really does improve — 259 crossings down to 234 by the fourth, then
    // flat. So it runs on its own a few times after the first settle, each
    // pass cooler than the last, and there's a button to ask for another.
    // The passes are back — they're 70% of the ticks but the settled shape is
    // visibly better for them, and the multi-tick loop means they now cost
    // about four seconds of animation rather than seventeen.
    const TIDY_PASSES = [0.3, 0.22, 0.16];
    let tidyPass = 0;
    let queued = 0;

    const DECAY = simulation.alphaDecay();

    function tidy(alpha, { slow = false } = {}) {
      // A lower decay means the simulation stays warm for longer, so the
      // forces get far more time to work before it freezes — that is what
      // makes a hard tidy actually rearrange things rather than jiggle them.
      simulation.alphaDecay(slow ? DECAY * 0.45 : DECAY).alpha(alpha);
      run();
    }

    // The button runs a full anneal: maximum heat, slow cooling, four passes
    // back to back. Measured over repeated reheats, crossings fall 259 -> 234
    // by the fourth pass and then flatten, so four is where the gains stop.
    function tidyHard() {
      queued = 3;
      tidy(1, { slow: true });
    }

    window.__graphSettled = false;

    function onSettled() {
      applyBounds();
      if (queued > 0) {
        queued--;
        tidy(1, { slow: true });
        return;
      }
      if (tidyPass < TIDY_PASSES.length) {
        tidy(TIDY_PASSES[tidyPass++]);
        return;
      }
      simulation.alphaDecay(DECAY);
      window.__graphSettled = true;
    }

    run();
    // The zoom limits depend on the layout's size, which keeps changing while
    // the simulation runs — so refresh them a few times on the way rather than
    // waiting for "end", which never arrives if the tab is hidden (a hidden
    // tab pauses requestAnimationFrame, and with it the simulation).
    let refreshes = 0;
    const refresh = setInterval(() => {
      applyBounds();
      // has to outlast the tidy passes, which keep the layout moving
      if (++refreshes >= 24 || window.__graphSettled) clearInterval(refresh);
    }, 1200);
  }

  window.renderGraph = async function renderGraph(force) {
    if (loaded && !force) return;
    loaded = true;
    const graph = await fetchGraph();
    lastGraph = graph;
    draw(graph);
  };

  refreshBtn.addEventListener("click", () => window.renderGraph(true));
})();
