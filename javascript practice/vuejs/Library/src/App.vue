<script setup>
  import { ref } from "vue";
  const location = "Bogura";
  const weather = ref("s");

</script>

<template>
  <!-- v-if  and  v-show  those are same -->
  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-center text-2xl py-10">Logic in Vue.js</h1>
    <div class="w-1/3 bg-red-200 p-10 flex items-center flex-col space-y-10">
      <h1 class="text-3xl">{{ location }}</h1>

      <div v-show="'s' == weather" id="sunny">
        <h2 class="text-2xl">Weather: Sunny</h2>
        <img
          id=" "
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911203/weather-icon-md.png"
          alt=""
        />
      </div>

      <div v-show="'pc' == weather">
        <h2 class="text-2xl">Weather: Partly Cloudy</h2>
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912718/weather-icon-md.png"
          alt=""
        />
      </div>

      <div v-show="'r' == weather">
        <h2 class="text-2xl">Weather: Rainy</h2>
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913380/weather-icon-md.png"
          alt=""
        />
      </div>

      <div v-show="'t' == weather">
        <h2 class="text-2xl">Weather: Thunderstorm</h2>
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912589/weather-icon-md.png"
          alt=""
        />
      </div>

      <input
        type="text"
        placeholder="Weather Status"
        class="text-center p-5"
        v-model="weather"
      />
    </div>
  </section>

 
</template>

<style scoped></style>