<template>
  <div class="container bg-slate-100 p-9 mx-auto">
    <div class="mb-12">
      <h1 class="a text-3xl font-bold text-center">Nuestros Cuartos</h1>
    </div>
    <div
      class="grid w-[90%] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4"
    >
      <!-- Room Card 1 -->
      <div
        v-for="room1 in room1"
        :key="room1.id"
        class="room-card h-[600px] bg-quarto-escuro p-4 shadow-xl rounded-xl"
      >
        <img
          :src="room1.image"
          :alt="room1.id"
          class="a w-full h-[40%] object-cover mb-4 rounded-md"
        />
        <h2 class="text-lg font-semibold mb-2 text-white">
          {{ room1.titulo }}
        </h2>
        <p class="mb-4 text-gray-300">{{ room1.description }}</p>
        <h6 class="mb-2 text-white">Servicios:</h6>
        <ul class="list-disc pl-4 mb-4 text-gray-300">
          <li>{{ room1.services }}</li>
        </ul>
        <p class="text-xl text-orange-600 font-bold">{{ room1.price }}</p>
        <a :href="room1.h">
          <div class="flex justify-center mt-2">
            <button
              class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 shadow-lg transform hover:scale-105 transition-all duration-300 rounded-full"
            >
              Detalles
            </button>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const room1 = ref([
  {
    id: 1,
    titulo: "Hab.Simples",
    image: "/img/quarto00.png",
    description:
      "Un espacio acogedor y privado con todas las comodidades necesarias para tu comodidad",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 60 Soles/Noche",
    h: "/simples",
  },
  {
    id: 2,
    titulo: "Hab.matrimonial",
    image: "/img/quarto01.png",
    description:
      "Un ambiente romántico con una cama cómoda perfecta para parejas que buscan descanso e intimidad.",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 70 Soles/Noche",
    h: "/matrimonial",
  },

  {
    id: 3,
    titulo: "Hab.Cuadruple",
    image: "/img/quarto03.png",
    description:
      "Amplio espacio con cuatro camas cómodas, perfecto para grupos o familias numerosas",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 160 Soles/Noche",
    h: "/cuadruple",
  },
  {
    id: 4,
    titulo: "Hab.triple",
    image: "/img/quarto02.png",
    description:
      "Tres camas cómodas para grupos pequeños o familias que buscan espacio adicional. ",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 100 Soles/Noche",
    h: "/triple",
  },
]);
</script>

<style scoped>
.a {
  font-family: "Sevillana", cursive;
  font-size: 500%;
  font-weight: 500;
  font-style: normal;
}
.container {
  max-width: 100%;
  max-height: 100%;
}

.room-card {
  max-width: 100%;
}

.room-card img {
  object-fit: cover;
}

@media (max-width: 640px) {
  .room-card {
    grid-template-columns: 1fr;
    max-height: 90%;
  }
}

@media (max-width: 800px) {
  .room-card {
    max-height: 100%;
  }
  .a {
    height: 30%;
  }
}
</style>
