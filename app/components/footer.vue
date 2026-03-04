<template>
  <UFooter class="border-t border-default">
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>
    <template #right>
      <socialIcons
        icon-size="sm"
        class="py-0"
      />
    </template>
  </UFooter>
</template>
