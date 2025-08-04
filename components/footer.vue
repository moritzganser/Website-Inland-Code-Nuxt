<template>
    <footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl pt-[100px]">
        
        <!-- Linker und rechter Bereich nebeneinander -->
        <div class="md:flex md:justify-between">
          
          <!-- Linker Block -->
          <div class="mb-6 md:mb-0">
            <a href="../pages/index.vue" class="flex items-center pb-[15px]">
              <p class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ navbar_headline_js_footer }}</p>
            </a>
            <p class="text-white text-[15px] w-[550px]">
              Ich gestalte Ihnen eine Website, die auf den ersten Blick überzeugt.
              Sie ist übersichtlich, benutzerfreundlich und auf Ihre Wünsche abgestimmt.
              Ihre Kunden finden schnell, was sie suchen – und Sie gewinnen Vertrauen.
            </p>
          </div>
  
          <!-- Rechter Block (Legal) -->
          <div class="ml-auto">
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Rechtstexte</h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <NuxtLink to="/impressum" class="hover:underline">Impressum</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/datenschutz" class="hover:underline">Datenschutz</NuxtLink>
              </li>
            </ul>
          </div>
  
        </div>
  
        <!-- Trennlinie -->
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  
        <!-- Footer Bottom (Text & Icons) -->
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 <a href="https://inlandcode.de" class="hover:underline">Inland Code</a>. Alle Rechte vorbehalten.
          </span>
  
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="mailto:info@inlandcode.de" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <img class="w-7 h-7" src="../public/images/postfach_weiß.png" alt="E-Mail" />
            </a>
            <a href="https://www.instagram.com/inlandcode_web" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <img class="w-7 h-7" src="../public/images/insta_weiß.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  const navbar_headline_js_footer = ref('<Inland Code>')
  </script>
  