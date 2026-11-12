import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const here = import.meta.dirname;
const lib = resolve(here, "../src");

/**
 * The library's entry (src/index.ts) imports its own stylesheet. The site already includes that stylesheet
 * inside site/src/styles.css (so Tailwind can also see the page's classes), so skip the second copy.
 */
function skipLibraryCss(): Plugin {
  const empty = "\0ka-empty.css";
  return {
    name: "ka-skip-library-css",
    enforce: "pre",
    resolveId(id, importer) {
      if (id === "./styles/index.css" && importer === resolve(lib, "index.ts")) return empty;
    },
    load(id) {
      if (id === empty) return "";
    },
  };
}

/**
 * Portfolio site. Uses the design system straight from this repo's source, under its package name
 * (`import { Header } from "ka-design-system"`), exactly as a separate app would after installing it.
 */
export default defineConfig({
  root: here,
  plugins: [skipLibraryCss(), react(), tailwindcss()],
  resolve: {
    alias: [
      { find: /^ka-design-system$/, replacement: resolve(lib, "index.ts") },
      { find: /^@\//, replacement: `${lib}/` },
    ],
  },
  build: { outDir: resolve(here, "dist"), emptyOutDir: true, sourcemap: true },
});
