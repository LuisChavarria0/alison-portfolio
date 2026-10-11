import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  // Publicado en GitHub Pages bajo https://luischavarria0.github.io/alison-portfolio/
  base: '/alison-portfolio/',
  plugins: [react(), tailwindcss()],
})
