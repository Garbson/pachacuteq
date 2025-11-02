<template>
  <div id="galeria" class="w-full bg-slate-100 p-4 md:p-10">
    <div class="mx-auto" :style="$q.screen.lt.md ? 'width: 90%' : 'width: 75%'">
      <h1 class="gallery-title text-2xl md:text-3xl">Nuestra Galería</h1>
      <p class="gallery-subtitle text-sm md:text-base">
        Elige una habitación que se adapte mejor a tu gusto y presupuesto
      </p>

      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 lg:gap-8 w-full"
      >
        <div v-for="image in images" :key="image.name" class="gallery-item">
          <img
            :src="image.src"
            :class="{ enlarged: image.enlarged }"
            class="w-full max-w-full h-[400px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  { name: 1, src: "img/entrada.png", enlarged: false },
  { name: 2, src: "img/cozinha.png", enlarged: false },
  { name: 3, src: "img/patio.png", enlarged: false },
  { name: 4, src: "img/estudo.png", enlarged: false },
  { name: 5, src: "img/vista.png", enlarged: false },
  { name: 6, src: "img/areaTrabalho.png", enlarged: false },
]);
</script>

<style scoped>
.gallery-title {
  margin-bottom: 10px;
  color: var(--quarto-madeira);
  font-weight: bold;
}

.gallery-subtitle {
  margin-bottom: 20px;
  color: var(--quarto-tecido);
}

.gallery {
  display: grid;
  grid-template-columns: 3fr;
  gap: 20px;
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
  height: 300px;
  object-fit: contain;
  position: center;
}
.a {
  font-family: "Sevillana", cursive;
  font-size: 500%;
  font-weight: 500;
  font-style: normal;
}
</style>
