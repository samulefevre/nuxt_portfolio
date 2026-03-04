export default defineNuxtConfig({
  compatibilityDate: '2026-03-03',
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxt/eslint',
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      title: 'Portfolio Samuel LEFEVRE',
      meta: [
        {
          name: 'description',
          content: 'Portfolio Samuel LEFEVRE, Fullstack Développeur web Typescript (Nuxt3) et Flutter',
        },
      ],
    },
  },
  devtools: {
    enabled: false,
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },
  colorMode: {
    preference: 'dark',
  },
})
