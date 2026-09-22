<template>
  <div
    id="top"
    class="min-h-screen"
  >
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:z-60 focus:m-4 focus:rounded-md focus:bg-default focus:p-3 focus:ring focus:ring-primary"
    >Aller au contenu</a>
    <Header />
    <UMain id="main-content">
      <slot />
    </UMain>
    <Footer />
  </div>
</template>
