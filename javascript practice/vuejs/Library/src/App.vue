<script setup>


// what time today?
 const date = new Date()
 const dateString = date.toLocaleString();

 const profession = "<strong>Laravel Developer</strong>"

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
          <h2  >Today is <span>{{ dateString }}</span></h2>
          <h2  >Today <span>{{ getData() }}</span></h2>
          <h2  > <span>{{ number }}/4 = {{ number/4 }}</span></h2> <!--this is called 
          expraction-->
          <h2  >Person name is  <span>{{ person.getName() }}</span></h2>

          <h1><span v-html="profession"></span></h1> <!--for hide html tag-->
      </div>
 
</template>

<style scoped> 

</style>
