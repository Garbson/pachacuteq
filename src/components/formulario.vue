<template>

          <!-- Formulário de Reserva -->
          <div class="f bg-slate-600  h-1/4 p-8 rounded">
        <div class="text-3xl font-serif mb-3 text-white">
          Preço: {{ item.price }}
        </div>
        <hr class="border-t border-orange-600 mb-4 w-1/2 opacity-80" />
        <h2 class="text-3xl font-serif mb-4 text-white">Reserve agora</h2>
        <form class="space-y-4">
          <!-- Check-in -->
          <div class="mb-6">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="check-in"
            >
              Check-in
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="check-in"
              type="date"
              placeholder="Check-in"
            />
          </div>

          <!-- Check-out -->
          <div class="mb-6">
            <label class="text-white text-xs font-bold mb-2" for="check-out">
              Check-out
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="check-out"
              type="date"
              placeholder="Check-out"
            />
          </div>

          <!-- Quantidade de Adultos -->
          <div class="mb-6">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="adults"
            >
              Quantidade de Adultos
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="adults"
              type="number"
              placeholder="Adultos"
            />
          </div>

          <!-- Quantidade de Crianças -->
          <div class="mb-6">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="children"
            >
              Quantidade de Crianças
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="children"
              type="number"
              placeholder="Crianças"
            />
          </div>

          <!-- Botão de Reserva -->
          <div class="mb-6">
            <button
              @click="confirmReservation"
              class="bg-orange-500 hover:bg-green-600 text-white font-serif py-3 px-6 rounded w-full"
            >
              Reservar
            </button>
          </div>
        </form>
      </div>
</template>
<script setup>
import { ref } from "vue";

const item = ref({
  id: 1,
  imageUrl: "img/img2.jpg",
  title: "Habitación simples",
  description:
    "Bienvenido a nuestra acogedora habitación individual, perfectamente diseñada para aquellos que buscan un espacio personal y tranquilo. Con una decoración moderna y elegante, esta habitación cuenta con una confortable cama individual, garantizando un descanso reparador después de un día lleno de actividades.Reserva ahora y descubre el confort y la tranquilidad que nuestra Habitación Individual tiene para ofrecerte!",
  price: "$60 soles la diaria ",
  services: [
    { title: "WIFI", imageUrl: "/img/wifi.png" },
    { title: "TV LCD", imageUrl: "/img/tv.png" },
    { title: "DESAYUNO", imageUrl: "/img/café.png" },
    { title: "Baño privado", imageUrl: "/img/banheiro.png" },
  ],
});

const confirmReservation = () => {
  console.log("Reserva confirmada!");
};
</script>
<style scoped>
.f{
  width: 20%;
}
@media (max-width: 800px) {
  .f {
    width: 100%;
  }
}

</style>