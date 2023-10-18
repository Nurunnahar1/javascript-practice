<script setup>

 
const num = 16
function evenOrOdd(num){
    if(num%2==0){
        return "Even"
    }
    return "Odd"
}

</script>

<template>
 
      <div  >
       

          <!-- <h2>{{ num }} is {{ evenOrOdd(num) }}</h2> -->
          <h2>{{ num }} is {{ num % 2==0 ? "Even" : "Odd"}}</h2>
      </div>
 
</template>

<style scoped> 

</style>
