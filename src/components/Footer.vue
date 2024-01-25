<template>
  <footer class="bg-gray-800 text-white py-8 mx-auto">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo -->
        <div class="a">
          <img class="a w-[40%] mb-4" src="/img/logo.png" alt="Logo">
        </div>

        <!-- Informações da Empresa -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Sobre Nosotros</h3>
          <p class="text-gray-400 mb-2">Somos una empresa dedicada a la hostelería</p>
          <p class="text-gray-400">
            HOSTAL PACHACUTEQ INN <br>Alameda Pachacuteq N° -Cusco-Perú
          </p>
          <p class="text-gray-400">hostalpachacuteqin@gmail.com</p>
        </div>

        <!-- Redes Sociais -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Redes Sociales</h3>
         
            <a href="#" class="text-gray-400 hover:text-white transition">
              <div class="aa"><img class="w-10" src='/img/facebook.png' alt=""></div>
            </a>
          
        </div>
      </div>

      <!-- Direitos Autorais -->
      <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        <p>
          &copy; 2024 Hostal Pachacuteq Inn ®. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
/* Estilos Responsivos */
@media (max-width: 800px) {
  footer  {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .a  { 
    margin:0 auto ;
  }
  .aa  { 
    margin-left: 45%;
    text-align: center;
  }
}
</style>
