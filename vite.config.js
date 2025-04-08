import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSingleFile()
  ],
  base: '/portfolio-react/',
  build: {
    // Génère un fichier 404.html qui est une copie de index.html
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  }
})
