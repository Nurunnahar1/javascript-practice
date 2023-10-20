<script setup>
const location = "Bogura";
const weather = "s";
</script>

<template>
  <!-- v-if  and  v-show  those are same -->
  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-center text-2xl py-10">Logic in Vue.js</h1>
    <div class="w-1/3 bg-red-200 p-10 flex items-center flex-col space-y-10">
      <h1 class="text-3xl">{{ location }}</h1>

      <template v-if="'s' == weather">
        <h2 class="text-2xl">Weather: Sunny</h2>
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911203/weather-icon-md.png"
          alt=""
        />
      </template>

      <template v-if="'pc' == weather">
        <h2 class="text-2xl">Weather: Partly Cloudy</h2>
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912718/weather-icon-md.png"
          alt=""
        />
      </template>

      <template v-if="'r' == weather">
        <h2 class="text-2xl">Weather: Rainy</h2>
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913380/weather-icon-md.png"
          alt=""
        />
      </template>

      <template v-if="'t' == weather">
        <h2 class="text-2xl">Weather: Thunderstorm</h2>
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912589/weather-icon-md.png"
          alt=""
        />
      </template>
    </div>
  </section>
</template>

<style scoped></style>