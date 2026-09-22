<script setup lang="ts">
const steps = [
  { title: 'Comprendre', description: 'Le besoin et les règles métier' },
  { title: 'Concevoir', description: 'Des frontières claires' },
  { title: 'Développer', description: 'Une base testable et évolutive' },
  { title: 'Déployer', description: 'Automatiser et observer' },
]
</script>

<template>
  <UPageHero
    orientation="horizontal"
    class="portfolio-hero"
  >
    <template #headline>
      <span class="portfolio-eyebrow"><span class="portfolio-status-dot" />Samuel Lefèvre · Développeur full-stack TypeScript</span>
    </template>

    <template #title>
      Des logiciels pensés <em>pour durer.</em>
    </template>

    <template #description>
      Je conçois et développe des applications web robustes et maintenables, de l’architecture métier jusqu’au déploiement.
    </template>

    <template #footer>
      <div class="portfolio-hero-actions">
        <UButton
          to="/#contact"
          label="Parlons de votre projet"
          trailing-icon="i-lucide-arrow-up-right"
          color="neutral"
          variant="solid"
          class="portfolio-primary-button"
        />
        <UButton
          to="/#expertise"
          label="Explorer mon expertise"
          trailing-icon="i-lucide-arrow-down"
          color="neutral"
          variant="link"
          class="portfolio-text-button"
        />
      </div>
      <p class="portfolio-hero-stack">
        Nuxt <span>·</span> TypeScript <span>·</span> PostgreSQL <span>·</span> Cloudflare <span>·</span> Flutter
      </p>
    </template>

    <UCard
      variant="soft"
      class="portfolio-diagram blueprint-grid"
      aria-label="Du besoin métier à une application déployée"
      :ui="{ header: 'p-0 sm:p-0', body: 'p-0 sm:p-0', footer: 'p-0 sm:p-0' }"
    >
      <template #header>
        <div class="portfolio-diagram-header">
          <span class="portfolio-diagram-mark">//</span> UNE APPLICATION, DE BOUT EN BOUT <span class="portfolio-diagram-index">01—04</span>
        </div>
      </template>
      <template
        v-for="(step, index) in steps"
        :key="step.title"
      >
        <UCard
          variant="outline"
          class="portfolio-diagram-node"
          :class="{ 'portfolio-diagram-node-last': index === steps.length - 1 }"
          :ui="{ body: 'p-0 sm:p-0' }"
        >
          <span class="portfolio-node-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <div><strong>{{ step.title }}</strong><small>{{ step.description }}</small></div>
        </UCard>
        <div
          v-if="index < steps.length - 1"
          class="portfolio-diagram-connector"
          aria-hidden="true"
        />
      </template>
      <template #footer>
        <span class="portfolio-diagram-footer"><span class="portfolio-pulse-line" /> SOFTWARE ENGINEERING, PAS À PAS</span>
      </template>
    </UCard>
  </UPageHero>
</template>
