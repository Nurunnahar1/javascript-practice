<script setup>
 const bgOrange = 'background-color:    rgb(251,146,60,1); color: whitte; font-size:24px'
 const bgIndigo = 'background-color:    rgb(129,140,248, 1)'
 const bgGreen = 'background-color:    rgb(52,211,153, 1)'


 const bgRed = 'background-color: rgba(220,38,38,1)'
 const bgDarkGreen = 'background-color: rgba(5,150,105,1)'
 const weekday = true

</script>

<template>
    <section class="container mx-auto">
      <h1 class="text-center text-3xl py-12">Class & Style Binding</h1>
  
      <section class="flex space-x-10">
        <div class="w-1/3  h-16" :style="[bgOrange]">Hello I am Nasrin.......</div>
        <div class="w-1/3  h-16" :style="[bgIndigo]"></div>
        <div class="w-1/3  h-16" :style="[bgGreen]"></div>
      </section>
  
      <section class="mt-10  ">
        <div class=" h-16 flex items-center justify-center text-white" :style="weekday==true?bgRed:bgDarkGreen">
          It's a weekday!
        </div>
      </section>
  
      <section class="mt-10 hidden">
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <p class="font-bold">Our privacy policy has changed</p>
          <p class="text-sm">Make sure you know how these changes affect you.</p>
        </div>
      </section>
    </section>
  </template>
  

<style scoped>
</style>
