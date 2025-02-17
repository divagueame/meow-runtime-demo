<template>
  <div>
    <span style="display:none">componentscontent</span>
    <h1>Component loading and rendeing</h1>

    <p>These examples use all default Nuxt SSR rendering.</p>

    <br>
    <hr>

    <div>
      <h2>1. Component only in one page.</h2>
      <p>When a component is only used in this page, Nuxt does not create its own chunk. The code for this component lives inside the chunk of the page where it's being included, in this case in this very same page: 'components.vue'.<br>For example:<br> <b>.output/server/chunks/build-components-CUb0OGg.mjs</b></p>
      On the browser, it will be downloaded with a different filename from: /_nuxt/Bq9EPNjS.js

      <ul>
        <li>This component is used only in one page</li>
        <li>Does not get its own js chunk. It's code its added to the page where it's loaded</li>
      </ul>


      <br><br>
      <p>
        If you inspect the pagesource, it will be included like this:<br>
      </p>
      <b>< link rel="modulepreload" as="script" crossorigin href="/_nuxt/C9sU6ub6.js"></b>

      <BlackBlack />
    </div>

    <hr>

    <div>
      <h2>2. Component in several pages.</h2>
      <p>This component is used in several pages.</p>
      <p>This component gets its own chunk.</p>

      <br><br>
      If you inspect the pagesource of any page where this component is used, the chunk will be included like this:<br><br>
      <b>< link rel="modulepreload" as="script" crossorigin href="/_nuxt/XJXfOmts.js"></b><br><br>

      <!-- Under the hood, nuxt will import it in the page chunk itself and load it. -->
      <!-- <code>import { _ as __nuxt_component_0 } from './BlueBlue-Byv6VI_M.mjs';</code> -->

      <BlueBlue />
    </div>


    <br>
    <hr>

    <div>
      <h2>3. Lazy Component - Lazy but not really lazy</h2>
      <p>This is documented here: <a href="https://nuxt.com/docs/guide/directory-structure/components#dynamic-imports">Dynamic Imports</a></p>
      <p>Nuxt automatically provides Lazy versions of all components. To use them you only need to add the 'Lazy' prefix to your component. <br>For example:</p>
      <p>Nuxt will create a chunk for the component, so it is not bundled in the page chunk itself. The prefiex naming can be a bit misleading. When for example, we lazy load an image, the browser will only download it when it enter the viewport. <b>This is not the case with lazy components.</b> If we just add the compoment to our page, the chunk will be downloaded on the initial page load:</p>

      <code v-text="'<LazyPinkPink />'"></code>
      <p>In most cases, there is no benefit in doing this, unless you explicitly want split the chunk of a page which is too big. Anyway, it will not be lazy at all.</p>

      <LazyPinkPink />
    </div>

    <hr>

    <div>
      <h2>4. Lazy Component - Loading like docs suggest</h2>
      <p>In this example, we have another lazy component: 'LazyOrangeOrange', but it's not being displayed until 'show' is true. This seems to work, when you press the button, you can see the request being made in the network tab for the chunk, in my case <b>/_nuxt/BGZLmNBK.js</b>. </p>

      <div style="padding: 20px; border-radius: 7px; margin-bottom: 20px; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
        <button @click="show = true">Show OrangeOrange</button>
        <LazyOrangeOrange v-if="show" />
      </div>

        However if you see the chunks being downloaded on the initial page load, you will see the same chunk being downloaded. This is caused by the fact that Nuxt automatically injects tags like this at build time:

        <code>< link rel="prefetch" as="script" crossorigin href="/_nuxt/BGZLmNBK.js"></code>

      This has been discussed in this <a href="https://github.com/nuxt/nuxt/discussions/16231">discussion</a> and in this <a href="https://github.com/nuxt/nuxt/issues/13778#issuecomment-2076656036">issue</a>, and <a href="https://github.com/nuxt/nuxt/issues/14584">here</a>.

      <p>This initial chunk request is not used when clicking the button, so even though our component loads lazily, it is downloaded twice.</p>


      <div style="padding: 20px; border-radius: 7px; margin-bottom: 20px; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
        <button @click="show2 = true">Show GreenGreen</button>
        <LazyGreenGreen v-if="show2" />
      </div>


      In order to skip Nuxt adding the link prefetch for the chunk of the component, we can do it by adding this to our nuxt.config.ts file:
      <pre>
      <code>
  hooks: {
    "build:manifest": (manifest) => {
      for (const key in manifest) {
        const file = manifest[key];
        // Remove the if-statement in real life
        if (file.src === "components/GreenGreen.vue") { 
          file.preload = false;
          file.prefetch = false;
        }
      }
    },
  },
      </code>
      </pre>

      <!-- <LazyOrangeOrange /> -->

      <!-- <p>This component is used in 'components' and in 'index'</p> -->
      <!-- <p>This component gets its own chunk.<br> -->
      <!--   Here, even though we have use 'Lazy', it -->
      <!-- </p> -->
<!-- https://github.com/nuxt/nuxt/discussions/16231 --->
<!-- https://github.com/nuxt/nuxt/issues/14584 -->
    </div>

    <hr>

    <!-- <div> -->
    <!--   <button @click="show2 = true">Show DugDug</button> -->
    <!--   <LazyDugDug v-if="show2" /> -->
    <!---->
    <!--   <p>This component is used only in 'components'</p> -->
    <!--   <p>This component gets its own chunk, but the browser does not pull it until 'show2' is set to true</p> -->
    <!-- </div> -->


    <NuxtLink to="/" no-prefetch>Home</NuxtLink>
  </div>
</template>


<script setup lang="ts">
const show = ref(false)
const show2 = ref(false)
</script>
