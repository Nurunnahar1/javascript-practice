<script setup>

const images = [
    {
        image:"https://cdn.pixabay.com/photo/2023/09/20/20/17/skyline-8265564_960_720.jpg",
        title:"Water surrounded by trees and mountains",
        link:"https://unsplash.com/photos/NRQV-hBF10M"
    }
]


//  const image = "https://cdn.pixabay.com/photo/2023/09/20/20/17/skyline-8265564_960_720.jpg"
//  const title = "Water surrounded by trees and mountains"
//  const link = "https://unsplash.com/photos/NRQV-hBF10M" 

</script>

<template>
 
       <section>
            <h1>Data project</h1>
            <section>
                <div>
                    <img :title="images[0].title" :src="images[0].image" :alt="images[0].title">
                    <h2>{{  images[0].title }}</h2>
                    <a target="_blank" :href="images[0].link">Image Source</a>
                </div>
            </section>
       </section>
 
</template>

<style scoped> 

</style>
