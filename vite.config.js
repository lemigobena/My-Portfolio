import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { generateRouteHtmlFiles } from './scripts/generate-routes.mjs'

function seoPrerenderPlugin() {
  return {
    name: 'seo-prerender-routes',
    closeBundle() {
      generateRouteHtmlFiles(path.resolve(process.cwd(), 'dist'))
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), seoPrerenderPlugin()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
