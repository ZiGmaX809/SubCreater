<template>
  <h1 class="text-3xl font-bold underline">
    <span class=" animate-text">Hello World!</span>
  </h1>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<style scoped>
.animate-text {
  background-image: linear-gradient(
    -225deg,
    #231557 0%, 
    #44107a 29%, 
    #ff1361 67%, 
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  /*text-fill-color: transparent;*/
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>