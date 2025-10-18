<template>
    <footer class="w-full bg-white border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-6 py-6">
            <div class="flex items-center justify-between">
                <p class="text-sm text-gray-600">{{ year }} Vértice.</p>
                <p class="text-sm text-gray-600">Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
