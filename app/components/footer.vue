<template>
  <UFooter class="portfolio-footer">
    <template #left>
      <p>© {{ new Date().getFullYear() }} Samuel Lefèvre</p>
    </template>

    <p>Conçu et développé avec Nuxt.</p>

    <template #right>
      <UButton
        to="/mentions-legales"
        label="Mentions légales"
        color="neutral"
        variant="link"
        size="sm"
      />
      <UButton
        to="/#top"
        label="Retour en haut"
        trailing-icon="i-lucide-arrow-up"
        color="neutral"
        variant="link"
        size="sm"
      />
    </template>
  </UFooter>
</template>
