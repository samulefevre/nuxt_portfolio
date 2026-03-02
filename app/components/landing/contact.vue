<template>
  <UPageSection
    id="contact"
    title="Contact"
  >
    <UPageGrid v-motion-slide-visible-right>
      <UPageCard
        title="Contactez-moi"
        description="Vous avez un projet ou une question ? N'hésitez pas à me contacter."
        icon="i-material-symbols-android-contacts"
        class="w-full"
      >
        <template #description>
          <ULink
            to="mailto:samuel.lefevr@gmail.com"
            class="font-bold text-primary"
          >
            samuel.lefevr@gmail.com
          </ULink>
        </template>
      </UPageCard>

      <UPageCard
        title="Où me trouver ?"
        description="Retrouvez-moi sur les réseaux sociaux."
        icon="i-material-symbols-search-rounded"
        class="w-full"
      >
        <template #description>
          <socialIcons class="mt-4 h-12" />
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
