export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@nuxt/image', '@vueuse/motion/nuxt', '@nuxt/eslint'],
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
})
