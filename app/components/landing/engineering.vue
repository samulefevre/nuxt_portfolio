<script setup lang="ts">
const products = [
  { title: 'Applications SaaS', description: 'Comptes, équipes, rôles, abonnements, paiements et automatisations réunis dans un produit cohérent.', glyph: '◇' },
  { title: 'Applications métier', description: 'Interfaces complexes, règles métier, tableaux de bord, API et intégrations avec vos outils.', glyph: '▤' },
  { title: 'Plateformes web', description: 'Des expériences rapides et accessibles, du rendu serveur aux services cloud.', glyph: '⌘' },
]
const tags = ['Nuxt', 'TypeScript', 'NuxtHub', 'Cloudflare']
</script>

<template>
  <UPageSection
    id="engineering"
    headline="Engineering"
    description="Des produits complets, pensés pour leurs utilisateurs et les équipes qui les font évoluer."
    orientation="horizontal"
    class="portfolio-section portfolio-engineering"
  >
    <template #title>
      Ce que je<br><em>construis.</em>
    </template>
    <div class="portfolio-engineering-list">
      <UPageFeature
        v-for="product in products"
        :key="product.title"
        :title="product.title"
        :description="product.description"
        orientation="horizontal"
        class="portfolio-engineering-feature"
      >
        <template #leading>
          <span aria-hidden="true">{{ product.glyph }}</span>
        </template>
        <template #title>
          <h3>{{ product.title }}</h3>
        </template>
      </UPageFeature>
    </div>

    <template #bottom>
      <UContainer class="portfolio-case-shell">
        <UCard
          variant="soft"
          class="portfolio-case"
          :ui="{ header: 'p-0 sm:p-0', body: 'p-0 sm:p-0' }"
        >
          <template #header>
            <span class="portfolio-case-label"><span class="portfolio-status-dot" />EN COURS · ÉTUDE DE CAS</span>
          </template>
          <h3>Architecture SaaS modulaire</h3>
          <p>Un socle Nuxt conçu pour générer des applications dont le code reste entre les mains du développeur. Le travail porte sur les frontières métier, l’authentification, les données, les paiements et le déploiement sur plusieurs fournisseurs.</p>
          <div class="portfolio-case-tags">
            <UBadge
              v-for="tag in tags"
              :key="tag"
              color="neutral"
              variant="outline"
            >
              {{ tag }}
            </UBadge>
          </div>
        </UCard>
      </UContainer>
    </template>
  </UPageSection>
</template>
