<script setup lang="ts">
const { data: portfolio } = useFetch('/api/portfolio')
</script>

<template>
  <ULandingSection
    id="portfolio"
    title="Portfolio"
    description="Sélection de projets"
  >
    <UPageGrid>
      <ULandingCard
        v-for="p of portfolio"
        :key="p.name"
        v-motion-slide-visible-bottom
        :title="p.name"
        :description="p.description"
        icon="i-heroicons-swatch"
        color="primary"
        orientation="horizontal"
      >
        <NuxtImg
          :src="p.image"
          class="w-full h-36 rounded-md object-cover"
        />
        <template #container>
          <UBadge
            v-for="t of p.tags"
            :key="t"
            :color="t === 'Nuxt.js' ? 'blue' : 'gray'"
            class="mr-2 my-2"
          >
            {{ t }}
          </UBadge>
          <UButton
            :to="p.github"
            target="_blank"
            color="primary"
            variant="ghost"
            icon="i-heroicons-arrow-up-right-20-solid"
            :trailing="true"
          >
            Voir le projet
          </UButton>
        </template>
      </ULandingCard>
    </UPageGrid>
  </ULandingSection>
</template>
