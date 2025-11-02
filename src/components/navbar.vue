<template>
  <header
    :class="[navClass]"
    class="fixed flex flex-wrap z-50 w-full text-sm py-4"
  >
    <nav
      class="max-w-[85rem] justify-center flex w-full mx-auto px-4 sm:flex sm:items-center"
      aria-label="Global"
    >
      <!-- logo -->
      <div class="flex max-auto">
        <a class="" href="/"> <img :src="logo" alt="" class="h-16" /></a>
      </div>

      <!-- nav-bar -->
      <div class="flex-grow">
        <div
          class="flex gap-5 mt-5 sm:justify-center md:justify-end sm:mt-0 sm:ps-5 centralizar"
        >
          <a class="font-bold text-md text-white" href="/" aria-current="page"
            >INICIO</a
          >
          <a
            class="font-bold text-md text-white hover:text-quarto-dourado"
            href="/hab"
            >HABITACIONES</a
          >
          <a
            class="font-bold text-md text-white hover:text-quarto-dourado"
            href="#contato"
            >CONTACTO</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

defineProps({
  logo: String,
});

const navClass = ref("bg-quarto-madeira");

const updateVisibility = () => {
  navClass.value = window.scrollY > 200 ? "bg-quarto-escuro" : "bg-transparent";
};

onMounted(() => {
  updateVisibility();
  window.addEventListener("scroll", () => {
    updateVisibility();
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", () => {
    updateVisibility();
  });
});
</script>

<style>
@media (max-width: 532px) {
  .centralizar {
    justify-content: center;
    gap: 2.15rem;
  }
}
</style>
