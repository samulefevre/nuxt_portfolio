<script setup lang="ts">
const layers = [
  { label: '01 / INTERFACE', title: 'Une expérience claire', tools: 'Nuxt · Flutter' },
  { label: '02 / APPLICATION', title: 'Des cas d’usage lisibles', tools: 'API · orchestration' },
  { label: '03 / DOMAINE', title: 'Le métier au centre', tools: 'Règles · contrats' },
  { label: '04 / INFRASTRUCTURE', title: 'Des services remplaçables', tools: 'Data · paiements · cloud' },
]
const principles = [
  { title: 'Le métier d’abord', description: 'Les règles du produit gardent leur place, indépendamment des frameworks et des fournisseurs.' },
  { title: 'Des frontières explicites', description: 'Chaque module a une responsabilité claire et des interfaces compréhensibles.' },
  { title: 'Livrer avec confiance', description: 'Tests, intégration continue et déploiement font partie de la conception.' },
]
</script>

<template>
  <UPageSection
    id="architecture"
    headline="Approche"
    description="Je sépare le métier de l’infrastructure pour garder une base de code testable, adaptable et agréable à faire évoluer."
    class="portfolio-section portfolio-architecture"
  >
    <template #title>
      Une architecture qui<br><em>sert le produit.</em>
    </template>
    <UPageGrid class="portfolio-architecture-layout">
      <UCard
        variant="solid"
        class="portfolio-architecture-map"
        aria-label="Organisation du logiciel en quatre couches"
        :ui="{ body: 'p-0 sm:p-0' }"
      >
        <div
          v-for="layer in layers"
          :key="layer.label"
          class="portfolio-architecture-layer"
        >
          <span>{{ layer.label }}</span><strong>{{ layer.title }}</strong><small>{{ layer.tools }}</small>
        </div>
      </UCard>
      <UCard
        variant="soft"
        class="portfolio-principles"
        :ui="{ body: 'p-0 sm:p-0' }"
      >
        <UPageFeature
          v-for="principle in principles"
          :key="principle.title"
          :title="principle.title"
          :description="principle.description"
          class="portfolio-principle"
        >
          <template #title>
            <h3>{{ principle.title }}</h3>
          </template>
        </UPageFeature>
      </UCard>
    </UPageGrid>
  </UPageSection>
</template>
