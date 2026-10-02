import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const images = [
  ...Array.from({ length: 7 }, (_, index) => ({ file: `public/images/app-screens/${index + 1}.png`, width: 800 })),
  { file: "public/images/brand/ndi-oru-mark.png", width: 520 },
];
const rows = [];
const hash = (buffer) => createHash("sha256").update(buffer).digest("hex");
const size = (bytes) => `${(bytes / 1024).toFixed(1)} KiB`;

for (const { file, width } of images) {
  const source = path.join(root, file);
  const original = await fs.readFile(source);
  const before = await sharp(original).metadata();
  const optimizedFile = file.replace(/\.png$/, ".webp");
  await sharp(original)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(path.join(root, optimizedFile));
  const optimized = await fs.readFile(path.join(root, optimizedFile));
  const after = await sharp(optimized).metadata();
  // Decode the full output, not just its header, to catch truncated/corrupt files.
  await sharp(optimized).raw().toBuffer();
  if (hash(original) !== hash(await fs.readFile(source))) {
    throw new Error(`Original changed: ${file}`);
  }
  rows.push({ file, optimizedFile, before, after, originalBytes: original.length, optimizedBytes: optimized.length });
}

const report = [
  "# Landing-page image audit and optimization",
  "",
  "Sizes are KiB (1,024 bytes). All original PNG files are retained unchanged. Inline SVG UI icons have no separate image file.",
  "",
  "## Original images used by the landing page",
  "",
  "| Path | Dimensions | Format | Size | Over 400 KB? |",
  "| --- | --- | --- | ---: | --- |",
  ...rows.map(({ file, before, originalBytes }) => `| [${file}](${file}) | ${before.width} × ${before.height} | PNG | ${size(originalBytes)} | ${originalBytes > 400000 ? "Yes" : "No"} |`),
  "| [public/favicon.svg](public/favicon.svg) | 64 × 64 | SVG | 0.3 KiB (300 bytes) | No |",
  "",
  "## Optimized web versions",
  "",
  "| File | Original size | Optimized size | Original dimensions | New dimensions | Reduction |",
  "| --- | ---: | ---: | --- | --- | ---: |",
  ...rows.map(({ optimizedFile, before, after, originalBytes, optimizedBytes }) => `| [${optimizedFile}](${optimizedFile}) | ${size(originalBytes)} | ${size(optimizedBytes)} | ${before.width} × ${before.height} | ${after.width} × ${after.height} | ${(100 * (1 - optimizedBytes / originalBytes)).toFixed(1)}% |`),
  "",
  "WebP quality: 82; encoder effort: 6. Screenshot width: 800 px (over twice the largest 330 px CSS display width). Logo width: 520 px (twice the largest 260 px display width). Heights are proportionally rounded; no cropping or stretching is applied during conversion.",
  "",
  "The files are pre-optimized and rendered with next/image using unoptimized to avoid depending on an unavailable runtime optimizer or double-compressing screenshot text. Below-fold images use loading=lazy and decoding=async. Hero images retain priority. Existing fixed dimensions and aspect-ratio containers are unchanged.",
  "",
  "Regenerate with `node scripts/optimize-landing-images.mjs` using the installed Sharp library (no dependency changes required).",
  "",
];
await fs.writeFile(path.join(root, "IMAGE_OPTIMIZATION.md"), report.join("\n"));
console.table(rows.map(({ file, before, after, originalBytes, optimizedBytes }) => ({ file, original: size(originalBytes), optimized: size(optimizedBytes), dimensions: `${before.width}x${before.height} → ${after.width}x${after.height}`, reduction: `${(100 * (1 - optimizedBytes / originalBytes)).toFixed(1)}%` })));
