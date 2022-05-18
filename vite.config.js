import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteFonts  from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteFonts({
      google: {
        families: ['Josefin Sans', 'Open Sans'],
      },
    }),
  ]
})
