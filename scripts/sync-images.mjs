import fs from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, 'Images');
const destDir = path.join(projectRoot, 'public', 'assets', 'images');

async function exists(dirPath) {
  try {
    await fs.access(dirPath);
    return true;
  } catch {
    return false;
  }
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function copyFlatImages(srcDir, outDir) {
  const entries = await fs.readdir(srcDir, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => /\.(png|jpe?g|webp|svg)$/i.test(name));

  await ensureDir(outDir);

  await Promise.all(
    files.map(async (name) => {
      const from = path.join(srcDir, name);
      const to = path.join(outDir, name);
      await fs.copyFile(from, to);
    })
  );

  return files;
}

if (!(await exists(sourceDir))) {
  console.log('[sync-images] No Images/ folder found; skipping.');
  process.exit(0);
}

const copied = await copyFlatImages(sourceDir, destDir);
console.log(`[sync-images] Copied ${copied.length} file(s) to public/assets/images.`);
