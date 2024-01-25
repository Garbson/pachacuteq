<template>
  <!-- Formulário de Reserva -->
  <div class="f bg-slate-600 h-1/4 p-8 rounded">
    <div class="text-3xl font-serif mb-3 text-white">
      Preço: {{ item.price }}
    </div>
    <hr class="border-t border-orange-600 mb-4 w-1/2 opacity-80" />
    <h2 class="text-3xl font-serif mb-4 text-white">Reserve agora</h2>
    <form class="space-y-4">
      <div class="mb-6">
        <label
          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          for="nombre"
        >
          Nombre
        </label>
        <input
          v-model="nombre"
          name="nombre"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Nombre"
        />
      </div>

      <div class="mb-6">
        <label
          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          for="email"
        >
          Email
        </label>
        <input
          v-model="email"
          name="email"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="email"
          placeholder="Email"
        />
      </div>

      <div class="mb-6">
        <label
          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          for="check-in"
        >
          Check-in
        </label>
        <input
          v-model="checkIn"
          name="check-in"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="date"
          placeholder="Check-in"
        />
      </div>

      <div class="mb-6">
        <label class="text-white text-xs font-bold mb-2" for="check-out">
          Check-out
        </label>
        <input
          v-model="checkOut"
          name="check-out"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="date"
          placeholder="Check-out"
        />
      </div>

      <div class="mb-6">
        <label
          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          for="adults"
        >
          Quantidade de Adultos
        </label>
        <input
          v-model="adults"
          name="adults"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="number"
          placeholder="Adultos"
        />
      </div>

      <div class="mb-6">
        <label
          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          for="children"
        >
          Quantidade de Crianças
        </label>
        <input
          v-model="children"
          name="children"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="number"
          placeholder="Crianças"
        />
      </div>

      <div class="mb-6">
        <button
          class="bg-orange-500 hover:bg-green-600 text-white font-serif py-3 px-6 rounded w-full"
          @click.prevent="confirmReservation"
        >
          Reservar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const nombre = ref("");
const email = ref("");
const checkIn = ref("");
const checkOut = ref("");
const adults = ref(0);
const children = ref(0);
const item = ref({
  price: "$60 soles la diaria",
});

const confirmReservation = async () => {
  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre.value,
        email: email.value,
        checkIn: checkIn.value,
        checkOut: checkOut.value,
        adults: adults.value,
        children: children.value,
        item: item.value,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    } else {
      const errorData = await response.json();
      throw new Error(`Erro na requisição: ${errorData.message}`);
    }
  } catch (error) {
    console.error(error);
  }
};

</script>

<style scoped>
.f {
  width: 20%;
}

@media (max-width: 800px) {
  .f {
    width: 100%;
  }
}
</style>
