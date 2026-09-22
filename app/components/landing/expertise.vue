<script setup lang="ts">
const areas = [
  { title: 'Architecture web & SaaS', description: 'Des applications Nuxt structurées pour évoluer : modules métier, API, authentification et gestion des données.', stack: 'Nuxt · TypeScript · Nitro · Architecture modulaire' },
  { title: 'Backend & data', description: 'Des modèles métier et des services fiables pour les données, les paiements et les traitements asynchrones.', stack: 'Node.js · PostgreSQL · Drizzle · Better Auth' },
  { title: 'Cloud & delivery', description: 'Des applications prêtes à être testées, déployées et maintenues sur des infrastructures modernes.', stack: 'Cloudflare Workers · NuxtHub · CI/CD' },
  { title: 'Applications mobiles', description: 'Des expériences multiplateformes avec une séparation claire entre interface, données et logique métier.', stack: 'Flutter · Dart' },
]
</script>

<template>
  <section
    id="expertise"
    class="section shell"
  >
    <div class="section-heading">
      <p class="eyebrow">
        EXPERTISE
      </p>
      <h2>De l’idée au produit,<br><em>avec les bonnes fondations.</em></h2>
      <p>J’interviens là où les choix techniques ont un impact durable sur le produit.</p>
    </div>
    <div class="expertise-grid">
      <article
        v-for="area in areas"
        :key="area.title"
        class="expertise-item"
      >
        <span
          class="item-glyph"
          aria-hidden="true"
        >↗</span>
        <h3>{{ area.title }}</h3>
        <p>{{ area.description }}</p>
        <span class="item-stack">{{ area.stack }}</span>
      </article>
    </div>
  </section>
</template>
