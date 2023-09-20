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
    <section class="flex flex-col space-y-4 justify-center items-center">
        <h1>Contact</h1>
        <div class="w-full text-center">
            <div
                class="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 h-40 justify-between max-w-3xl p-6 mx-auto">
                <div class="flex flex-col justify-center items-center space-y-6">
                    <h2>Me contacter</h2>
                    <div>samuel.lefevr@gmail.com</div>
                </div>
                <div class="flex flex-col justify-center items-center space-y-6">
                    <h2>Où me trouver ?</h2>
                    <CommonsSocialIcons class="block" />
                </div>
            </div>
        </div>
    </section>
</template>

<style>
h2 {
    @apply font-bold text-3xl text-center tracking-tight text-primary-400;
}
</style>