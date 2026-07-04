import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [
  react(),
  tailwindcss(),
  visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true,
    filename: "stats.html",
  }),
],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
          outDir: "dist",
          emptyOutDir: true,
          cssCodeSplit: true,
          chunkSizeWarningLimit: 1000,
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
          return "vendor";
        }
      },
    },
  },
},
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
});
