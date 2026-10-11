import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  // Vercel sirve en la raíz; GitHub Pages bajo /alison-portfolio/
  base: process.env.VERCEL ? '/' : '/alison-portfolio/',
  plugins: [react(), tailwindcss()],
})
