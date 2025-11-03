import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,

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
        {
          name: "google-site-verification",
          content: "ca-pub-3037002420549432",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          async: true,
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3037002420549432",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  components: true,
});
