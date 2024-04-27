<script setup lang="ts">
const { iconSize } = withDefaults(defineProps<{
  iconSize?: 'sm' | 'xl'
}>(), {
  iconSize: 'xl',
})
</script>

<template>
  <div class="flex flex-row space-x-6 items-center">
    <UButton
      :size="iconSize"
      icon="i-simple-icons-github"
      variant="ghost"
      to="https://github.com/samulefevre"
      title="Github Logo"
      target="_blank"
    />

    <UButton
      :size="iconSize"
      icon="i-simple-icons-x"
      variant="ghost"
      to="https://twitter.com/samuel_lefevr"
      title="Twitter logo"
      target="_blank"
    />

    <UButton
      :size="iconSize"
      icon="i-simple-icons-github"
      variant="ghost"
      to="https://www.linkedin.com/in/samuel-lefevre-591446161/"
      title="Linkedin logo"
      target="_blank"
    />
  </div>
</template>
