<template>
  <div>
    <pre>{{config}}</pre>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()

const meow = config.public.meow;
</script>
