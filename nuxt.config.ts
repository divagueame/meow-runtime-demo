// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Reference for '/css-in-components/2-shared-css-a'
  // features: {
  //   inlineStyles: false,
  // },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // vite: {
  // build: {
  //   rollupOptions: {
  //     output: {
  // manualChunks: (id) => {
  //   if (id.includes("node_modules")) {
  //     // return "cococo";
  //   } else if (id.includes("CatCat")) {
  //     console.log("\n->> Cat: ", id);
  //     return "CAT";
  //   } else if (id.includes("DogDog")) {
  //     console.log("\n->> DOG: ", id);
  //     return "CAT";
  //   }
  //   return null;
  // },
  // if (id.includes('node_modules')) return id.toString().split('node_modules/')[1].split('/')[0].toString();
  //   },
  // },
  // },
  // },
  // runtimeConfig: {
  //   public: {
  //     meow: process.env.meow === "cucu" ? "cucu" : "not a cucu",
  //   },
  // },

  vite: {
    build: {
      // modulePreload: false,
    },
  },
  hooks: {
    "build:manifest": (manifest) => {
      for (const key in manifest) {
        const file = manifest[key];
        if (file.src === "components/GreenGreen.vue") {
          file.preload = false;
          file.prefetch = false;
        }
      }
    },
  },
});
