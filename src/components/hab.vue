<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold mb-8 text-center">Nuestros Cuartos</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      <!-- Room Card 1 -->
      <div
        v-for="room1 in room1"
        :key="room1.id"
        class="room-card bg-gray-800 p-2 shadow-xl"
      >
        <img
          :src="room1.image"
          :alt="room1.id"
          class="w-full shadow-xl bg auto object-cover mb-4 rounded-md"
        />
        <h2 class="text-xl font-semibold mb-2 text-white">
          {{ room1.titulo }}
        </h2>
        <p class="mb-4 text-white">{{ room1.description }}</p>
        <h6 class="mb-2 text-white">Services:</h6>
        <ul class="list-disc pl-4 mb-4 text-white">
          <li>{{ room1.services }}</li>
        </ul>
        <p class="text-2xl text-orange-600">{{ room1.price }}</p>
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
    image: "/img/quartoS.jpg",
    description:
      "Un espacio acogedor y privado con todas las comodidades necesarias para tu comodidad",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 60 soles",
  },
  {
    id: 2,
    titulo: "Hab.matrimonial",
    image: "/img/QuartoF.jpg",
    description:
      "Un ambiente romántico con una cama cómoda perfecta para parejas que buscan descanso e intimidad.",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 70 soles",
  },

  {
    id: 3,
    titulo: "Hab.Cuadruple",
    image: "/img/quartoM.jpg",
    description:
      "Amplio espacio con cuatro camas cómodas, perfecto para grupos o familias numerosas",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 160 soles",
  },
  {
    id: 4,
    titulo: "Hab.triple",
    image: "/img/quartoT.jpg",
    description:
      "Tres camas cómodas para grupos pequeños o familias que buscan espacio adicional. ",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 100 soles",
  },
  {
    id: 5,
    titulo: "Hab.Doble",
    image: "/img/quartoI.jpg",
    description:
      "Dos camas cómodas en un ambiente espacioso, ideal para amigos o compañeros de viaje.",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 70 soles",
  },
]);

// Repeat for Room 2-6
// ...
</script>

<style scoped>
.container {
  max-width: 85%;
}

.room-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.room-card:hover {
  transform: scale(1.08);
}

.room-card img {
  object-fit: cover;
}
@media (max-width: 800px){
.container{
 max-width: 90%;
}
}
</style>
