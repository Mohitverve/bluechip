// vite.config.js
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(), // Safe vendor splitting built into Vite
    visualizer({
      filename: 'bundle-visualizer.html',
      open: false, // Set to true to auto-open after build
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // A stable, simplified fallback for chunking
        manualChunks(id) {
          // Separate large libraries safely
          if (id.includes('node_modules/react')) return 'react-vendor';
          if (id.includes('node_modules/antd')) return 'antd';
          if (id.includes('@ant-design/icons')) return 'antd-icons';
          if (id.includes('commonjsHelpers')) return 'commonjs-helpers';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
    // Prevent CommonJS/ESM interop errors in production
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    // Slightly raised warning limit for Ant Design-heavy bundles
    chunkSizeWarningLimit: 800,
    // Production optimization
    minify: 'esbuild',
  },
});
