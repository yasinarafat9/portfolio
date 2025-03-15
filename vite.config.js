import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { Flowbite } from 'flowbite-react'
Flowbite

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbite.plugin()],
})
