import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base must match the GitHub Pages project path (/<repo>/).
// Override with VITE_BASE for other hosts (e.g. VITE_BASE=/ for a custom domain).
export default defineConfig({
  base: process.env.VITE_BASE || '/mariya-media-site/',
  plugins: [react()],
})
