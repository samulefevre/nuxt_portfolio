<template>
  <header class="site-header">
    <div class="shell header-inner">
      <NuxtLink
        class="wordmark"
        to="/"
        aria-label="Samuel Lefèvre, accueil"
      >SL<span>.</span></NuxtLink>
      <nav
        aria-label="Navigation principale"
        class="primary-nav"
      >
        <a href="/#expertise">Expertise</a>
        <a href="/#engineering">Engineering</a>
        <a href="/#about">À propos</a>
      </nav>
      <a
        class="header-contact"
        href="/#contact"
      >Me contacter <span aria-hidden="true">↗</span></a>
    </div>
  </header>
</template>
