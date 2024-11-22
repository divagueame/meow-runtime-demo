// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      meow: process.env.meow === "cucu" ? "cucu" : "not a cucu",
    },
  },
});
