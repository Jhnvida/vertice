<template>
    <section v-if="loading" class="w-full grid grid-cols-3 auto-rows-[280px] gap-1">
        <div class="col-span-2 row-span-2 bg-gray-200 animate-pulse"></div>
        <div class="col-span-1 row-span-1 bg-gray-200 animate-pulse"></div>
        <div class="col-span-1 row-span-1 bg-gray-200 animate-pulse"></div>
    </section>

    <section v-else class="w-full grid grid-cols-3 auto-rows-[280px] gap-1">
        <div
            v-for="(project, index) in loaded"
            class="group relative overflow-hidden"
            :class="index == 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'"
            :key="index"
        >
            <img
                :src="project.image"
                :alt="project.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />

            <div
                class="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 ease-in-out text-white/90 text-base font-semibold"
            >
                {{ String(index + 1).padStart(2, "0") }}
            </div>

            <div
                class="absolute bottom-0 left-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-gradient-to-t from-black/80 to-transparent"
            >
                <h3 class="text-white text-2xl font-bold mb-1">{{ project.name }}</h3>
                <p class="text-white/90">{{ project.city }}, {{ project.country }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Project {
    name: string;
    city: string;
    country: string;
    image: string;
}

const loading = useState("loading", () => true);
const loaded = useState<Project[]>("loaded", () => []);
</script>
