<script setup lang="ts">
const { data: portfolio } = useFetch('/api/portfolio')
</script>

<template>
    <UContainer>
        <h1>Portfolio</h1>
        <div class="flex flex-col gap-4 w-full">
            <UCard v-for="project in portfolio" :ui="{
                background: ' dark:bg-gray-800',
                ring: 'dark:ring-gray-700'
            }">
                <div class="flex flex-col sm:flex-row gap-8 ">
                    <div class="flex-none">
                        <NuxtImg :src="project.image" class="object-cover
                        object-center rounded-lg h-96 sm:h-44 w-full sm:w-44" />
                    </div>
                    <div class="flex flex-col justify-center w-full">
                        <a :href="project.github" target="_blank"
                            class="flex items-center space-x-2 text-primary-500 font-bold text-lg sm:text-3xl">
                            <span>{{ project.name }}</span>
                            <CommonsExternalLink />
                        </a>
                        <p class="mb-1 sm:my-4">{{ project.description }}</p>
                        <div class="flex flex-row text-primary-500 font-semibold">
                            <div v-for="tag in project.tags">{{ tag }}</div>
                        </div>
                    </div>
                </div>
            </UCard>
        </div>
    </UContainer>
</template>
