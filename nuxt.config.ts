export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
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
          content: 'Portfolio Samuel LEFEVRE, développeur web et mobile (Nuxt 3, Node.js, Flutter).',
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
