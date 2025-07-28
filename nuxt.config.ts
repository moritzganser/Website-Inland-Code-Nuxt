import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts', '@nuxt/fonts'],
  googleFonts: {
    families: {
      Roboto: [400, 700],
      'Open+Sans': true,
    },
    display: 'swap',
    preload: true,
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  components: true
});