export default defineNuxtConfig({
    modules: [
        '@nuxt/ui',
        '@nuxt/image'
    ],
    ui: {
        icons: 'all'
    },
    colorMode: {
        preference: 'dark',
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'fr'
            },
            title: 'Portfolio Samuel LEFEVRE',
            meta: [
                {
                    name: 'description',
                    content: 'Portfolio Samuel LEFEVRE, développeur web et mobile (Nuxt 3, Node.js, Flutter).',
                },
            ]

        }
    }
})
