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
    }
]

const isOpen = ref(false)

</script>
<template>
    <header class="sticky w-full z-30 top-0 sm:h-16 border-b border-b-gray-700 py-4 bg-gray-900">
        <UContainer class="h-full relative">
            <nav class="flex flex-col sm:flex-row gap-y-2 sm:gap-x-10 items-start sm:items-center text-lg h-full relavive ">
                <div class="text-center text-xl text-primary-500 font-bold leading-tight w-full sm:hidden">
                    Samuel LEFEVRE
                </div>

                <ULink v-for="link in links" :key="link.name" :to="link.path"
                    active-class="dark:bg-gray-900 text-gray-500 dark:text-primary-500 px-4 py-1 rounded-lg"
                    class="px-4 my-2 sm:block" :class="{
                        'hidden': !isOpen,
                        'block': isOpen
                    }">{{
    link.name }}
                </ULink>

                <UIcon v-if="!isOpen" name="i-ic-baseline-menu" class="absolute right-4 top-1 sm:hidden"
                    @click="isOpen = !isOpen" />
                <UIcon v-if="isOpen" name="i-ic-baseline-close" class="absolute right-4 top-1 sm:hidden"
                    @click="isOpen = !isOpen" />
            </nav>

        </UContainer>
    </header>
</template>
