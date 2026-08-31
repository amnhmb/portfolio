import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Served from the root on Cloudflare Pages (custom domain amnhmb.my) and locally.
export default defineConfig({
  base: '/',
  plugins: [tailwindcss(), react()],
})
