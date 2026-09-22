<script setup>
const props = defineProps({
  error: { type: Object, required: true },
})

useSeoMeta({
  title: 'Page introuvable — Samuel Lefèvre',
  description: 'Cette page est introuvable.',
})
</script>

<template>
  <div
    id="top"
    class="site-frame"
  >
    <Header />
    <main
      id="main-content"
      class="error-page shell"
    >
      <p class="eyebrow">
        ERREUR {{ props.error.statusCode }}
      </p>
      <h1>Cette page est introuvable.</h1>
      <p>Le lien a peut-être changé. Vous pouvez revenir à l’accueil.</p>
      <NuxtLink
        class="button button-primary"
        to="/"
      >Retour à l’accueil <span aria-hidden="true">↗</span></NuxtLink>
    </main>
    <Footer />
  </div>
</template>
