import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const here = import.meta.dirname;
export default defineConfig({
  root: here,
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": resolve(here, "../../src") } },
  build: { outDir: resolve(here, "../../.visual-dist"), emptyOutDir: true, assetsInlineLimit: 100000 },
});
