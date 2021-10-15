import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    // vite: false,
    components: true,
    build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
      },
})
