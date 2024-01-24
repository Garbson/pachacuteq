<template>
  <div class="bg-slate-100 p-10">
    <h1 class="text-3xl md:text-4xl lg:text-5xl text-center mb-10">
      Habitaciones
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-screen-lg"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="bg-white p-4 rounded shadow"
      >
        <img
          :src="item.imageUrl"
          :alt="item.title"
          class="w-full h-48 md:h-56 lg:h-64 object-cover mb-4 rounded-xl"
        />
        <h2 class="text-xl font-semibold mb-2">{{ item.title }}</h2>
        <p class="text-gray-600">{{ item.description }}</p>
        <a :href="item.h"><button
          class="mt-4 bg-orange-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Detalles
        </button></a>
      </div>
    </div>
  </div>
  <galeria></galeria>
</template>

<script setup>
import { ref } from "vue";
import galeria from "@/components/galeria.vue";
const items = ref([
  {
    id: 1,
    imageUrl: "img/quartoI.jpg",
    title: "Habitación Doble",
    description:
      "Esta habitación cuenta con dos camas individuales cómodas, ideal para aquellos que buscan un descanso tranquilo.",
      h: "/doble",
  },
  {
    id: 2,
    imageUrl: "img/quartoI.jpg",
    title: "habitación Triple",
    description:
      "Esta habitación cuenta con dos camas individuales cómodas, ideal para aquellos que buscan un descanso tranquilo.",
      h:"/triple",
  },
  {
    id: 4,
    imageUrl: "img/quartoMM.jpg",
    title: "habitacion matrimonial",
    description:
      "Esta habitación cuenta con dos camas individuales cómodas, ideal para aquellos que buscan un descanso tranquilo.",
      h:"/matrimonial"
  },
  {
    id: 5,
    imageUrl: "img/quartoS.jpg",
    title: "Habitación Simples",
    description:
      "Esta habitación cuenta con dos camas individuales cómodas, ideal para aquellos que buscan un descanso tranquilo.",
      h:"/simples"
  },
  {
    id: 6,
    imageUrl: "img/quartoC.jpg",
    title: "Habitación Cuadruple",
    description:
      "Esta habitación cuenta con dos camas individuales cómodas, ideal para aquellos que buscan un descanso tranquilo.",
      h:"cuadruple"
  },
]);
</script>

<style scoped>
.a {
  width: 90%;
}
h1 {
  text-align: center; /* centraliza o título */
  color: #333; /* cor do título */
  font-size: 2rem; /* tamanho grande para o título */
  margin-bottom: 30px; /* espaço entre o título e o grid */
}
</style>
