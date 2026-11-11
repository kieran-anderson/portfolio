import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const here = import.meta.dirname;

/** Library build: dist/index.js (+ .d.ts types) and dist/styles.css. React stays outside the bundle. */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ include: ["src"], exclude: ["src/**/*.stories.tsx", "src/**/*.figma.ts"], tsconfigPath: "./tsconfig.json" }),
  ],
  resolve: { alias: { "@": resolve(here, "src") } },
  build: {
    lib: { entry: resolve(here, "src/index.ts"), formats: ["es"], fileName: "index", cssFileName: "styles" },
    rollupOptions: { external: ["react", "react-dom", "react/jsx-runtime"] },
    sourcemap: true,
  },
});
