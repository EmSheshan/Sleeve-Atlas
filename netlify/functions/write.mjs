// The generator has three separate write endpoints, and which one applies
// depends entirely on the album's state. Posting to the wrong one just returns
// `{success:false}` with an errorCode, which is what made this look broken:
//
//   /rate            rate an album that is NOT yet rated (from the history view)
//   /notes           edit the review on a history album — refuses once rated
//   /listening-note  notes on the CURRENT album, before it has a rating at all
//
// Ratings are one-way: once an album has one, both /rate and /notes answer
// `already-rated` and there is no API route that overwrites it.
const WRITES = {
  rate: {
    path: "rate",
    body: ({ rating, notes, generatedAlbumId, fromHistoryView }) => ({
      rating,
      notes: notes || "",
      fromHistoryView: Boolean(fromHistoryView),
      generatedAlbumId: generatedAlbumId || undefined,
      isUserAlbum: false,
    }),
  },
  notes: {
    path: "notes",
    body: ({ notes, generatedAlbumId }) => ({
      notes: notes || "",
      generatedAlbumId: generatedAlbumId || undefined,
      isUserAlbum: false,
    }),
  },
  "listening-note": {
    path: "listening-note",
    body: ({ notes }) => ({ notes: notes || "", isUserAlbum: false }),
  },
};

// Upstream error codes, in words that say what the user can do about it.
const REASONS = {
  "already-rated": "1001 locks the rating and review once an album has been rated — there's no API route that changes it.",
  "old-session-error": "1001 says that isn't your current album any more. Refresh and try again.",
  "listened-not-found": "1001 has no listen recorded for this album yet.",
};

export default async (req) => {
  // Read the kind straight off the URL rather than trusting context.params —
  // netlify dev's param population for /api/write/:kind has proven flaky
  // across CLI versions, and a 404 from a parsing quirk reads as "the proxy
  // is broken" instead of "you posted to the wrong kind."
  const kind = new URL(req.url).pathname.split("/").pop();
  const write = WRITES[kind];
  if (!write) {
    // 400, not 404: netlify dev treats a function 404 as "page not found" and
    // retries pretty-url fallbacks (.html, /index.html, ...), which rewrites
    // the very path this reads kind from. A 400 doesn't trigger that.
    return Response.json({ error: true, message: `unknown write "${kind}"` }, { status: 400 });
  }

  const body = await req.json().catch(() => ({}));
  const { projectName, albumId } = body || {};
  if (!projectName || !albumId) {
    return Response.json({ error: true, message: "projectName and albumId are required" }, { status: 400 });
  }
  if (kind === "rate" && body.rating == null) {
    return Response.json({ error: true, message: "rating is required" }, { status: 400 });
  }

  let upstream;
  try {
    upstream = await fetch(
      `https://1001albumsgenerator.com/api/${encodeURIComponent(projectName)}/${encodeURIComponent(albumId)}/${write.path}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(write.body(body)),
      }
    );
  } catch (err) {
    return Response.json({ error: true, message: err.message }, { status: 502 });
  }

  const text = await upstream.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    return Response.json({ error: true, message: `unexpected response: ${text.slice(0, 120)}` }, { status: 502 });
  }

  if (!data.success) {
    const code = data.errorCode || "";
    return Response.json(
      {
        error: true,
        code,
        message: REASONS[code] || (code ? `1001 said: ${code}` : "1001 rejected that, without saying why."),
        detail: data,
      },
      { status: 502 }
    );
  }
  return Response.json({ ok: true, detail: data });
};

export const config = { path: "/api/write/:kind" };
