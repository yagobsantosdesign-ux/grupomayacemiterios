import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const ASSETS_DIR = new URL("../src/assets", import.meta.url).pathname
  .replace(/^\/([A-Z]:)/, "$1")
  .replace(/%20/g, " ");

// Skip hash-named files (Figma assets) and SVGs
const isNamedImage = (f) =>
  /\.(png|jpg|jpeg)$/i.test(f) && !/^[0-9a-f]{40}\./i.test(f);

const files = (await readdir(ASSETS_DIR)).filter(isNamedImage);

console.log(`Converting ${files.length} images to WebP...\n`);

for (const file of files) {
  const input = join(ASSETS_DIR, file);
  const output = join(ASSETS_DIR, basename(file, extname(file)) + ".webp");

  const isLogo = file.startsWith("logo-");
  const quality = isLogo ? undefined : 82;

  try {
    const info = await sharp(input)
      .webp(isLogo ? { lossless: true } : { quality })
      .toFile(output);

    const orig = (await import("fs")).statSync(input).size;
    const saved = Math.round((1 - info.size / orig) * 100);
    console.log(`  ✓ ${file} → ${basename(output)}  (${Math.round(orig/1024)}KB → ${Math.round(info.size/1024)}KB, -${saved}%)`);

    await unlink(input);
  } catch (e) {
    console.error(`  ✗ ${file}: ${e.message}`);
  }
}

console.log("\nDone.");
