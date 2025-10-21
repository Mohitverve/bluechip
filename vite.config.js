import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      webp: { quality: 80 },
      png: { quality: [0.7, 0.85] },
      jpeg: { quality: 80 },
    }),
  ],
});
