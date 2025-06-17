import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/component.js',
      name: 'LscTest',
      fileName: (format) => `lsc-test.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      globals: {
        vue: 'Vue'
      },
      external: ['vue'],
      output: {
        assetFileNames: '[name][extname]',
      }
    }
  }
})
