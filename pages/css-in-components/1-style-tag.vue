<template>
  <div>
    <span style="display:none">componentscontent</span>
    <h1>Component loading and rendeing</h1>

    <p>These examples use all default Nuxt SSR rendering.</p>

    <br>
    <hr>

    <div>
      <h2 class="yellow-outline">1. Default style tag. Only once here.</h2>
        <p>By default, when you add a style tag in a component, that will create a css file and be downloded next to the page js chunk. </p>
        <p>If you inspect the source code, you will see the very same css content also inlined in the html: </p>
        <code>
          < style >.never-used{background-color:#f0f8ff;outline:solid #9370db}.yellow-outline{outline:2px solid #ff0}< / style >
        </code>
          <p> We can even see that Nuxt didn't do any magic.
          The classes that were never used were also sent to the use.</p>
    </div>

    <hr>

    <NuxtLink to="/css-in-components/2-shared-css-a" no-prefetch>2.Css - Same CSS classes in different pages</NuxtLink>
  </div>
</template>

<style>
.never-used {
  outline: mediumpurple solid;
  background-color:aliceblue;
}

.yellow-outline {
  outline: yellow 2px solid;
}
</style>
