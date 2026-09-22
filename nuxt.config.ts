export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Samuel Lefèvre — Développeur full-stack TypeScript',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [
        { name: 'description', content: 'Développeur full-stack TypeScript indépendant. Architecture web et SaaS, Nuxt, backend et Cloudflare, de la conception au déploiement.' },
        { name: 'theme-color', content: '#f8fafc' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
  },
  ui: { fonts: false },
  compatibilityDate: '2026-09-22',
  eslint: {
    config: {
      stylistic: { indent: 2, quotes: 'single', semi: false },
    },
  },
})
