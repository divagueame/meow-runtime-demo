<template>
  <h1>Nuxt Link prefetch</h1>
  <p>This behaviour is documented here: <a href="https://nuxt.com/docs/api/components/nuxt-link#prefetch-links">Nuxt Link router.beforeEach</a></p>
  <NuxtLink to="/nuxtlinktarget1">Go to '/nuxtlinktarget1'. Default NuxtLink behaviour prefetches any NuxtLinks visible on the page. There's an example at the bottom of the page showing how the file is fetched when the link enters the viewport. Open your network tab to see request happening as you scroll down.</NuxtLink><br>
  <NuxtLink to="/nuxtlinktarget2" no-prefetch>Go to '/nuxtlinktarget2'. No prefetch</NuxtLink><br>
  <br><div style="height:3500px"></div>
  <NuxtLink to="/nuxtlinktarget3">The JS files for this page leading to this NuxtLink will load when entering the viewport.</NuxtLink>
</template>
