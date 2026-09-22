<template>
  <div
    id="top"
    class="site-frame"
  >
    <a
      class="skip-link"
      href="#main-content"
    >Aller au contenu</a>
    <Header />
    <main id="main-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>
