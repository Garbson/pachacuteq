<template>
  <div class="py-16 bg-slate-100">
    <div class="max-w-7xl mx-auto">
      <!-- Título da seção -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h2>
        <p class="text-xl text-gray-600">
          Estamos aquí para ayudarte con tu reserva
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Informações de contato -->
        <div class="lg:col-span-1">
          <div
            class="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full"
          >
            <div class="text-center mb-8">
              <div
                class="w-20 h-20 bg-principal/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-10 h-10 text-principal"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ name }}</h3>
              <p class="text-lg text-principal font-medium">{{ position }}</p>
            </div>

            <div class="space-y-6">
              <!-- Telefone 1 -->
              <div
                class="flex items-center space-x-4 p-4 bg-principal/5 rounded-xl hover:bg-principal/10 transition-colors"
              >
                <div
                  class="w-12 h-12 bg-principal/20 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-principal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-medium">Teléfono fijo</p>
                  <p class="text-lg font-semibold text-gray-800">{{ phone }}</p>
                </div>
              </div>

              <!-- Telefone 2 -->
              <div
                class="flex items-center space-x-4 p-4 bg-principal/5 rounded-xl hover:bg-principal/10 transition-colors"
              >
                <div
                  class="w-12 h-12 bg-principal/20 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-principal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-medium">Celular</p>
                  <p class="text-lg font-semibold text-gray-800">
                    {{ phone2 }}
                  </p>
                </div>
              </div>

              <!-- Email 1 -->
              <div
                class="flex items-center space-x-4 p-4 bg-principal/5 rounded-xl hover:bg-principal/10 transition-colors"
              >
                <div
                  class="w-12 h-12 bg-principal/20 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-principal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    />
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-medium">
                    Email principal
                  </p>
                  <p class="text-lg font-semibold text-gray-800 break-all">
                    {{ email }}
                  </p>
                </div>
              </div>

              <!-- Email 2 -->
              <div
                class="flex items-center space-x-4 p-4 bg-principal/5 rounded-xl hover:bg-principal/10 transition-colors"
              >
                <div
                  class="w-12 h-12 bg-principal/20 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-principal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    />
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-medium">
                    Email gerencia
                  </p>
                  <p class="text-lg font-semibold text-gray-800 break-all">
                    {{ email2 }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Localização -->
        <div class="lg:col-span-1">
          <div
            class="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full"
          >
            <div class="text-center mb-8">
              <div
                class="w-20 h-20 bg-principal/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-10 h-10 text-principal"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">
                Nuestra ubicación
              </h3>
              <p class="text-lg text-principal font-medium">Centro de Cusco</p>
            </div>

            <div class="space-y-6">
              <!-- Card Qorikancha -->
              <div
                class="flex items-center space-x-4 p-4 bg-principal/5 rounded-xl hover:bg-principal/10 transition-colors"
              >
                <div
                  class="w-12 h-12 bg-principal/20 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-principal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM12 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM12 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-medium">Qorikancha</p>
                  <p class="text-lg font-semibold text-gray-800">
                    10 min caminando
                  </p>
                </div>
              </div>

              <!-- Card Sacsayhuamán -->
              <div
                class="flex items-center space-x-4 p-4 bg-principal/5 rounded-xl hover:bg-principal/10 transition-colors"
              >
                <div
                  class="w-12 h-12 bg-principal/20 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-principal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path
                      fill-rule="evenodd"
                      d="M3 8a2 2 0 012-2v9a2 2 0 104 0V8a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 104 0V8a2 2 0 012-2 2 2 0 110 4v9a2 2 0 11-4 0V8a2 2 0 00-2-2H9a2 2 0 00-2 2v9a2 2 0 11-4 0V8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-medium">Sacsayhuamán</p>
                  <p class="text-lg font-semibold text-gray-800">
                    15 min en taxi
                  </p>
                </div>
              </div>

              <!-- Card Mercado San Pedro -->
              <div
                class="flex items-center space-x-4 p-4 bg-principal/5 rounded-xl hover:bg-principal/10 transition-colors"
              >
                <div
                  class="w-12 h-12 bg-principal/20 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-principal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM6 9a1 1 0 112 0 1 1 0 01-2 0zm6 0a1 1 0 112 0 1 1 0 01-2 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-medium">
                    Mercado San Pedro
                  </p>
                  <p class="text-lg font-semibold text-gray-800">
                    20 min caminando
                  </p>
                </div>
              </div>

              <!-- Card Plaza de Armas -->
              <div
                class="flex items-center space-x-4 p-4 bg-principal/5 rounded-xl hover:bg-principal/10 transition-colors"
              >
                <div
                  class="w-12 h-12 bg-principal/20 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-principal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-medium">
                    Plaza de Armas
                  </p>
                  <p class="text-lg font-semibold text-gray-800">
                    25 min caminando
                  </p>
                </div>
              </div>
            </div>

            <!-- Botão Google Maps -->
            <div class="mt-8">
              <a
                href="https://www.google.com.br/maps/place/Hostal+Pachacuteq+Inn/@-13.5301007,-71.9701245,16.92z/data=!4m9!3m8!1s0x916dd5e428066061:0xd4717541e2e1cc6!5m2!4m1!1i2!8m2!3d-13.5298425!4d-71.9698965!16s%2Fg%2F11g7z7vvrr?entry=ttu"
                target="_blank"
                class="w-full bg-principal hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Ver en Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
/* Mobile responsiveness */
@media (max-width: 768px) {
  .lg\:grid-cols-3 {
    grid-template-columns: 1fr;
  }

  .lg\:col-span-2 {
    grid-column: span 1;
  }

  .lg\:grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .text-4xl {
    font-size: 2rem;
  }

  .text-2xl {
    font-size: 1.5rem;
  }
}
</style>
