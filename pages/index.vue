<script setup lang="ts">
useHead({
    title: 'Portfolio Samuel LEFEVRE',
    meta: [
        {
            name: 'description',
            content: 'Portfolio Samuel LEFEVRE, développeur web et mobile.',
        },
    ],
});
</script>

<template>
    <UContainer class="text-center flex flex-col min-h-full space-y-4 items-center justify-center">
        <p class="text-primary-400 text-xl sm:text-2xl">Bonjour,</p>
        <h2 class="text-2xl sm:text-5xl">Samuel LEFEVRE</h2>
        <h3 class="text-gray-700 dark:text-white text-3xl sm:text-6xl">Développeur web et mobile</h3>
        <h3 class="text-gray-700 dark:text-white text-1xl sm:text-2xl">(Nuxt.js, Node.js, Flutter)</h3>

        <div class="py-8">
            <nuxt-link to="/about"
                class="block p-4 border-2 text-primary-400 border-primary-400 rounded-md w-52 uppercase">About</nuxt-link>
        </div>
        <div>
            <CommonsSocialIcons class="block mt-20 text-gray-700 dark:text-white" />
        </div>
    </UContainer>
</template>

