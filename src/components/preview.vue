<template>
  <div class="ab mb-2 bg-quarto-escuro p-2 d-flex flex-col rounded-xl w-full">
    <div>
      <h2 class="text-4xl text-white font-serif mb-4">Habitaciones</h2>
      <hr class="border-t border-orange-600 mb-4 w-full opacity-80" />
    </div>
    <div class="grid grid-cols-3 md:grid-cols-4 gap-4">
      <a
        v-for="otherRoom in otherRooms"
        :key="otherRoom.id"
        :href="otherRoom.h"
      >
        <div
          class="other-room-preview mt-1 items-center p-2 mb-4 border rounded-md shadow-xl"
        >
          <img
            :src="otherRoom.imageUrl"
            :alt="otherRoom.title"
            class="w-full h-auto rounded-md mr-4"
          />
          <hr class="border-t border-orange-600 mt-2 w-full opacity-80" />
          <div class="flex flex-col">
            <p class="text-gray-700 text-2xl mb-0">{{ otherRoom.title }}:</p>
            <p class="text-orange-600 text-1xl font-bold">
              {{ otherRoom.price }}
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const otherRooms = ref([
  {
    id: 1,
    imageUrl: "/img/quarto00.png",
    title: "Hab. simples",
    price: "$60 Soles/Noche",
    h: "/simples",
  },
  {
    id: 2,
    imageUrl: "/img/quarto03.png",
    title: "Hab. Cuaduple",
    price: "$120 Soles/Noche",
    h: "/cuadruple",
  },
  {
    id: 3,
    imageUrl: "/img/quarto01.png",
    title: "Hab. Matrimonial",
    price: "$70 Soles/Noche",
    h: "/matrimonial",
  },
  {
    id: 5,
    imageUrl: "/img/quarto02.png",
    title: "Hab. Triple",
    price: "$100 Soles/Noche",
    h: "/triple",
  },
]);
</script>

<style scoped>
.other-room-preview {
  background-color: #f7f7f7; /* Cor de fundo */
  transition: transform 0.3s ease; /* Transição suave */
  margin-right: 20px; /* Margem à direita */
  width: 100%;
}

@media (max-width: 800px) {
  .ab {
    width: 100%;
  }
}
</style>
