import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    typescript: {
        shim: false
    },    
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
