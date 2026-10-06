// Same-origin function, so rating is available everywhere the site is —
// no more "local vs Pages" split. Kept as its own endpoint (rather than just
// having the client assume true) so a future constraint has somewhere to live.
export default async () => Response.json({ canRate: true });

export const config = { path: "/api/capabilities" };
