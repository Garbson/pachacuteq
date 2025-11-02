<template>
  <div>
    <navbar logo="img/logo.png"></navbar>
    <headS class="h-screen"></headS>
    <div class="a p-6 rounded-lg shadow-lg bg-slate-100 justify-center">
      <div class="aa w-full">
        <!-- Imagem do quarto -->
        <div class="flex flex-row gap-6">
          <!-- Carousel de imagens -->
          <div class="w-1/2">
            <swiper
              :slides-per-view="1"
              :space-between="10"
              :pagination="{ clickable: true }"
              :navigation="true"
              :modules="[Navigation, Pagination]"
              class="w-full h-auto rounded-md shadow-md"
            >
              <swiper-slide v-for="srcImg in ImgHab" :key="srcImg">
                <img
                  :src="srcImg"
                  :alt="item.title"
                  class="w-full h-full object-cover rounded-xl"
                />
              </swiper-slide>
            </swiper>
          </div>

          <!-- Informações -->
          <div class="mb-6 w-2/5">
            <h1 class="text-3xl font-serif leading-tight">{{ item.title }}:</h1>
            <p class="d text-base text-gray-700 mb-3">{{ item.description }}</p>
            <div class="mb-6">
              <h2 class="text-3xl font-serif mb-2">Serviços:</h2>
              <div
                class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4"
              >
                <!-- Container flexível -->
                <div
                  v-for="service in item.services"
                  :key="service.title"
                  class="contain flex flex-col items-center"
                >
                  <!-- Flexbox vertical -->
                  <div class="w-12 h-12 mb-2 overflow-hidden">
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
            <div class="flex flex-row w-full">
              <p class="text-2xl font-serif mb-0">Precio:</p>
              <p class="text-orange-600 text-2xl ml-2 font-bold">
                {{ item.price }}
              </p>
            </div>
            <div
              class="mt-4 p-4 bg-principal/10 rounded-xl border-2 border-principal/20"
            >
              <button
                class="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
              >
                💳 Reservar Habitación
              </button>
              <p class="text-xs text-gray-500 text-center mt-2">
                Confirmación inmediata
              </p>
            </div>
          </div>
          <preview class="p"></preview>
          <!-- Container de Serviços -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import headS from "@/components/headS.vue";
import navbar from "@/components/navbar.vue";
import preview from "@/components/preview.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

const item = ref({
  id: 1,
  imageUrl: "img/quarto00.png",
  title: "Habitación simples",
  description:
    "Bienvenido a nuestra acogedora habitación individual, perfectamente diseñada para aquellos que buscan un espacio personal y tranquilo. Con una decoración moderna y elegante, esta habitación cuenta con una confortable cama individual, garantizando un descanso reparador después de un día lleno de actividades.Reserva ahora y descubre el confort y la tranquilidad que nuestra Habitación Individual tiene para ofrecerte!",
  price: "$60 soles/noite",
  services: [
    { title: "Baño privado", imageUrl: "/img/banheiroIcon.png" },
    { title: "WIFI", imageUrl: "/img/wifi.png" },
    { title: "Agua caliente", imageUrl: "/img/chuveiro.png" },
    { title: "TV LCD", imageUrl: "/img/tv.png" },
    { title: "Desayuno", imageUrl: "/img/café.png" },
    { title: "Asistencia", imageUrl: "/img/assistencia.png" },
  ],
});

const ImgHab = ref([
  "/img/quarto00.png",
  "/img/banheiro01.png",
  "/img/banheiro02.png",
  "/img/estudo.png",
  "/img/tvGuardaRoupa.png",
]);
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

/* Customização das setas do Swiper */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #d59b5e !important;
  border-radius: 50%;
  width: 35px !important;
  height: 35px !important;
  margin-top: -17.5px;
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  font-size: 14px !important;
  font-weight: bold;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(212, 165, 116, 0.9);
}

/* Customização da paginação */
:deep(.swiper-pagination-bullet) {
  background: #d4a574 !important;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background: #d4a574 !important;
  opacity: 1;
}

@media (max-width: 800px) {
  .aa {
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
  .contain {
    margin: 2px auto;
  }
}
</style>
