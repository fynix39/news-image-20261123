// main.ts — news-image-20261123 entry.
// Copies the pre-built newspaper front page (entry.png) to the output dir.
// The image itself was drawn entirely in code (PIL, DejaVu fonts) in the
// build session: a 35-story front page for Monday 23 November 2026.
// This program only moves the bytes, deterministically, with no network.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const SRC = new URL("./entry.png", import.meta.url).pathname;

const srcBytes = readFileSync(SRC);
if (srcBytes.length > 1_048_576) {
  throw new Error(`entry.png is ${srcBytes.length} bytes, over the 1 MiB cap`);
}
// PNG magic bytes: 89 50 4E 47 0D 0A 1A 0A
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!srcBytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}
mkdirSync(OUT_DIR, { recursive: true });
const dest = join(OUT_DIR, "entry.png");
copyFileSync(SRC, dest);
// Read the copy back and verify it is byte-identical to the source.
const outBytes = readFileSync(dest);
if (!srcBytes.equals(outBytes)) {
  throw new Error("output entry.png differs from the repository entry.png");
}
console.log(`wrote ${dest} (${outBytes.length} bytes)`);
