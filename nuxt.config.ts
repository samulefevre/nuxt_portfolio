export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  // Nuxt 4 directory structure and features
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  // Nuxt Modules
  // https://nuxt.com/modules
  modules: [
    'nuxt-cloudflare-analytics',
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxt/eslint',
  ],
  ui: {
    icons: 'all',
  },
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
  cloudflareAnalytics: {
    // See below for more options
    token: process.env.NUXT_CLOUDFLARE_ANALYTICS_TOKEN || '', // Example 1a2b3v4a5er6ac7r8afd
  },
})
