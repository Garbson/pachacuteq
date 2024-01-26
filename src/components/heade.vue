<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Oswald:wght@200&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Sevillana&display=swap"
    rel="stylesheet"
  />
  <div class="relative bg-no-repeat h-screen bg-cover" style="background-image: url('img/cusco2.jpg')">
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <navbar logo="img/logo.png"></navbar>
    <div class="aa absolute inset-0 flex items-center justify-center text-white text-center ">
      <div>
        <h1 class="">Pachacuteq Inn</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import navbar from "@/components/navbar.vue";
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
