import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuración para asegurar que los assets se carguen correctamente
  build: {
    // Genera sourcemaps para mejor depuración
    sourcemap: true,
    // Optimiza el tamaño del bundle
    minify: true
  },
  // Configuración de servidor de desarrollo
  server: {
    // Abre el navegador automáticamente
    open: true,
    // Habilita HMR
    hmr: true
  },
  // Asegura que las rutas base sean correctas para Netlify
  base: '/'
})
