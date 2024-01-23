<template>
    <div class="relative "> 
      <div class="absolute inset-0 bg-black opacity-60 z-10 h-full"></div> <!-- Fundo com opacidade -->
      
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
      <div class="absolute inset-0 flex items-center justify-center text-white text-3xl font-mono z-20">
        La Habitaciones
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      return {
        slide: ref(1),
        autoplay: ref(true)
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  