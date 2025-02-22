<template>
  <div>
    <h1>2.Css - Same CSS classes in different pages</h1>

    <br>
    <hr>

    <div>
      <h2 class="shared-class">2. When the same css classes appears</h2>
      <p>Let's say we added the same class in two different pages. How will it behave?</p>
      <p>Well, even though we </p>
      <BlockWithStyleTagClass />
    </div>

    <NuxtLink class="shared-class" to="/css-in-components/2-shared-css-b" no-prefetch>Here it's the other page with the same css class</NuxtLink>


    This duplication of css has been discussed in this <a href="https://github.com/nuxt/nuxt/issues/21821">here</a>. It's possible to remove this Nuxt feature by adding this to nuxt.config:
<code>
export default defineNuxtConfig({
  features: {
    inlineStyles: false,
  },
...
</code>
  </div>
</template>

<style>
.shared-class {
  outline: red 2px solid;
}
</style>
