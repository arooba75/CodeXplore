import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import { copyFileSync } from 'fs';

export default defineConfig({
  plugins: [react(), svgr()],

  build: {
    rollupOptions: {
      output: {
        // Ensure that the output is properly structured
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  // Hook into the build process to copy `_redirects` after build
  esbuild: {
    minify: true,
  },
  define: {
    "process.env": {},
  },
  server: {
    fs: {
      allow: ['.'],
    },
  },
});

// Ensure `_redirects` file is copied to `dist/`
copyFileSync('public/_redirects', 'dist/_redirects');




