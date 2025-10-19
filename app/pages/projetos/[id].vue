<template>
    <section class="relative h-[75vh] overflow-hidden">
        <NuxtImg
            src="https://images.unsplash.com/photo-1701031977495-0351a1c8d889"
            class="w-full h-full object-cover"
        />

        <div class="absolute bottom-0 left-0 right-0 p-16 bg-gradient-to-t from-black/80 to-transparent">
            <div class="max-w-7xl mx-auto px-6">
                <div>
                    <p class="text-white/90 text-sm font-medium mb-2 tracking-wide">PROJETO RESIDENCIAL</p>
                    <h1 class="text-white text-6xl font-bold mb-3">Edifício Azure</h1>
                    <p class="text-white/90 text-xl">Madrid, country</p>
                </div>
            </div>
        </div>
    </section>

    <section class="w-full py-20">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-16">
            <div class="col-span-2">
                <h2 class="text-3xl font-bold mb-6">Sobre o Projeto</h2>
                <div class="space-y-4 text-lg text-gray-700 leading-relaxed text-justify">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem mi, porttitor ac hendrerit
                        vitae, condimentum eget tellus. Morbi eu blandit dui. Pellentesque eros sem, rhoncus vitae ante
                        id, condimentum ultricies nisl. Sed luctus aliquam tellus, in sodales nunc. Vivamus sit amet
                        orci sit amet nisl tincidunt dapibus id ac justo. Nulla sit amet tincidunt nibh. Sed semper
                        feugiat augue, a finibus nulla mattis vel. Curabitur vehicula accumsan auctor. Curabitur tortor
                        velit, posuere vitae mauris eu, lacinia posuere dui. Proin quis nisi risus. Morbi mollis mauris
                        id orci fringilla egestas. Vivamus placerat rhoncus leo. Ut quis auctor mi, lacinia aliquam
                        nisi. Aenean porta, enim in tempor commodo, leo ex mollis arcu, sit amet vestibulum magna tellus
                        nec eros. Proin a nunc eget eros mattis ultrices. Curabitur faucibus eros tincidunt massa
                        sodales sodales.
                    </p>

                    <p>
                        Quisque nunc mi, tincidunt nec tempus nec, interdum nec sapien. Aenean ac ligula quam. Maecenas
                        lacinia felis sed mattis vehicula. Fusce vitae mauris ipsum. Etiam faucibus nec mauris vitae
                        suscipit. Duis viverra diam ut felis posuere, id vehicula nulla ultrices. Nam eu lacinia ipsum.
                        Proin placerat neque vestibulum venenatis molestie. Cras tristique orci id felis sollicitudin
                        hendrerit. Curabitur tincidunt vel ligula dictum lobortis.
                    </p>
                </div>
            </div>

            <div>
                <h3 class="text-xl font-bold mb-6">Ficha Técnica</h3>

                <div class="space-y-4">
                    <div class="border-b border-gray-200 pb-4">
                        <p class="text-sm text-gray-600 mb-1">Localização</p>
                        <p class="font-medium">São Paulo, SP</p>
                    </div>

                    <div class="border-b border-gray-200 pb-4">
                        <p class="text-sm text-gray-600 mb-1">Ano</p>
                        <p class="font-medium">2024</p>
                    </div>

                    <div class="border-b border-gray-200 pb-4">
                        <p class="text-sm text-gray-600 mb-1">Área Construída</p>
                        <p class="font-medium">450 m²</p>
                    </div>

                    <div class="border-b border-gray-200 pb-4">
                        <p class="text-sm text-gray-600 mb-1">Área do Terreno</p>
                        <p class="font-medium">800 m²</p>
                    </div>

                    <div class="border-b border-gray-200 pb-4">
                        <p class="text-sm text-gray-600 mb-1">Tipologia</p>
                        <p class="font-medium">Residência Unifamiliar</p>
                    </div>

                    <div class="border-b border-gray-200 pb-4">
                        <p class="text-sm text-gray-600 mb-1">Status</p>
                        <p class="font-medium">Construído</p>
                    </div>

                    <div class="pb-4">
                        <p class="text-sm text-gray-600 mb-1">Equipe</p>
                        <p class="font-medium">Vértice Arquitetura</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
