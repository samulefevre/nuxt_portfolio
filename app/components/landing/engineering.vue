<script setup lang="ts">
import { splitSectionUi } from '~/utils/portfolio-ui'

const products = [
  { title: 'Applications SaaS', description: 'Comptes, équipes, rôles, abonnements, paiements et automatisations réunis dans un produit cohérent.', glyph: '◇' },
  { title: 'Applications métier', description: 'Interfaces complexes, règles métier, tableaux de bord, API et intégrations avec vos outils.', glyph: '▤' },
  { title: 'Plateformes web', description: 'Des expériences rapides et accessibles, du rendu serveur aux services cloud.', glyph: '⌘' },
]
const tags = ['Nuxt', 'TypeScript', 'NuxtHub', 'Cloudflare']

const featureUi = {
  root: 'grid grid-cols-[3.1rem_1fr] gap-4 border-b border-default py-[1.7rem]',
  leading: 'p-0 text-[1.4rem] leading-none text-primary',
  title: 'mb-[.55rem] text-[1.22rem]',
  description: 'max-w-[430px] text-[.84rem]',
}

const caseUi = {
  root: 'grid grid-cols-[.85fr_1.15fr] gap-[10%] -mt-4 border-t border-default rounded-none bg-transparent px-8 pt-8 pb-10 shadow-none divide-y-0 max-[700px]:grid-cols-1 max-[700px]:gap-12 max-[700px]:px-4 max-[700px]:pt-6 max-[700px]:pb-8',
  header: 'p-0 sm:p-0',
  body: 'p-0 sm:p-0',
}
</script>

<template>
  <UPageSection
    id="engineering"
    headline="Engineering"
    description="Des produits complets, pensés pour leurs utilisateurs et les équipes qui les font évoluer."
    orientation="horizontal"
    class="portfolio-section portfolio-engineering"
    :ui="splitSectionUi"
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
        :ui="featureUi"
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
          :ui="caseUi"
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
              color="primary"
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
