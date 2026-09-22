<script setup lang="ts">
const principles = [
  { title: 'Le métier d’abord', text: 'Les règles du produit gardent leur place, indépendamment des frameworks et des fournisseurs.' },
  { title: 'Des frontières explicites', text: 'Chaque module a une responsabilité claire et des interfaces compréhensibles.' },
  { title: 'Livrer avec confiance', text: 'Tests, intégration continue et déploiement font partie de la conception.' },
]
</script>

<template>
  <section
    id="architecture"
    class="section shell architecture-section"
  >
    <div class="section-heading">
      <p class="eyebrow">
        APPROCHE
      </p>
      <h2>Une architecture qui<br><em>sert le produit.</em></h2>
      <p>Je sépare le métier de l’infrastructure pour garder une base de code testable, adaptable et agréable à faire évoluer.</p>
    </div>
    <div class="architecture-layout">
      <div
        class="architecture-map"
        aria-label="Organisation du logiciel en quatre couches"
      >
        <div><span>01 / INTERFACE</span><strong>Une expérience claire</strong><small>Nuxt · Flutter</small></div>
        <div><span>02 / APPLICATION</span><strong>Des cas d’usage lisibles</strong><small>API · orchestration</small></div>
        <div><span>03 / DOMAINE</span><strong>Le métier au centre</strong><small>Règles · contrats</small></div>
        <div><span>04 / INFRASTRUCTURE</span><strong>Des services remplaçables</strong><small>Data · paiements · cloud</small></div>
      </div>
      <div class="principles-list">
        <article
          v-for="principle in principles"
          :key="principle.title"
        >
          <h3>{{ principle.title }}</h3>
          <p>{{ principle.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
