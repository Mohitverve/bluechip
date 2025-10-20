import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          
          // Ant Design Icons
          if (id.includes('@ant-design/icons')) {
            return 'antd-icons';
          }
          
          // Split Ant Design into smaller chunks
          if (id.includes('node_modules/antd')) {
            // Form-related components
            if (id.includes('/form') || id.includes('/input')) {
              return 'antd-form';
            }
            // Layout components (Menu, Drawer, Tabs)
            if (id.includes('/menu') || id.includes('/drawer') || id.includes('/tabs')) {
              return 'antd-layout';
            }
            // Everything else
            return 'antd-core';
          }
          
          // Vendor libraries
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 800, // Increased to 800 since antd is large
    minify: 'esbuild',
  }
})