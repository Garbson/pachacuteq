<template>
  <div id="galeria" class="bg-slate-100 w-full p-4 md:p-10">
    <div class="max-w-screen-md mx-auto">
      <h1 class="gallery-title text-2xl md:text-3xl">Nuestra Galería</h1>
      <p class="gallery-subtitle text-sm md:text-base">Elige una habitación que se adapte mejor a tu gusto y presupuesto</p>

      <!-- Utilizando CSS Grid com Tailwind para responsividade -->
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-8 lg:gap-8 w-full">
        <div
          v-for="image in images"
          :key="image.name"
          class="gallery-item"
          @mouseenter="enlargeImage(image)"
          @mouseleave="resetImageSize(image)"
        >
          <img :src="image.src" :class="{ enlarged: image.enlarged }" class="w-full max-w-full h-44" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
  { name: 1, src: "img/g1.jpg", enlarged: false },
  { name: 2, src: "img/g2.jpg", enlarged: false },
  { name: 3, src: "img/QuartoF.jpg", enlarged: false },
  { name: 4, src: "img/quartoMM.jpg", enlarged: false },
  { name: 5, src: "img/quartoQ.jpg", enlarged: false },
  { name: 6, src: "img/quartoT.jpg", enlarged: false },
]);

const enlargeImage = (image) => {
  image.enlarged = true;
}

const resetImageSize = (image) => {
  image.enlarged = false;
}
</script>

<style scoped>


.gallery-title {
  margin-bottom: 10px;
}

.gallery-subtitle {
  margin-bottom: 20px;
  color: #888;
}

.gallery {
  display: grid;
  grid-template-columns: 3fr; /* Por padrão, uma imagem por linha */
  gap: 20px; /* Espaçamento entre os itens */
}

/* Responsividade para telas maiores que md (tablets e desktops) */
@media (max-width: 808px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr); /* Duas imagens por linha */
  }
}

.gallery-item {
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
  object-fit: contain;
  position: center;
}
.a{
  font-family: "Sevillana", cursive;
  font-size: 500%;
  font-weight: 500;
  font-style: normal;
}



</style>
