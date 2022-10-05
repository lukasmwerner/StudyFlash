import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
    }
  },
})
