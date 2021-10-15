<template>
  <div class="h-screen w-screen">
    <div class="fixed w-full z-30 top-0">
      <NavHeader class=" text-green-500 h-24" />
    </div>  
    <div class="flex flex-col h-full max-w-7xl mx-auto pt-24">
      <slot class="w-full" />
      <footer class="block h-24">
     <!--  {{ new Date().getFullYear() }} -->
    </footer>
    </div>
    
  </div>
</template>

<style>
body {
  @apply bg-[#0F1624] text-white;
}
</style>