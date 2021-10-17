<template>
  <div class="h-screen w-screen">
    <header class="fixed w-full z-30 top-0 bg-[#0F1624]">
      <NavHeader class="text-green-500" />
    </header>
    <main class="flex flex-col h-full max-w-7xl mx-auto pt-24 px-4">
      <slot class="w-full" />
      <footer class="block h-24">
        <!--  {{ new Date().getFullYear() }} -->
      </footer>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  head: {
    title: 'Portfolio Samuel LEFEVRE',
    meta: {
      name: 'description',
      content: 'Portfolio Samuel LEFEVRE, développeur web et mobile.'
    }
  }
}
</script>

<style>
body {
  @apply bg-[#0F1624] text-white;
}
</style>