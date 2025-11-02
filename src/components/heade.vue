<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <div class="relative h-screen">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      height="100%"
      :autoplay="3000"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="/img/carrosel/cusco01.jpg">
        <div class="absolute-full bg-black" style="opacity: 0.2"></div>
        <div class="absolute-center custom-caption">
          <div
            class="text-h4 text-white text-bold"
            style="font-family: 'Cinzel', cursive"
          >
            Descubre la Capital del Imperio Inca
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="/img/carrosel/cusco02.jpg">
        <div class="absolute-full bg-black" style="opacity: 0.2"></div>
        <div class="absolute-center custom-caption">
          <div
            class="text-h4 text-white text-bold"
            style="font-family: 'Cinzel', serif"
          >
            Vive Aventuras que Te Dejarán Sin Aliento
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="/img/carrosel/cusco03.jpg">
        <div class="absolute-full bg-black" style="opacity: 0.2"></div>
        <div class="absolute-center custom-caption">
          <div
            class="text-h4 text-white text-bold"
            style="font-family: 'Cinzel', serif"
          >
            Historia Viva en el Corazón de los Andes
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="/img/carrosel/cusco04.jpg">
        <div class="absolute-full bg-black" style="opacity: 0.2"></div>
        <div class="absolute-center custom-caption">
          <div
            class="text-h4 text-white text-bold"
            style="font-family: 'Cinzel', serif"
          >
            Noches Mágicas en Cusco Te Esperan
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="5" img-src="/img/carrosel/cusco05.jpg">
        <div class="absolute-full bg-black" style="opacity: 0.2"></div>
        <div class="absolute-center custom-caption">
          <div
            class="text-h4 text-white text-bold"
            style="font-family: 'Cinzel', serif"
          >
            Paisajes que Parecen de Otro Mundo
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="6" img-src="/img/carrosel/cusco06.jpg">
        <div class="absolute-full bg-black" style="opacity: 0.2"></div>
        <div class="absolute-center custom-caption">
          <div
            class="text-h4 text-white text-bold"
            style="font-family: 'Cinzel', serif"
          >
            Maravillas Ancestrales que Desafían el Tiempo
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="7" img-src="/img/carrosel/cusco07.jpg">
        <div class="absolute-full bg-black" style="opacity: 0.2"></div>
        <div class="absolute-center custom-caption">
          <div
            class="text-h4 text-white text-bold"
            style="font-family: 'Cinzel', serif"
          >
            Misterios Ancestrales Te Aguardan
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
const slide = ref(1);
</script>

<style scoped>
h1 {
  font-family: "Sevillana", cursive;
  font-size: 500%;
  font-weight: 500;
  font-style: normal;
}

@media (max-width: 800px) {
  h1 {
    font-size: 400%;
  }

  .aa {
    margin-top: 50%;
    width: 90%;
    align-items: center;
    text-align: center;
    margin: 50% auto;
  }
}
</style>
