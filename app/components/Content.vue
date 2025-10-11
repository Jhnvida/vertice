<template>
    <main class="pt-32 pb-24">
        <div class="container mx-auto px-6 lg:px-16">
            <h1
                class="text-sm font-light uppercase tracking-widest text-gray-600 mb-24"
            >
                Our Projects
            </h1>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <NuxtLink to="/" v-for="project in projects"
                    ><div class="group cursor-pointer relative overflow-hidden">
                        <div
                            class="relative aspect-[4/5] overflow-hidden bg-gray-600/20"
                        >
                            <NuxtImg
                                :src="project.image"
                                fit="cover"
                                placeholder
                                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                        <div
                            class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-8"
                        >
                            <div
                                class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out"
                            >
                                <h3
                                    class="text-2xl font-light tracking-tight text-white mb-2"
                                >
                                    {{ project.name }}
                                </h3>
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-light text-white/80">
                                        {{ project.city }}, {{ project.state }}
                                    </p>
                                    <Icon
                                        name="ic:baseline-arrow-forward"
                                        class="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </div></div
                ></NuxtLink>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
interface Project {
    id: number;
    name: string;
    city: string;
    state: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        name: "Hudson Tower",
        city: "New York",
        state: "New York",
        image: "",
    },
    {
        id: 2,
        name: "Pacific Heights",
        city: "San Francisco",
        state: "California",
        image: "",
    },
];
</script>
