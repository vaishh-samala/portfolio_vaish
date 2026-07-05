import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.vercel.app', '.github.io', "63d9-49-37-152-185.ngrok-free.app", "cbfc-2405-201-c41e-a0bf-18ae-30ae-21fa-6ad9.ngrok-free.app"],
  },
})
