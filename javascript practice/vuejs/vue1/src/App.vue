<template>
  <h2>{{ first_name }}</h2>
<h2>{{ last_name }}</h2>
<h2>{{ age }}</h2>
 <button @click="getFullName">Click</button>



</template>




<script setup>
let first_name ="Nasrin"
let last_name = "Muskan"
let age = 28
const getFullName=()=>{
  alert("hi")
}
 
</script>




<style scoped></style>