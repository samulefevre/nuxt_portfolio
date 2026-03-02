<script setup lang="ts">
import portfolio from '@/datas/portfolio.json'
</script>

<template>
  <UPageSection
    id="portfolio"
    title="Portfolio"
    description="Sélection de projets"
  >
    <UPageGrid>
      <UPageCard
        v-for="p of portfolio"
        :key="p.name"
        v-motion-slide-visible-bottom
        :title="p.name"
        :description="p.description"
        icon="i-heroicons-swatch"
        orientation="horizontal"
      >
        <NuxtImg
          :src="p.image"
          class="w-full h-36 rounded-md object-cover"
        />
        <template #footer>
          <UBadge
            v-for="t of p.tags"
            :key="t"
            :color="t.startsWith('Nuxt') ? 'primary' : 'neutral'"
            class="mr-2 my-2"
          >
            {{ t }}
          </UBadge>
          <UButton
            :to="p.github"
            target="_blank"
            color="primary"
            variant="ghost"
            trailing-icon="i-heroicons-arrow-up-right-20-solid"
          >
            Voir le projet
          </UButton>
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
