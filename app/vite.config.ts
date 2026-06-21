import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites from /<repo-name>/, so Vite must emit
  // asset URLs with that base path instead of the default /.
  base: '/visprojcect-ass3-deploy/',
  plugins: [react()],
})
