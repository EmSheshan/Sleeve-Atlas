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
    const res = await fetch("/api/graph");
    return res.json();
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
      return;
    }
    mapEmptyState.hidden = true;
    container.hidden = false;

    const width = container.clientWidth || 900;
    const height = container.clientHeight || 640;

    const svg = d3
      .select(container)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

    const zoomLayer = svg.append("g");

    svg.call(
      d3.zoom().scaleExtent([0.35, 2.5]).on("zoom", (event) => {
        zoomLayer.attr("transform", event.transform);
      })
    );

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
      .force("collide", d3.forceCollide(46));

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

    // albums from the list are drawn as their own sleeve, clipped to a circle
    nodeData.forEach((d, i) => {
      d.idx = i;
      if (d.source === "list" && d.image) {
        defs.append("clipPath").attr("id", `sleeve-${i}`).append("circle").attr("r", R_LIST);
      }
    });

    const withArt = node.filter((d) => d.source === "list" && d.image);

    withArt
      .append("image")
      .attr("href", (d) => d.image)
      .attr("x", -R_LIST)
      .attr("y", -R_LIST)
      .attr("width", R_LIST * 2)
      .attr("height", R_LIST * 2)
      .attr("preserveAspectRatio", "xMidYMid slice")
      .attr("clip-path", (d) => `url(#sleeve-${d.idx})`);

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
      .text((d) => (d.label || "").toLowerCase())
      .attr("x", 0)
      .attr("y", (d) => (d.source === "list" ? R_LIST + 15 : 23))
      .attr("text-anchor", "middle")
      .attr("font-family", "Poppins, sans-serif")
      .attr("font-weight", (d) => (d.source === "list" ? 800 : 600))
      .attr("letter-spacing", "-0.03em")
      .attr("font-size", (d) => (d.source === "list" ? 13 : 11))
      .attr("fill", "#1b1915");

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

    // Measuring against a detached path lets us trim the curve at each node's
    // rim along the actual arc, not the straight chord — so the arrowhead lands
    // on the edge of the circle whatever size it is.
    const measurer = document.createElementNS("http://www.w3.org/2000/svg", "path");

    const curve = (ax, ay, bx, by) => {
      const dx = bx - ax;
      const dy = by - ay;
      const dr = Math.sqrt(dx * dx + dy * dy) * 1.4;
      return `M${ax},${ay}A${dr},${dr} 0 0,1 ${bx},${by}`;
    };

    const arc = (d) => {
      const full = curve(d.source.x, d.source.y, d.target.x, d.target.y);
      measurer.setAttribute("d", full);
      const len = measurer.getTotalLength();
      if (!len) return full;

      const from = Math.min(radiusOf(d.source) + 2, len - 1);
      const to = Math.max(len - (radiusOf(d.target) + 3), from + 1);
      const a = measurer.getPointAtLength(from);
      const b = measurer.getPointAtLength(to);
      return curve(a.x, a.y, b.x, b.y);
    };

    simulation.on("tick", () => {
      link.attr("d", arc);
      hit.attr("d", arc);
      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });
  }

  window.renderGraph = async function renderGraph(force) {
    if (loaded && !force) return;
    loaded = true;
    const graph = await fetchGraph();
    draw(graph);
  };

  refreshBtn.addEventListener("click", () => window.renderGraph(true));
})();
