import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  ],
  server: {
    proxy: {
      '/v1': {
        target: 'https://cloud.appwrite.io/v1',
        changeOrigin: true,
        secure: false,
      },
    },
  }
})
