#!/usr/bin/env node
/**
 * check-tokens.mjs — fails if component code uses raw values instead of design tokens.
 * Catches: hex colours, rgb()/hsl()/oklch() colours, Tailwind arbitrary values like p-[13px] or text-[#333],
 * and inline style objects with px values. No dependencies. `npm run check:tokens`.
 *
 * Allowed: generated files (src/styles/tokens.css, tailwind-theme.css), icon path data, stories' layout wrappers
 * marked with `// tokens-ok: <reason>` on the same line.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const scanDirs = ["src/components", "src/lib"];
const rules = [
  { re: /#[0-9a-fA-F]{3,8}\b/, why: "raw hex colour — use a color token class (e.g. bg-surface-default)" },
  { re: /\b(?:rgba?|hsla?|oklch|oklab)\(/, why: "raw colour function — use a color token" },
  { re: /\b[a-z-]+-\[[^\]]+\](?!:)/, why: "Tailwind arbitrary value — use a token utility (p-16, rounded-full, text-h2…)" },
  { re: /style=\{\{[^}]*\d+px/, why: "inline px value — use a spacing/size token" },
];

const files = [];
const walk = (d) => {
  let entries = [];
  try { entries = readdirSync(d); } catch { return; }
  for (const f of entries) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(tsx?|css)$/.test(f)) files.push(p);
  }
};
scanDirs.forEach((d) => walk(resolve(root, d)));

const problems = [];
for (const file of files) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    if (line.includes("tokens-ok:")) return;
    for (const { re, why } of rules) if (re.test(line)) problems.push(`${relative(root, file)}:${i + 1}  ${why}\n    ${line.trim()}`);
  });
}
if (problems.length) {
  console.error(`✖ ${problems.length} raw value(s) found:\n\n${problems.join("\n")}`);
  process.exit(1);
}
console.log(`✔ token check passed (${files.length} files)`);

// Built CSS must contain every tint background (catches Tailwind not scanning a folder).
import { existsSync } from "node:fs";
const built = resolve(root, "dist/styles.css");
if (existsSync(built)) {
  const css = readFileSync(built, "utf8");
  const missing = ["blue", "mint", "peach"].filter((t) => !css.includes(`.bg-surface-${t}`));
  if (missing.length) {
    console.error(`✖ dist/styles.css is missing tint classes: ${missing.join(", ")} — check @source in src/styles/index.css`);
    process.exit(1);
  }
}
