export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Samuel Lefèvre — Développeur full-stack TypeScript',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [
        { name: 'description', content: 'Développeur full-stack TypeScript indépendant. Architecture web et SaaS, Nuxt, backend et Cloudflare, de la conception au déploiement.' },
        { name: 'theme-color', content: '#f7f9f7' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-09-22',
  eslint: {
    config: {
      stylistic: { indent: 2, quotes: 'single', semi: false },
    },
  },
})
