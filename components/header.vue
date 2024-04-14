<script setup lang="ts">
import type { HeaderLink } from '@nuxt/ui-pro/types'
const route = useRoute()

console.log(route.hash)

const title = 'Samuel LEFEVRE'

const links: Ref<HeaderLink[]> = computed(() => [
  {
    label: 'Home',
    to: '/',
    active: route.hash === '' ? true : false,
  },
  {
    label: 'Compétences',
    to: { hash: '#skills', path: '/' },
    active: route.hash === '#skills' ? true : false,
  },
  {
    label: 'Portfolio',
    to: '/#portfolio',
    active: route.hash === '#portfolio' ? true : false,
  },
  {
    label: 'Contact',
    to: '/#contact',
    active: route.hash === '#contact' ? true : false,
  }
])
</script>

<template>
  <UHeader :title="title" :links="links" />
</template>