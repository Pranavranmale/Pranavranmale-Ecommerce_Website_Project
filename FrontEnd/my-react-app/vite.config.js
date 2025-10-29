// import { defineConfig } from 'vite'

// import react from '@vitejs/plugin-react'

// import tailwindcss from '@tailwindcss/vite'

  

// // https://vite.dev/config/

// export default defineConfig({

//   plugins: [react(),tailwindcss(),],

// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 5173, // you can change this port if needed
  },
})
