<script setup lang="ts">
const malt = 'https://www.malt.fr/profile/samuellefevre'

const links: any = [{ label: 'Me contacter sur Malt', icon: 'i-heroicons-rocket-launch', size: 'lg', to: malt, target: '_blank' }]
</script>

<template>
  <ULandingHero title="Freelance Fullstack Développeur"
    description="Je réalise vos projets web et mobiles. Je suis développeur Typescript (Nuxt.js) et Dart (Flutter)"
    :links="links" id="hero" />
</template>
