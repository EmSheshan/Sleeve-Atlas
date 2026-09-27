// Local preview only. The site is fully static — the browser talks to the
// 1001 Albums Generator API directly, which its CORS headers allow — so this
// just serves dist/ over http, which is all fetch() of the baked JSON needs.
// Run `npm run build` first, or use `npm start`, which does both.
import express from "express";
import path from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");
const PORT = process.env.PORT || 4001;

if (!existsSync(dist)) {
  console.error("dist/ not found — run `npm run build` first.");
  process.exit(1);
}

const app = express();
app.use(express.static(dist));

app.listen(PORT, () => {
  console.log(`Sleeve Atlas (static) running at http://localhost:${PORT}`);
});
