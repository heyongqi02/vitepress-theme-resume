import { cpSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fontDir = join(root, "node_modules/simple-icons-font/font");
const distDir = join(root, "dist");

mkdirSync(distDir, { recursive: true });

for (const file of ["SimpleIcons.woff2", "SimpleIcons.woff", "SimpleIcons.ttf"]) {
  cpSync(join(fontDir, file), join(distDir, file));
}
