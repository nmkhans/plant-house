import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      'pure-react-carousel': 'pure-react-carousel/dist/react-carousel.es.js',
    },
  },
})
