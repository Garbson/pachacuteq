<template>
  <footer class="bg-quarto-escuro text-quarto-branco py-5 mx-auto">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo -->
        <div class="a">
          <img class="a w-[40%] mb-4" src="/img/logo.png" alt="Logo">
        </div>

        <!-- Informações da Empresa -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Sobre Nosotros</h3>
          <p class="text-quarto-dourado mb-2">Somos una empresa dedicada a la hostelería</p>
          <p class="text-quarto-dourado">
            HOSTAL PACHACUTEQ INN <br>Alameda Pachacuteq N° -Cusco-Perú
          </p>
          <p class="text-quarto-dourado">hostalpachacuteqin@gmail.com</p>
        </div>

        <!-- Redes Sociais -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Redes Sociales</h3>
         
            <a href="#" class="text-quarto-dourado hover:text-quarto-branco transition">
              <div class="aa"><img class="w-10" src='/img/facebook.png' alt=""></div>
            </a>
          
        </div>
      </div>

      <!-- Direitos Autorais -->
      <div class="border-t border-quarto-terracota mt-8 pt-6 text-center text-quarto-dourado">
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
