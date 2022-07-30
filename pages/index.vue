<template>
    <section
        class="text-blue-500 text-center flex flex-col h-full space-y-4 items-center justify-center"
    >
        <p class="text-xl sm:text-2xl">Bonjour,</p>
        <h2 class="text-2xl sm:text-5xl">Samuel LEFEVRE</h2>
        <h3 class="text-white text-3xl sm:text-6xl">Développeur web et mobile</h3>
        <h3 class="text-white text-1xl sm:text-2xl">(Nuxt.js, Node.js, Flutter)</h3>

        <div class="py-8">
            <nuxt-link to="/about" class="block p-4 border-2 border-blue-500 rounded-md w-52">ABOUT</nuxt-link>
        </div>

        

        <div>
            <CommonsSocialIcons class="block mt-20 text-white" />
        </div>
    </section>
</template>

