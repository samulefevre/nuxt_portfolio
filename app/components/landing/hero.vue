<script setup lang="ts">
import type { Button } from '#ui/types'

const malt = 'https://www.malt.fr/profile/samuellefevre'

type Link = Button & {
  click?: () => void
}

const links: Link[] = [
  { label: 'Me contacter sur Malt', icon: 'i-heroicons-rocket-launch', size: 'lg', to: malt, target: '_blank' },
]
</script>

<template>
  <ULandingHero
    id="hero"
    v-motion-roll-visible-once-top
    title="Freelance Fullstack Développeur"
    description="Je réalise vos projets web et mobiles. Je suis développeur Typescript (Nuxt.js) et Dart (Flutter)"
    :links="links"
  />
</template>
