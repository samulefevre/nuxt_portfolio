<script setup lang="ts">
useSeoMeta({
  title: 'Mentions légales — Samuel Lefèvre',
  robots: 'noindex, follow',
  description: 'Informations légales relatives au portfolio professionnel de Samuel Lefèvre.',
})

const heroUi = {
  container: 'portfolio-legal-hero-container block lg:block',
  wrapper: 'max-w-[760px] text-left',
  headline: 'mb-8 justify-start',
  title: 'm-0 text-left text-[clamp(3.5rem,6vw,5.5rem)] sm:text-[clamp(3.5rem,6vw,5.5rem)] leading-[1.1]',
  description: 'mt-6 max-w-[760px] text-left text-[1.05rem]',
}

const sectionUi = {
  root: 'border-t border-default',
  container: 'grid grid-cols-[260px_1fr] lg:grid-cols-[260px_1fr] items-start gap-[6%] py-10 sm:py-10 lg:py-10 max-[700px]:grid-cols-1 max-[700px]:gap-6 max-[700px]:py-10',
  header: 'text-left',
  title: 'm-0 text-left text-[1.22rem] sm:text-[1.22rem] lg:text-[1.22rem] tracking-[-.04em]',
}

const cardUi = {
  root: 'block bg-transparent shadow-none',
  container: 'block p-0',
}
</script>

<template>
  <UPage>
    <UPageHero
      title="Mentions légales"
      description="Informations relatives à l’édition et à l’hébergement de ce site."
      :ui="heroUi"
    >
      <template #headline>
        <UBadge
          color="primary"
          variant="soft"
        >
          INFORMATIONS LÉGALES
        </UBadge>
      </template>
    </UPageHero>

    <UPageSection
      title="Éditeur du site"
      orientation="horizontal"
      :ui="sectionUi"
    >
      <UPageCard
        variant="naked"
        class="portfolio-legal-card"
        :ui="cardUi"
      >
        <dl>
          <dt>
            Identité
          </dt>
          <dd>
            Samuel LEFEVRE EI — Entrepreneur individuel
          </dd>
          <dt>
            Immatriculation
          </dt>
          <dd>
            RCS Saint-Quentin · SIREN 853 383 883
          </dd>
          <dt>
            Adresse
          </dt>
          <dd>
            10 place Jacques Prévert, appartement 24, résidence Balzac, 02000 Laon, France
          </dd>
          <dt>
            Téléphone
          </dt>
          <dd>
            <ULink
              to="tel:+33622925141"
            >06 22 92 51 41</ULink>
          </dd>
          <dt>
            Courriel
          </dt>
          <dd>
            <ULink
              to="mailto:samuel.lefevr@gmail.com"
            >samuel.lefevr@gmail.com</ULink>
          </dd>
        </dl>
      </UPageCard>
    </UPageSection>

    <UPageSection
      title="Hébergement"
      orientation="horizontal"
      :ui="sectionUi"
    >
      <UPageCard
        variant="naked"
        class="portfolio-legal-card"
        :ui="cardUi"
      >
        <dl>
          <dt>
            Société
          </dt>
          <dd>
            Cloudflare, Inc.
          </dd>
          <dt>
            Adresse
          </dt>
          <dd>
            101 Townsend Street, San Francisco, California 94107, United States
          </dd>
          <dt>
            Contact
          </dt>
          <dd class="flex flex-wrap gap-2">
            <ULink
              to="tel:+18889935273"
            >+1 888 993 5273</ULink>
            <span aria-hidden="true">·</span>
            <ULink
              to="https://www.cloudflare.com/"
              target="_blank"
            >cloudflare.com ↗</ULink>
          </dd>
        </dl>
      </UPageCard>
    </UPageSection>

    <UPageSection
      title="Contenus du site"
      orientation="horizontal"
      :ui="sectionUi"
    >
      <UPageCard
        variant="naked"
        class="portfolio-legal-card"
        :ui="cardUi"
      >
        <p>
          Les textes, éléments graphiques et autres contenus originaux publiés sur ce site sont la propriété de Samuel Lefèvre, sauf mention contraire. Toute reproduction ou réutilisation nécessite une autorisation préalable.
        </p>
      </UPageCard>
    </UPageSection>

    <UPageSection
      title="Données personnelles"
      orientation="horizontal"
      :ui="sectionUi"
    >
      <UPageCard
        variant="naked"
        class="portfolio-legal-card portfolio-legal-prose"
        :ui="cardUi"
      >
        <p>
          Ce site ne comporte pas de formulaire de contact et n’utilise pas d’outil de mesure d’audience ni de traceurs publicitaires. Les polices de caractères sont hébergées avec le site.
        </p>
        <p>
          Si vous prenez contact par courriel, les informations que vous communiquez sont utilisées pour répondre à votre demande et suivre nos échanges. Vous pouvez demander l’accès, la rectification ou l’effacement des données vous concernant en écrivant à <ULink
            to="mailto:samuel.lefevr@gmail.com"
          >samuel.lefevr@gmail.com</ULink>.
        </p>
      </UPageCard>
    </UPageSection>
  </UPage>
</template>
