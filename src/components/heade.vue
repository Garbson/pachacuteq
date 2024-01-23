<template>
  <div class="relative bg-no-repeat h-screen bg-cover" style="background-image: url('img/cusco2.jpg')">
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <navbar logo="img/logo.png"></navbar>
    <div class="aa absolute inset-0  items-center text-white text-center  mt-24">
      <form class="w-full max-w-md  h-auto mx-auto">
        <div><h1 class="text-5xl md:text-5xl lg:text-6xl font-thin mb-8 ">Pachacuteq Inn</h1></div>
        
        <!-- Check-in -->
        <div class="mb-4 md:mb-6">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="check-in">
            Check-in
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="check-in" type="date" placeholder="Check-in">
        </div>

        <!-- Check-out -->
        <div class="mb-4 md:mb-6">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="check-out">
            Check-out
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="check-out" type="date" placeholder="Check-out">
        </div>

        <!-- Quantidade de Adultos -->
        <div class="mb-4 md:mb-6">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="adults">
            Quantidade de Adultos
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="adults" type="number" placeholder="Adultos">
        </div>

        <!-- Quantidade de Crianças -->
        <div class="mb-4 md:mb-6">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="children">
            Quantidade de Crianças
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="children" type="number" placeholder="Crianças">
        </div>

        <!-- Botão de Reserva -->
        <div class="mb-4 md:mb-6">
          <button class="bg-orange-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
            Reservar
          </button>
        </div>
      </form>
      <!-- Título da página -->
      <p class="headline text-xl font-extrabold lg:text-lg xl:text-lg"></p>
    </div>
  </div>
</template>

<script setup>
import navbar from "@/components/navbar.vue";
</script>
<style scoped>
@media (max-width: 800px){
   .aa{
    margin-top: 50%;
    width: 90%;
   
    align-items: center;
    text-align: center;
    margin: 50% auto;
   } 
}
</style>