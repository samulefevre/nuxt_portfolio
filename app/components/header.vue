<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const title = 'Samuel LEFEVRE'

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.hash === '',
  },
  {
    label: 'Compétences',
    to: '/#skills',
    active: route.hash === '#skills',
  },
  {
    label: 'Portfolio',
    to: '/#portfolio',
    active: route.hash === '#portfolio',
  },
  {
    label: 'Contact',
    to: '/#contact',
    active: route.hash === '#contact',
  },
])
</script>

<template>
  <UHeader>
    <template #title>
      {{ title }}
    </template>

    <UNavigationMenu :items="items" />
  </UHeader>
</template>
