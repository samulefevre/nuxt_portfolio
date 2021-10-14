<template>
  <div>
    <NavHeader class="text-green-500" />
    <h1 class="text-red-500">Hello {{ new Date().getFullYear() }}</h1>
  </div>
</template>

<script lang="ts" setup>
import './assets/tailwind.css'
import NavHeader from './components/nav/navHeader.vue';
</script>
