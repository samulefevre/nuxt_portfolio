export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxt/eslint',
  ],
  css: ['~/assets/css/tailwind.css'],
  colorMode: {
    preference: 'dark',
  },
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
      script: process.env.NUXT_CLOUDFLARE_ANALYTICS_TOKEN
        ? [
            {
              src: 'https://static.cloudflareinsights.com/beacon.min.js',
              defer: true,
              'data-cf-beacon': `{"token":"${process.env.NUXT_CLOUDFLARE_ANALYTICS_TOKEN}"}`,
            },
          ]
        : [],
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
})
