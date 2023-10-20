<script setup>
const location = "Bogura"
const weather = "t"
</script>

<template>
  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-center text-2xl py-10">Logic in Vue.js</h1>
    <div class="w-1/3 bg-red-200 p-10 flex items-center flex-col space-y-10">
      <h1 class="text-3xl">{{ location }}</h1>
      <h2 class="text-2xl" v-if="'s'==weather" >Weather: Sunny</h2>
      <h2 class="text-2xl" v-if="'pc'==weather" >Weather: Partly Cloudy</h2>
      <h2 class="text-2xl" v-if="'r'==weather">Weather: Rainy</h2>
      <h2 class="text-2xl" v-if="'t'==weather">Weather: Thunderstorm</h2>
   
      <img v-if="'s'==weather"  src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911203/weather-icon-md.png" alt="">
      <img v-if="'pc'==weather"  src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912718/weather-icon-md.png" alt="">
      <img v-if="'r'==weather"  src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913380/weather-icon-md.png" alt="">
      <img v-if="'t'==weather" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912589/weather-icon-md.png" alt="">
    </div>
  </section>
</template>

<style scoped></style>