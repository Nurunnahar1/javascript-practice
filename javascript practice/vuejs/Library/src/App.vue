<script setup>
const bgOrange = "bg-orange-400";
const bgIndigo = "bg-indigo-400";
const bgGreen = "bg-green-400";
const textColor = "text-white";

const bgRed = "bg-red-600";
const bgDarkGreen = "bg-green-600";
const weekend = true;

const colors = {
    bgColor:'bg-teal-100',
    borderColor:'border-teal-500',
    textColor:'border-t-4'
}

const messageType = 'info';

if('error' == messageType){
    colors.bgColor='bg-red-100';
    colors.textColor='text-red-900';
    colors.borderColor='border-red-500';
}
 
if('warning' == messageType){
    colors.bgColor='bg-yellow-900';
    colors.textColor='text-red-900';
    colors.borderColor='border-red-500';
}

if('info' == messageType){
    colors.bgColor='bg-green-300';
    colors.textColor='text-red-900';
    colors.borderColor='border-red-500';
}


</script>

<template>
  <section class="container mx-auto">
    <h1 class="text-center text-2xl py10">Class & Style Binding</h1>

    <section class="flex space-x-10 mb-4">
      <div class="w-1/2 h-16" :class="[bgOrange, textColor]">Hello</div>
      <div class="w-1/2 h-16" :class="bgIndigo"></div>
      <div class="w-1/2 h-16" :class="bgGreen"></div>
    </section>

    <section>
      <div
        class="h-16 flex items-center justify-center text-white"
        :class="weekend == true ? bgDarkGreen : bgRed"
      >
        It's a weekday!
      </div>
    </section>
    <section class="mt-10  ">
      <div
        class="  rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"  :class="[colors.bgColor,colors.borderColor,colors.textColor]"
      >
        <p class="font-bold">Our privacy policy has changed</p>
        <p class="text-sm">Make sure you know how these changes affect you.</p>
      </div>
    </section>
  </section>
</template>

<style scoped>
</style>
