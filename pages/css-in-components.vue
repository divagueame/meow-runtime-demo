
<template>
  <div>
    <span style="display:none">componentscontent</span>
    <h1>Component loading and rendeing</h1>

    <p>These examples use all default Nuxt SSR rendering.</p>

    <br>
    <hr>

    <div>
      <h2 clss="yellow-outline">1. Default</h2>
      <p></p>
    </div>

    <hr>

    <NuxtLink to="/" no-prefetch>Home</NuxtLink>
  </div>
</template>

<style>
.never-used {
  outline: yellow 2px solid;
  background-color:aliceblue;
}

.yellow-outline {
  outline: yellow 2px solid;
}
</style>
