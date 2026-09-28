(function () {
  const container = document.getElementById("graph-canvas");
  const mapEmptyState = document.getElementById("map-empty-state");
  const refreshBtn = document.getElementById("refresh-graph-btn");

  let loaded = false;
  let tooltip = null;

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

  function renderStats(nodes, edges) {
    if (!statsEl) return;
    const { sources, sinks, central, inD, outD } = computeStats(nodes, edges);

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
    const nodes = Object.values(graph.nodes || {});
    const edges = Object.values(graph.edges || {});

    container.innerHTML = "";
    hideTooltip();
    tooltip = null;

    if (!nodes.length) {
      mapEmptyState.hidden = false;
      container.hidden = true;
      if (statsEl) statsEl.hidden = true;
      return;
    }
    mapEmptyState.hidden = true;
    container.hidden = false;
    renderStats(nodes, edges);

    const width = container.clientWidth || 900;
    const height = container.clientHeight || 640;

    const svg = d3
      .select(container)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

    const zoomLayer = svg.append("g");

    const zoom = d3
      .zoom()
      .scaleExtent([0.35, 2.5])
      .on("zoom", (event) => zoomLayer.attr("transform", event.transform));

    svg.call(zoom);

    // Fence the pannable area to the graph plus half a screen of slack, so you
    // can't scroll off into empty space with no way back. Applied once the
    // layout has settled, since the extent depends on where things ended up.
    function applyBounds() {
      const b = zoomLayer.node().getBBox();
      if (!b.width || !b.height) return;
      zoom.translateExtent([
        [b.x - width / 2, b.y - height / 2],
        [b.x + b.width + width / 2, b.y + b.height + height / 2],
      ]);
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
    arrowhead("arrow", "#1b1915", 10);
    arrowhead("arrow-hot", "#a83320", 10);

    const R_LIST = 26;
    const R_OTHER = 9;
    const radiusOf = (n) => (n.source === "list" ? R_LIST : R_OTHER);

    const linkData = edges.map((e) => ({ ...e }));
    const nodeData = nodes.map((n) => ({ ...n }));

    const simulation = d3
      .forceSimulation(nodeData)
      .force("link", d3.forceLink(linkData).id((d) => d.id).distance(165).strength(0.45))
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

    const link = edge
      .append("path")
      .attr("stroke", "#1b1915")
      .attr("stroke-width", 1.8)
      .attr("stroke-opacity", 0.55)
      .attr("fill", "none")
      .attr("marker-end", "url(#arrow)")
      .style("pointer-events", "none")
      .style("transition", "stroke-width 0.15s ease, stroke-opacity 0.15s ease");

    edge
      .on("mouseenter", function (event, d) {
        d3.select(this).select("path:last-child")
          .attr("stroke", "#a83320")
          .attr("stroke-width", 3.4)
          .attr("stroke-opacity", 1)
          .attr("marker-end", "url(#arrow-hot)");
        if (d.note) showTooltip(d.note, event.offsetX, event.offsetY);
      })
      .on("mousemove", (event, d) => {
        if (d.note) showTooltip(d.note, event.offsetX, event.offsetY);
      })
      .on("mouseleave", function () {
        d3.select(this).select("path:last-child")
          .attr("stroke", "#1b1915")
          .attr("stroke-width", 1.8)
          .attr("stroke-opacity", 0.55)
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
            if (!event.active) simulation.alphaTarget(0.25).restart();
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
      .attr("stroke", "#1b1915")
      .attr("stroke-width", 2);

    // anything without a sleeve stays a plain marker
    node
      .filter((d) => !(d.source === "list" && d.image))
      .append("circle")
      .attr("r", (d) => (d.source === "list" ? R_LIST : R_OTHER))
      .attr("fill", (d) => (d.source === "list" ? "#1d4a37" : "#e5872a"))
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2);

    node
      .append("text")
      .text((d) => {
        const s = (d.label || "").toLowerCase();
        return s.length > 24 ? s.slice(0, 23).trimEnd() + "…" : s;
      })
      .attr("x", 0)
      .attr("y", (d) => (d.source === "list" ? R_LIST + 15 : 23))
      .attr("text-anchor", "middle")
      .attr("font-family", "Poppins, sans-serif")
      .attr("font-weight", (d) => (d.source === "list" ? 800 : 600))
      .attr("letter-spacing", "-0.03em")
      .attr("font-size", (d) => (d.source === "list" ? 13 : 11))
      .attr("fill", "#1b1915")
      // paper-coloured halo, so a label crossing a line or another label
      // stays readable instead of turning to mush
      .attr("paint-order", "stroke")
      .attr("stroke", "#f7f0de")
      .attr("stroke-width", 3.5)
      .attr("stroke-linejoin", "round");

    node
      .on("mouseenter", (event, d) => {
        showTooltip(`<strong>${d.artist}</strong><br/>${d.album || d.label} ${d.year ? `(${d.year})` : ""}`, event.offsetX, event.offsetY);
      })
      .on("mousemove", (event) => {
        if (tooltip) {
          tooltip.style.left = `${event.offsetX + 16}px`;
          tooltip.style.top = `${event.offsetY + 8}px`;
        }
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

    simulation.on("tick", () => {
      // the fat hit path sits exactly under the visible one, so compute the
      // geometry once per edge and reuse it rather than solving it twice
      link.attr("d", (d) => (d.path = arc(d)));
      hit.attr("d", (d) => d.path);
      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    window.__graphSettled = false;
    simulation.on("end", () => {
      applyBounds();
      window.__graphSettled = true;
    });
    setTimeout(applyBounds, 3000);
  }

  window.renderGraph = async function renderGraph(force) {
    if (loaded && !force) return;
    loaded = true;
    const graph = await fetchGraph();
    draw(graph);
  };

  refreshBtn.addEventListener("click", () => window.renderGraph(true));
})();
