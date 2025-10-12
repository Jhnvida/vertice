<template>
    <footer class="bg-gray-50 border-t border-gray-100">
        <div class="container mx-auto px-6 lg:px-16 py-12">
            <div
                class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
            >
                <div>
                    <h3 class="text-xl font-light tracking-tight mb-2">
                        Vértice
                    </h3>

                    <p class="text-xs font-light text-gray-500">
                        <Icon name="ic:baseline-copyright" />
                        {{ year }} All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
