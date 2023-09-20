<template>
    <UContainer class="flex justify-center">
        <section class="text-center flex flex-col space-y-4 items-center justify-center">
            <p class="text-white font-semibold text-xl sm:text-2xl">Bonjour,</p>
            <p class="text-2xl sm:text-5xl text-primary-400 font-bold tracking-tigh">Samuel LEFEVRE</p>
            <p class="text-gray-700 dark:text-white text-3xl sm:text-6xl font-extrabold tracking-tight">Développeur web et
                mobile</p>
            <p class="text-gray-700 dark:text-white text-1xl sm:text-2xl">(Nuxt.js, Node.js, Flutter)</p>

            <div class="pt-8">
                <NuxtLink to="/about"
                    class="block p-4 border-2 text-primary-400 border-primary-400 rounded-md w-52 uppercase tracking-widest">
                    About
                </NuxtLink>
            </div>

            <div>
                <CommonsSocialIcons class="block mt-20 text-gray-700 dark:text-white" />
            </div>
        </section>
    </UContainer>
</template>

