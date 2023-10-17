<script setup>
 const message ="Welcome. Get ready to master Vue.js 3!";
//  const date = "17th October, 2023"

// what time today?
 const date = new Date()
 const dateString = date.toLocaleString();

 function getData(){
  return "I am good "
 }

 const number = 12;
const person = {
    fname : "john",
    lname : "Doe",
    getName(){
        return this.fname+" "+this.lname;
    }
}

</script>

<template>
 
      <div  >
          <h1 class="text-red-500 bg-yellow-200 " >{{ message }}</h1>
          <h2  >Today is <span>{{ date }}</span></h2>
          <h2  >Today <span>{{ getData() }}</span></h2>
          <h2  > <span>{{ number }}/4 = {{ number/4 }}</span></h2> <!--this is called 
          expraction-->
          <h2  >Person name is  <span>{{ person.getName() }}</span></h2>
      </div>
 
</template>

<style scoped> 

</style>
