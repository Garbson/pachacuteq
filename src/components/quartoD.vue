<template>
  <div>
    <navbar logo="img/logo.png"></navbar>
    <headS class="h-screen"></headS>
    <div class="a bg-white p-8 rounded-lg shadow-lg flex justify-center">
      <preview class="p"></preview>
      <div class="w-1/2 flex flex-col mx-5">
        <!-- Imagem do quarto -->
        <img
          :src="item.imageUrl"
          :alt="item.title"
          class="a w-full h-auto object-cover mb-4 rounded-md shadow-md"
        />

        <!-- Informações -->
        <div class="mb-6">
          <h1 class="text-4xl font-serif mb-2">{{ item.title }}</h1>
          <p class="d text-gray-700 mb-4">{{ item.description }}</p>
        </div>

        <!-- Container de Serviços -->
        <div class="mb-6">
          <h2 class="text-xl font-serif mb-2">Serviços</h2>
          <div class="flex flex-wrap items-start">
            <!-- Container flexível -->
            <div
              v-for="service in item.services"
              :key="service.title"
              class="contain flex flex-col items-center mb-2 mr-4"
            >
              <!-- Flexbox vertical -->
              <div class="w-20 h-16 mb-2 overflow-hidden">
                <!-- Ajuste da imagem -->
                <img
                  :src="service.imageUrl"
                  :alt="service.title"
                  class="w-auto h-auto object-contain"
                />
              </div>
              <p class="text-gray-700">{{ service.title }}</p>
              <!-- Nome do serviço embaixo da imagem -->
            </div>
          </div>
        </div>
      </div>
      <formulario></formulario>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import navbar from "@/components/navbar.vue";
  import headS from "@/components/headS.vue";
  import preview from "@/components/preview.vue";
  import formulario from "@/components/formulario.vue";

  const item = ref({
    id: 1,
    imageUrl: "img/quartoI.jpg",
    title: "Habitación Doble",
    description:
      "Bienvenido al confort y la elegancia de nuestro cuarto doble. Este espacioso y acogedor espacio ha sido diseñado pensando en tu comodidad y estilo. La habitación cuenta con una cama matrimonial lujosa, suave ropa de cama y almohadas mullidas para garantizar una noche de descanso inigualable.",
    price: "$60 soles/noite",
    services: [
      { title: "Baño privado", imageUrl: "/img/banheiro.png" },
      { title: "WIFI", imageUrl: "/img/wifi.png" },
      { title: "Agua caliente", imageUrl: "/img/chuveiro.png" },
      { title: "TV LCD", imageUrl: "/img/tv.png" },
      { title: "Desayuno", imageUrl: "/img/café.png" },
      { title: "Asistencia", imageUrl: "/img/assistencia.png" },


    ],

  });
</script>

<style scoped>
input:focus,
button:focus {
  border-color: #4a90e2;
  outline: none;
}

.contain {
  border-radius: 10px;
  padding: 1px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid rgb(226, 214, 214);
}

@media (max-width: 800px) {
  .imgC {
    width: 100%;
    padding: 0;
    margin: 2px auto;
  }
  .p {
    order: 3;
    margin-top: 15px;
  }
  .d {
    width: 95%;
  }
}
</style>
