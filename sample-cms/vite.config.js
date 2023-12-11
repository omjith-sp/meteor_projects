import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  meteor: {
    clientEntry: 'imports/ui/main.js',
  },
  optimizeDeps: {
    exclude: ['vue-meteor-tracker'],
  },
  build: {
    // Add a rule to handle font files
    assetsInlineLimit: 0, // Ensure font files are not inlined
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('bootstrap-icons/font/')) {
            return 'bootstrap-icons';
          }
        }
      }
    }
  }
})
