<script setup lang="ts">
const groups = [
  { name: 'Frontend', tools: 'Nuxt · Vue · TypeScript · Tailwind CSS · Nuxt UI' },
  { name: 'Backend & data', tools: 'Nitro · Node.js · PostgreSQL · Drizzle · Better Auth' },
  { name: 'Cloud & delivery', tools: 'NuxtHub · Cloudflare Workers · Docker · CI/CD' },
  { name: 'Mobile', tools: 'Flutter · Dart' },
]
</script>

<template>
  <section class="section stack-section">
    <div class="shell stack-inner">
      <div class="section-heading">
        <p class="eyebrow">
          STACK
        </p><h2>Les outils au service<br><em>des enjeux.</em></h2>
      </div>
      <dl class="stack-list">
        <div
          v-for="group in groups"
          :key="group.name"
        >
          <dt>{{ group.name }}</dt><dd>{{ group.tools }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
