<template>
  <div class="p-6 shadow-xl bg-orange-600">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Informações de contato -->
      <div
        class="contact-info rounded-xl bg-white p-4 flex flex-col justify-between shadow-xl border-black border-2"
      >
        <div class="text-center">
          <h2 class="text-3xl font-semibold mb-2 tracking-wide">
            Estar en contacto
          </h2>
          <div class="mb-6">
            <p class="text-2xl font-serif text-black">{{ name }}</p>
            <p class="text-xl font-serif text-gray-600">{{ position }}</p>
          </div>
          <div class="flex flex-col space-y-4 mb-4 items-center justify-center">
            <!-- Telefone 1 -->
            <div
              class="contact-item flex items-center space-x-2 bg-gray-100 p-2 rounded-md w-full max-w-xs"
            >
              <img
                src="/img/phone.png"
                alt="Ícone de telefone fixo"
                class="h-5 w-5"
              />
              <span><span class="font-semibold">Fixo: </span>{{ phone }}</span>
            </div>
            <!-- Telefone 2 -->
            <div
              class="contact-item flex items-center space-x-2 bg-gray-100 p-2 rounded-md w-full max-w-xs"
            >
              <img
                src="/img/smartphone.png"
                alt="Ícone de telefone móvel"
                class="h-5 w-5"
              />
              <span
                ><span class="font-semibold">Móvel: </span>{{ phone2 }}</span
              >
            </div>
            <!-- Email 1 -->
            <div
              class="contact-item flex items-center space-x-2 bg-gray-100 p-2 rounded-md w-full max-w-xs"
            >
              <img src="/img/gmail.png" alt="Ícone de e-mail" class="h-5 w-5" />
              <span><span class="font-semibold"></span>{{ email }}</span>
            </div>
            <!-- Email 2 -->
            <div
              class="contact-item flex items-center space-x-2 bg-gray-100 p-2 rounded-md w-full max-w-xs"
            >
              <img src="/img/gmail.png" alt="Ícone de e-mail" class="h-5 w-5" />
              <span><span class="font-semibold"></span>{{ email2 }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulário de contato -->
      <div
        class="contact-form rounded-xl bg-white p-4 flex flex-col justify-between shadow-xl border-black border-2"
      >
        <div class="flex flex-col items-center">
          <h2 class="text-3xl font-semibold mb-4">Enviar mensaje</h2>
          <form
            class="space-y-4 w-full max-w-xs"
            @submit.prevent="handleSubmit"
          >
            <div class="flex flex-col">
              <label for="name" class="text-md font-medium">Nombre</label>
              <input
                v-model="formData.name"
                name="name"
                class="border p-2 rounded-md"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div class="flex flex-col">
              <label for="email" class="text-md font-medium">Email</label>
              <input
                v-model="formData.email"
                name="email"
                class="border p-2 rounded-md"
                type="email"
                placeholder="Correo electrónico"
              />
            </div>
            <div class="flex flex-col">
              <label for="assunto" class="text-md font-medium">Assunto</label>
              <!-- Fix the label attribute -->
              <input
                v-model="formData.assunto"
                name="assunto"
                class="border p-2 rounded-md"
                type="text"
                placeholder="Assunto"
              />
            </div>
            <div class="flex flex-col">
              <label for="text" class="text-md font-medium">text</label>
              <input
                v-model="formData.text"
                name="message"
                class="border p-2 rounded-md"
                type="text"
                placeholder="text"
              />
            </div>
            <!-- Adicione outros campos do formulário conforme necessário -->
            <button
              type="submit"
              class="bg-orange-400 text-white p-11 rounded-md hover:bg-green-600"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      <!-- Imagem -->
      <!-- Google Maps Location Image with Link -->
      <div
        class="image-container flex justify-center relative shadow-xl border-black border-2 rounded-xl"
      >
        <a
          href="https://www.google.com.br/maps/place/Hostal+Pachacuteq+Inn/@-13.5301007,-71.9701245,16.92z/data=!4m9!3m8!1s0x916dd5e428066061:0xd4717541e2e1cc6!5m2!4m1!1i2!8m2!3d-13.5298425!4d-71.9698965!16s%2Fg%2F11g7z7vvrr?entry=ttu"
          target="_blank"
          class="block w-full h-full"
        >
          <img
            src="/img/localização.png"
            alt="Descrição da imagem"
            class="w-full h-full rounded-lg animate-pulse"
          />
          <p
            class="text-black text-xl font-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
          >
            Click here
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = "Heber Quispe";
const position = "Gerente General";
const phone = "084621482";
const phone2 = "+51 123456789";
const email = "hostalpachacuteqin@gmail.com";
const email2 = "gerencia@hostalpachacuteqinn.com";

const formData = {
  name: "",
  email: "",
  assunto: "",
  text: "",
  // Adicione outros campos do formulário conforme necessário
};
const handleSubmit = async () => {
  try {
    const response = await fetch("http://localhost:5000/enviar-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("E-mail enviado com sucesso!");
      // Limpar o formulário após o envio bem-sucedido, se desejar
      formData.name = "";
      formData.email = "";
      formData.assunto = "";
      formData.text = "";
      // Limpe os outros campos conforme necessário
    } else {
      alert("Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.");
    }
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
  }
};
</script>

<style scoped>
button {
  padding: 1rem 2rem;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: 1fr;
}

.lg\:grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.gap-6 {
  gap: 2rem;
}

.contact-info,
.contact-form,
.image-container {
  width: 100%;
}

.contact-item {
  width: 100%;
}

@media (max-width: 768px) {
  .lg\:grid-cols-3 {
    grid-template-columns: 1fr;
  }

  .mx-10 {
    width: 90%;
    margin: 10px auto;
  }

  .text-3xl,
  .text-2xl {
    font-size: 1.5rem;
  }

  .w-auto {
    width: 80%;
  }

  .h-full {
    height: auto;
  }

  input,
  textarea {
    width: 100%;
  }
}
</style>
