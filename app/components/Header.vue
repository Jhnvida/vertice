<template>
    <header
        class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
    >
        <nav
            class="container mx-auto px-6 lg:px-16 py-6 flex items-center justify-between"
        >
            <div class="text-xl font-light tracking-tight">Vértice</div>
            <div class="flex items-center gap-8">
                <NuxtLink
                    to="/"
                    class="text-sm font-light hover:text-gray-600 transition-colors"
                >
                    Projects
                </NuxtLink>

                <NuxtLink
                    to="/"
                    class="text-sm font-light hover:text-gray-600 transition-colors"
                >
                    Services
                </NuxtLink>

                <NuxtLink
                    to="/"
                    class="text-sm font-light hover:text-gray-600 transition-colors"
                >
                    About Us
                </NuxtLink>

                <NuxtLink
                    to="/"
                    class="text-sm font-light hover:text-gray-600 transition-colors"
                >
                    Blog
                </NuxtLink>
            </div>
        </nav>
    </header>
</template>
