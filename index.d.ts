// This works. and type of 'meow' is inferred properly.
// runtimeConfig: {
//   public: {
//     meow: process.env.meow === "cucu" ? "cucu" : "not a cucu",
//   },
// },
declare module "@nuxt/schema" {
  interface PublicRuntimeConfig {
    meow: "cucu" | "not a cucu";
  }
}
export {};

// Suggested approach on docs does not type public.meow
// It works only if I delete ./server/tsconfig.json
// https://nuxt.com/docs/guide/going-further/runtime-config
//
// declare module "nuxt/schema" {
//   interface PublicRuntimeConfig {
//     meow: "cucu" | "not a cucu";
//   }
// }
// export {};
//
