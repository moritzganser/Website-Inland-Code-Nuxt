import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false, // Statischer Modus

  modules: ["@nuxtjs/google-fonts", "@nuxt/fonts"],

  googleFonts: {
    families: {
      Roboto: [400, 700],
      "Open+Sans": true,
    },
    display: "swap",
    preload: true,
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  components: true,
});
