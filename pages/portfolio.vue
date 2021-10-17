<template>
    <section class="h-full">
        <h1>Portfolio</h1>
        <div class="flex flex-col space-y-4">
            <div
                v-for="project in portfolio"
                class="flex flex-row bg-gray-900 border-black border-2 rounded-lg"
            >
                <div class="flex-none w-24 sm:w-48">
                    <img
                        :src="project.image"
                        class="object-cover w-24 h-32 sm:h-48 sm:w-48 rounded-l-lg border-r-2 border-black"
                    />
                </div>
                <div class="p-2 sm:p-4 flex flex-col justify-center">
                    <a
                        :href="project.github"
                        target="_blank"
                        class="flex items-center space-x-2 text-blue-500 font-bold text-lg sm:text-3xl"
                    >
                        <span>{{ project.name }}</span>
                        <CommonsExternalLink />
                    </a>
                    <p class="mb-1 sm:my-4">{{ project.description }}</p>
                    <div class="flex flex-row text-blue-500 font-semibold">
                        <div v-for="tag in project.tags">{{ tag }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import portfolio from '../datas/portfolio.json'
</script>