<script setup>
 const image = "https://cdn.pixabay.com/photo/2023/09/20/20/17/skyline-8265564_960_720.jpg"
 const title = "Water surrounded by trees and mountains"
 const link = "https://unsplash.com/photos/NRQV-hBF10M" 

</script>

<template>
 
       <section>
            <h1>Data project</h1>
            <section>
                <div>
                    <!-- <img v-bind:title="title" v-bind:src="image" alt=""> -->
                    <img :title="title" :src="image" :alt="title">
                    <h2>{{ title }}</h2>
                    <a target="_blank" :href="link">Image Source</a>
                </div>
            </section>
       </section>
 
</template>

<style scoped> 

</style>
