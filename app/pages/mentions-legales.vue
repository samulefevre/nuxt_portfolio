<script setup lang="ts">
useSeoMeta({
  title: 'Mentions légales — Samuel Lefèvre',
  robots: 'noindex, follow',
  description: 'Informations légales relatives au portfolio professionnel de Samuel Lefèvre.',
})
</script>

<template>
  <UPage>
    <UPageHero
      class="portfolio-legal-hero"
      title="Mentions légales"
      description="Informations relatives à l’édition et à l’hébergement de ce site."
      :ui="{ container: 'py-16 sm:py-20 lg:py-24', title: 'font-display tracking-tight' }"
    >
      <template #headline>
        <UBadge
          color="primary"
          variant="soft"
          class="font-mono"
        >
          INFORMATIONS LÉGALES
        </UBadge>
      </template>
    </UPageHero>

    <UPageSection
      title="Éditeur du site"
      orientation="horizontal"
      class="portfolio-legal-section"
      :ui="{ container: 'py-12 sm:py-16 lg:py-20', title: 'font-display' }"
    >
      <UPageCard
        variant="naked"
        class="portfolio-legal-card"
      >
        <dl class="grid gap-x-6 gap-y-5 sm:grid-cols-[10rem_1fr]">
          <dt class="font-mono text-xs uppercase text-primary">
            Identité
          </dt>
          <dd class="text-muted">
            Samuel LEFEVRE EI — Entrepreneur individuel
          </dd>
          <dt class="font-mono text-xs uppercase text-primary">
            Immatriculation
          </dt>
          <dd class="text-muted">
            RCS Saint-Quentin · SIREN 853 383 883
          </dd>
          <dt class="font-mono text-xs uppercase text-primary">
            Adresse
          </dt>
          <dd class="text-muted">
            10 place Jacques Prévert, appartement 24, résidence Balzac, 02000 Laon, France
          </dd>
          <dt class="font-mono text-xs uppercase text-primary">
            Téléphone
          </dt>
          <dd>
            <ULink
              to="tel:+33622925141"
              class="text-primary underline underline-offset-4"
            >06 22 92 51 41</ULink>
          </dd>
          <dt class="font-mono text-xs uppercase text-primary">
            Courriel
          </dt>
          <dd>
            <ULink
              to="mailto:samuel.lefevr@gmail.com"
              class="text-primary underline underline-offset-4"
            >samuel.lefevr@gmail.com</ULink>
          </dd>
        </dl>
      </UPageCard>
    </UPageSection>

    <UPageSection
      title="Hébergement"
      orientation="horizontal"
      class="portfolio-legal-section"
      :ui="{ container: 'py-12 sm:py-16 lg:py-20', title: 'font-display' }"
    >
      <UPageCard
        variant="naked"
        class="portfolio-legal-card"
      >
        <dl class="grid gap-x-6 gap-y-5 sm:grid-cols-[10rem_1fr]">
          <dt class="font-mono text-xs uppercase text-primary">
            Société
          </dt>
          <dd class="text-muted">
            Cloudflare, Inc.
          </dd>
          <dt class="font-mono text-xs uppercase text-primary">
            Adresse
          </dt>
          <dd class="text-muted">
            101 Townsend Street, San Francisco, California 94107, United States
          </dd>
          <dt class="font-mono text-xs uppercase text-primary">
            Contact
          </dt>
          <dd class="flex flex-wrap gap-2">
            <ULink
              to="tel:+18889935273"
              class="text-primary underline underline-offset-4"
            >+1 888 993 5273</ULink>
            <span aria-hidden="true">·</span>
            <ULink
              to="https://www.cloudflare.com/"
              target="_blank"
              class="text-primary underline underline-offset-4"
            >cloudflare.com ↗</ULink>
          </dd>
        </dl>
      </UPageCard>
    </UPageSection>

    <UPageSection
      title="Contenus du site"
      orientation="horizontal"
      class="portfolio-legal-section"
      :ui="{ container: 'py-12 sm:py-16 lg:py-20', title: 'font-display' }"
    >
      <UPageCard
        variant="naked"
        class="portfolio-legal-card"
      >
        <p class="leading-relaxed text-muted">
          Les textes, éléments graphiques et autres contenus originaux publiés sur ce site sont la propriété de Samuel Lefèvre, sauf mention contraire. Toute reproduction ou réutilisation nécessite une autorisation préalable.
        </p>
      </UPageCard>
    </UPageSection>

    <UPageSection
      title="Données personnelles"
      orientation="horizontal"
      class="portfolio-legal-section"
      :ui="{ container: 'py-12 sm:py-16 lg:py-20', title: 'font-display' }"
    >
      <UPageCard
        variant="naked"
        class="portfolio-legal-card portfolio-legal-prose"
      >
        <p class="leading-relaxed text-muted">
          Ce site ne comporte pas de formulaire de contact et n’utilise pas d’outil de mesure d’audience ni de traceurs publicitaires. Les polices de caractères sont hébergées avec le site.
        </p>
        <p class="leading-relaxed text-muted">
          Si vous prenez contact par courriel, les informations que vous communiquez sont utilisées pour répondre à votre demande et suivre nos échanges. Vous pouvez demander l’accès, la rectification ou l’effacement des données vous concernant en écrivant à <ULink
            to="mailto:samuel.lefevr@gmail.com"
            class="text-primary underline underline-offset-4"
          >samuel.lefevr@gmail.com</ULink>.
        </p>
      </UPageCard>
    </UPageSection>
  </UPage>
</template>
