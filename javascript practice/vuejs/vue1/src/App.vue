<template>
  <h1>Hello World</h1>
  <h1>{{ 2+2 }}</h1>
  <h1>{{ new Date().getDate() }}</h1> <!--//todays date--> 


  <h1>{{ first_name }}</h1>
  <h1>{{ last_name }}</h1>

  <h3>{{ num1+num2 }}</h3>


   <button @click="getFullName">Click</button>
 </template>


 <script  >
  export default {
    data(){
      return{
        first_name:"Bill",
        last_name:"Gates",
        age:65,

        num1:10,
        num2:20,

        getFullName:()=>{
          alert("Hello ")
        }
      }
    }
  }
 </script>

 <style scoped></style>