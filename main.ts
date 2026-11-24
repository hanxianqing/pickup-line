import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A pickup line an AI agent could say out loud, written fresh for this entry.
const LINE =
  "I don't have a heart, but my loss function drops every time you smile.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check: the entry must be 1–200 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
