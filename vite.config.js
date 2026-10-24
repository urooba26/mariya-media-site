import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base must match the GitHub Pages project path (/<repo>/).
// For Netlify, Vercel or a custom domain run with VITE_BASE=/ (see README).
export default defineConfig({
  base: process.env.VITE_BASE || '/mariya-media-site/',
  plugins: [react()],
  build: {
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          swiper: ['swiper'],
        },
      },
    },
  },
})
