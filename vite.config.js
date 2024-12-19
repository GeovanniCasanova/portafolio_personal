import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portafolio_personal/' // Exactamente el nombre de tu repositorio
})