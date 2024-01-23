<template>
  <div class="ab mb-6 bg-slate-600 p-2 rounded w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-auto sm:mx-0">
    <h2 class="text-4xl text-white font-serif mb-4">Habitaciones</h2>
    <hr class="border-t border-orange-600 mb-4 w-1/2 mx-auto opacity-80" />
    <div class="flex flex-col space-y-4">
      <a
        v-for="otherRoom in otherRooms"
        :key="otherRoom.id"
        :href="`#${otherRoom.id}`"
      >
        <div
          class="other-room-preview flex mt-1 items-center p-2 border rounded-md shadow-xl"
        >
          <img
            :src="otherRoom.imageUrl"
            :alt="otherRoom.title"
            class="w-1/2 h-28 rounded-md mr-4"
          />
          <div class="flex flex-col">
            <p class="text-gray-700">{{ otherRoom.title }}</p>
            <p class="text-green-500 font-semibold">{{ otherRoom.price }}</p>
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
    id: 2,
    imageUrl: "/img/quartoS.jpg",
    title: "Hab. Cuaduple",
    price: "$80/noite",
  },
  {
    id: 3,
    imageUrl: "/img/QuartoF.jpg",
    title: "Hab. Matrimonial",
    price: "$180/noite",
  },
  {
    id: 4,
    imageUrl: "/img/quartoI.jpg",
    title: "Hab. Doble",
    price: "$180/noite",
  },
  {
    id: 5,
    imageUrl: "/img/quartoT.jpg",
    title: "Hab. Triple",
    price: "$180/noite",
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
