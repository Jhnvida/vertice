<template>
    <section class="w-full grid grid-cols-3 auto-rows-[320px] gap-1">
        <NuxtLink
            v-for="(project, index) in projectsList"
            class="group relative overflow-hidden cursor-pointer"
            :class="index == 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'"
            :key="index"
            :to="{ name: 'projetos-id', params: { id: project.id } }"
        >
            <NuxtImg
                :src="project.image"
                :alt="project.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />

            <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 class="text-white text-2xl font-bold mb-1">
                    {{ project.name }}
                </h3>
                <p class="text-white/90">{{ project.city }}, {{ project.country }}</p>
            </div>
        </NuxtLink>
    </section>
</template>

<script setup lang="ts">
interface Project {
    id: number;
    name: string;
    city: string;
    country: string;
    image: string;
}

const projectsList: Project[] = [
    {
        id: 1,
        name: "Edifício Azure",
        city: "Madrid",
        country: "Espanha",
        image: "https://images.unsplash.com/photo-1701031977495-0351a1c8d889",
    },
    {
        id: 2,
        name: "Centro Urbano",
        city: "Chicago",
        country: "EUA",
        image: "https://images.unsplash.com/photo-1522050212171-61b01dd24579",
    },
    {
        id: 3,
        name: "Residência Moderna",
        city: "Oslo",
        country: "Noruega",
        image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    },
];
</script>
