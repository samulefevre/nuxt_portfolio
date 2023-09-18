<script setup lang="ts">
const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'A propos',
        path: '/about',
    },
    {
        name: 'Portfolio',
        path: '/portfolio',
    },
    {
        name: 'Contact',
        path: '/contact',
    },]

</script>
<template>
    <header class="sticky w-full z-30 top-0 h-16 translate-all backdrop:blur-md bg-gray-900/75 border-b-2 border-gray-800">
        <UContainer class="h-full">
            <nav class="flex flex-row gap-x-10 items-center text-lg h-full">
                <ULink v-for="link in links" :key="link.name" :to="link.path"
                    active-class="text-primary-500 bg-gray-800 px-4 py-1 rounded-lg" class="px-4">{{
                        link.name }}
                </ULink>
            </nav>
        </UContainer>
    </header>
</template>
