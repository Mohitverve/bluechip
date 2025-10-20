import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ filename: 'bundle-visualizer.html', open: false }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) return 'react-vendor';
          if (id.includes('node_modules/antd')) return 'antd';
          if (id.includes('@ant-design/icons')) return 'antd-icons';
          // You can add more custom chunks here
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    chunkSizeWarningLimit: 800,
  }
});
