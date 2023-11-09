<script setup>
 const message = 'Welcome to vuejs 3'


 //access method data
 const date = '21-10-2023'
 function getDate (){
  const date = new Date();
  // return date.getFullYear()
  // return date.getDay()
  // return date.getHours()
  // return date.getMinutes()
  // return date.getSeconds()
  return date.toDateString()
}


// import {data} from './data/data'
import data from './data/data'
</script>

<template>
 <!-- <h1>{{ message }}</h1>
 <h3>{{ getDate() }}</h3>

 <h1>{{ data.message }}</h1>
 <h1>{{ data.date }}</h1>
 <p>You have {{ data.tasks.length }} tasks</p>
 <p>You have {{ data.tasks[2] }} tasks</p> -->
 <h1>{{ data.message }}</h1>
 <p>Today is <span>{{ data.date }}</span></p>
 
</template>

<style scoped>
 
</style>
