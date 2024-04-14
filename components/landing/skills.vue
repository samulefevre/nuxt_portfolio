<script setup lang="ts">
const modules = [{
  title: 'Nuxt',
  description: 'Mon framework principal est Nuxt.',
  icon: 'i-simple-icons-nuxtdotjs'
}, {
  title: 'Tailwind CSS',
  description: 'Je peux créer des interfaces utilisateur modernes avec Tailwind CSS',
  icon: 'i-simple-icons-tailwindcss'
}, {
  title: `Intégration de l'IA`,
  description: `Je peux intégrer des modèles d'IA dans vos applications.`,
  icon: 'i-tabler-brand-openai'
}, {
  title: `Flutter`,
  description: `Je peux créer des applications mobiles avec Flutter.`,
  icon: 'i-material-symbols-flutter'
}]
</script>

<template>
  <ULandingSection title="Compétences" id="skills">
    <UPageGrid>
      <UPageCard v-for="(module, index) in modules" :key="index" v-bind="module" target="_blank">
        <template #description>
          <span class="line-clamp-2">{{ module.description }}</span>
        </template>
      </UPageCard>
    </UPageGrid>
  </ULandingSection>
</template>
