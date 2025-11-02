<template>
  
  <div class="relative">
    <div class="absolute inset-0 bg-black opacity-60 z-10 h-full"></div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Oswald:wght@200&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Sevillana&display=swap"
      rel="stylesheet"
    />

    
    <!-- Fundo com opacidade -->

    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      height="100%"
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="/img/img2.jpg" />
      <q-carousel-slide :name="2" img-src="/img/img1.jpg" />
    </q-carousel>

    <!-- Título "La Habitaciones" no meio do carrossel -->
    <div
      class="a absolute inset-0 flex items-center justify-center text-white text-3xl font-mono z-20"
    >
      La Habitaciones
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>

<style scoped>
.a {
  font-family: "Sevillana", cursive;
  font-size: 500%;
  font-weight: 500;
  font-style: normal;
}

@media (max-width: 800px) {
  .a {
    font-size: 400%;
  }
}
</style>
