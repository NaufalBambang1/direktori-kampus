import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_BASE_URL: '/api-campus'
    }
  },
  nitro: {
    devProxy: {
      "/api-campus": {
        target: "https://apicampusdir.civitas.id",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-campus/, ""),
      },
    },
  },
  css: ['~/assets/css/tailwind.css','@fortawesome/fontawesome-free/css/all.min.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxt/icon']
})