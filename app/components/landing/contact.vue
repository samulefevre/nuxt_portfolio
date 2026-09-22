<template>
  <UPageCTA
    id="contact"
    orientation="horizontal"
    variant="naked"
    class="portfolio-contact"
  >
    <template #header>
      <p class="portfolio-eyebrow">
        CONTACT / COLLABORATION
      </p>
      <h2>Vous avez un projet<br><em>à construire&nbsp;?</em></h2>
      <p>Échangeons sur vos besoins, vos contraintes et la meilleure façon d’avancer.</p>
    </template>
    <div class="portfolio-contact-actions">
      <UButton
        to="mailto:samuel.lefevr@gmail.com"
        label="Discuter de votre projet"
        trailing-icon="i-lucide-arrow-up-right"
        color="neutral"
        variant="link"
        class="portfolio-contact-email"
      />
      <div
        class="portfolio-contact-socials"
        aria-label="Profils professionnels"
      >
        <UButton
          to="https://www.malt.fr/profile/samuellefevre"
          target="_blank"
          label="Malt"
          trailing-icon="i-lucide-arrow-up-right"
          color="neutral"
          variant="link"
        />
        <UButton
          to="https://github.com/samulefevre"
          target="_blank"
          label="GitHub"
          trailing-icon="i-lucide-arrow-up-right"
          color="neutral"
          variant="link"
        />
        <UButton
          to="https://www.linkedin.com/in/samuel-lefevre"
          target="_blank"
          label="LinkedIn"
          trailing-icon="i-lucide-arrow-up-right"
          color="neutral"
          variant="link"
        />
      </div>
    </div>
  </UPageCTA>
</template>
