<template>
    <header class="p-4 max-w-lg mx-auto text-right">
        <nav class="flex flex-row space-x-4 justify-end text-white">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/about">A propos</nuxt-link>
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
        </nav>
    </header>
</template>

<style>
nuxt-link {
    @apply cursor-pointer;
}

.router-link-active {
    @apply text-blue-500;
}
</style>