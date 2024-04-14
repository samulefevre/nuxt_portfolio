<script setup lang="ts">
const { data: portfolio } = useFetch('/api/portfolio')
</script>

<template>
  <ULandingSection title="Portfolio" description="Sélection de projets" id="portfolio">
    <UPageGrid>
      <ULandingCard :title="p.name" :description="p.description" icon="i-heroicons-swatch" color="primary"
        orientation="horizontal" v-for="p of portfolio" :key="p.name">
        <img :src="p.image" class="w-full h-36 rounded-md object-cover" />

      </ULandingCard>

    </UPageGrid>
  </ULandingSection>
</template>
