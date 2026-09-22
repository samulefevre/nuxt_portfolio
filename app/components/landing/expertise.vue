<script setup lang="ts">
const areas = [
  { title: 'Architecture web & SaaS', description: 'Des applications Nuxt structurées pour évoluer : modules métier, API, authentification et gestion des données.', stack: 'Nuxt · TypeScript · Nitro · Architecture modulaire' },
  { title: 'Backend & data', description: 'Des modèles métier et des services fiables pour les données, les paiements et les traitements asynchrones.', stack: 'Node.js · PostgreSQL · Drizzle · Better Auth' },
  { title: 'Cloud & delivery', description: 'Des applications prêtes à être testées, déployées et maintenues sur des infrastructures modernes.', stack: 'Cloudflare Workers · NuxtHub · CI/CD' },
  { title: 'Applications mobiles', description: 'Des expériences multiplateformes avec une séparation claire entre interface, données et logique métier.', stack: 'Flutter · Dart' },
]
</script>

<template>
  <UPageSection
    id="expertise"
    headline="Expertise"
    description="J’interviens là où les choix techniques ont un impact durable sur le produit."
    class="portfolio-section portfolio-expertise"
  >
    <template #title>
      De l’idée au produit,<br><em>avec les bonnes fondations.</em>
    </template>
    <UPageGrid class="portfolio-expertise-grid">
      <UPageCard
        v-for="(area, index) in areas"
        :key="area.title"
        :title="area.title"
        :description="area.description"
        variant="naked"
        class="portfolio-expertise-card"
      >
        <template #leading>
          <span aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
        </template>
        <template #title>
          <h3>{{ area.title }}</h3>
        </template>
        <template #footer>
          {{ area.stack }}
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
