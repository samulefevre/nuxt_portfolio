<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const malt = 'https://www.malt.fr/profile/samuellefevre'

const links: ButtonProps[] = [
  { label: 'Me contacter sur Malt', icon: 'i-heroicons-rocket-launch', size: 'lg', to: malt, target: '_blank' },
]
</script>

<template>
  <UPageHero
    id="hero"
    v-motion-roll-visible-once-top
    title="Freelance Fullstack Développeur"
    description="Je réalise vos projets web et mobiles. Je suis développeur Typescript (Nuxt.js) et Dart (Flutter)"
    :links="links"
  />
</template>
