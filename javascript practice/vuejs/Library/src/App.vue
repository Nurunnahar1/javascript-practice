<script setup>
 const bgOrange = "bg-orange-400"
 const bgIndigo = "bg-indigo-400"
 const bgGreen = "bg-green-400"
 const textColor = "text-white"

const bgRed = "bg-red-600"
const bgDarkGreen = "bg-green-600"
const weekend = true


</script>

<template>
 <section class="container mx-auto ">
    <h1 class="text-center text-2xl py10">Class & Style Binding</h1>

    <section class="flex space-x-10 mb-4">
        <div class="w-1/2  h-16" :class="[bgOrange,textColor]">Hello</div>
        <div class="w-1/2  h-16" :class="bgIndigo"></div>
        <div class="w-1/2  h-16" :class="bgGreen"></div>
         
    </section>
    
    <section>
        <div class="  h-16 flex items-center justify-center text-white" :class="weekend==true?bgDarkGreen:bgRed">It's a weekday!</div>
    </section>

 </section>
</template>

<style scoped> 

</style>
