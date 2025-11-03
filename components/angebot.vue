<template>
  <div>
    <div></div>

    <div id="dienstleistungen_ziel"></div>

    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div
            class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 mt-[150px]"
          >
            <h2
              class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
            >
              Entwickelt für Unternehmen wie Sie!
            </h2>
          </div>

          <div class="flex justify-center mb-[150px]">
            <!-- Pricing Card -->
            <div
              class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 class="mb-4 text-2xl font-semibold">
                Single Packet (Onepager)
              </h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Dieses Paket richtet sich speziell an kleine und mittlere
                Unternehmen, die einen klaren, seriösen und modernen Webauftritt
                benötigen – ohne unnötigen Schnickschnack.
              </p>

              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">199 €</span>
                <span class="text-gray-500 dark:text-gray-400"
                  >/Einmahlzahlung</span
                >
              </div>

              <!-- List -->
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li
                  class="flex items-center space-x-3"
                  v-for="(item, i) in features"
                  :key="i"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>{{ item }}</span>
                </li>
              </ul>

              <p
                class="mb-[25px] font-light text-gray-500 sm:text-lg dark:text-gray-400"
              >
                1. Sie schreiben mir eine Email mit Ihrer Idee oder
                Zielsetzung.<br />
                2. Gemeinsam definieren wir die Inhalte.<br />
                3. Ich erstelle Ihre persönliche Unternehmensseite –
                professionell, schlicht und auf den Punkt.
              </p>

              <a
                @click="scrollToKontakte"
                class="cursor-pointer border-white border-[3px] text-white bg-primary-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const features = [
  "Onepager - perfekt für eine übersichtliche Unternehmenswebsite",
  "Verlinkungen - um Ihre Kunden zielführend zu Ihren externen Inhalten weiterzuleiten",
  "Einbindungen - Ihre Bilder, Videos und ähnliche Inhalte finden auch Ihren Platz",
  "Effekte - mit dezenten Effekten modernisiere ich Ihre Website",
  "Responsiv Design - die Website wird auf jede Bildschirmgröße angepasst",
  "Vorlage Rechtstexte - passend zu Ihrer Website entwerfe ich ein simples Design für Ihre Rechtstexte und binde diese auf Ihrer Unternehmenswebsite ein",
];

function scrollToKontakte() {
  const target = document.getElementById("kontakte_ziel");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, null, " ");
  }
}
</script>

<style>
.btn-donate {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  padding: 0.9em 1.6em;
  height: 50px;
  font-size: var(--size, 1rem);
  font-weight: 1000;
  transition: 0.8s;
  background-size: 280% auto;
  background-image: linear-gradient(
    325deg,
    rgb(222, 166, 0) 0%,
    rgb(255, 222, 36) 55%,
    rgb(222, 166, 0) 90%
  );
  border: none;
  border-radius: 0.5em;
  color: rgb(0, 0, 0);
  box-shadow: 0px 0px 20px rgba(255, 234, 0, 0.868),
    0px 5px 5px -1px rgba(253, 207, 0, 0.25),
    inset 4px 4px 8px rgba(255, 234, 0, 0.868),
    inset -4px -4px 8px rgba(253, 207, 0, 0.25);
}

.btn-donate:hover {
  background-position: right top;
}

.btn-donate:is(:focus, :focus-visible, :active) {
  outline: none;
  box-shadow: 0 0 0 3px black, 0 0 0 6px rgb(222, 166, 0);
}

@media (prefers-reduced-motion: reduce) {
  .btn-donate {
    transition: linear;
  }
}
</style>
