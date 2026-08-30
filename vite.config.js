import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// On GitHub Pages the site is served from /portfolio/, so assets need that
// base. Locally and on Cloudflare Pages (served from the root) the base is '/'.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
  plugins: [tailwindcss(), react()],
})
