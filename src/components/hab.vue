<template>
  <div class="container mx-auto mb-10">
    <h1 class="text-3xl font-bold mb-8 text-center">Nuestros Cuartos</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <!-- Room Card 1 -->
      <div
        v-for="room1 in room1"
        :key="room1.id"
        class="room-card bg-gray-800 p-4 shadow-xl rounded-md"
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
          <button
            class="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full"
          >
            Detalles
          </button>
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
    image: "/img/quartoS.jpg",
    description:
      "Un espacio acogedor y privado con todas las comodidades necesarias para tu comodidad",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 60 soles",
    h:"/simples"
  },
  {
    id: 2,
    titulo: "Hab.matrimonial",
    image: "/img/quartoMM.jpg",
    description:
      "Un ambiente romántico con una cama cómoda perfecta para parejas que buscan descanso e intimidad.",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 70 soles",
    h:"/matrimonial"
  },

  {
    id: 3,
    titulo: "Hab.Cuadruple",
    image: "/img/quartoC.jpg",
    description:
      "Amplio espacio con cuatro camas cómodas, perfecto para grupos o familias numerosas",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 160 soles",
    h:"/cuadruple"
  },
  {
    id: 4,
    titulo: "Hab.triple",
    image: "/img/quartoI.jpg",
    description:
      "Tres camas cómodas para grupos pequeños o familias que buscan espacio adicional. ",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 100 soles",
    h:"/triple"
  },
  {
    id: 5,
    titulo: "Hab.Doble",
    image: "/img/quartoD.jpg",
    description:
      "Dos camas cómodas en un ambiente espacioso, ideal para amigos o compañeros de viaje.",
    services:
      "Baño privado, TV Cable, WIFI, Agua caliente, Desayuno Continental, Asistencia permanente",
    price: "$ 70 soles",
    h:"/doble"
  },
]);

// Repeat for Room 2-6
// ...
</script>

<style scoped>
.container {
  max-width: 90%;
  max-height: 98%;
}

.room-card {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 100%;
  margin: 0 auto;
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-height: 100%;
  }
  .a{
    height: 30%;
  }
}
</style>