<template>
  <ULandingSection title="Contact" id="contact">
    <UPageGrid>
      <UPageCard title="Contactez-moi" description="Vous avez un projet ou une question ? N'hésitez pas à me contacter."
        icon="i-material-symbols-android-contacts" color="primary" class="w-full">
        <template #description>
          <ULink href="mailto:samuel.lefevr@gmail.com" color="primary" class="font-bold">
            samuel.lefevr@gmail.com
          </ULink>
        </template>
      </UPageCard>

      <UPageCard title="Où me trouver ?" description="Retrouvez-moi sur les réseaux sociaux."
        icon="i-material-symbols-search-rounded" color="primary" class="w-full">
        <template #description>
          <CommonsSocialIcons class="mt-4 h-12" />
        </template>
      </UPageCard>
    </UPageGrid>
  </ULandingSection>
</template>
