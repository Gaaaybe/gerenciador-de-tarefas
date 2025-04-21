import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite conexões externas
    port: 5173, // Porta padrão
    watch: {
      usePolling: true, // Necessário para live reload no Docker
    },
  },
})