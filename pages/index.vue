<template>
  <div>
    <span style="display:none">indexcontent</span>
    <h1>Nuxt component loading, serving, fetching and chunking</h1>
    <h3>A Practical Guide</h3>
    <NuxtLink to="/components" no-prefetch>How Nuxt loads and bundles components</NuxtLink><br>
    <NuxtLink to="/css-in-components/1-style-tag" no-prefetch>How Nuxt loads and bundles css</NuxtLink><br>
    <NuxtLink to="/nuxtlink" no-prefetch>NuxtLink component</NuxtLink>

    <code>
      yarn build && yarn preview
    </code>
    <br>

    <p>To see how Nuxt will bundle your application files:</p>
    <code>npx nuxi analyze</code>
    <h1>{{config}}</h1>
    <p>
      http://localhost:3000/client
    </p>
  </div>
</template>
<script setup lang="ts">

const config = useRuntimeConfig()
</script>
