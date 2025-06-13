import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/harregan-site/',   // <-- add this line
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src/components'
    }
  }
})
