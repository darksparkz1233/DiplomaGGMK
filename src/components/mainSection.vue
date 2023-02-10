<template>
    <div>
        <!-- ? carousel -->
        <carousel :items-to-show="1" wrap-around="true">
            <template #slides>
                <slide v-for="slide in slides" :key="slide">
                    <div>
                        <img :src="slide.bg" alt="">
                    </div>
                    
                </slide>
            </template>
        </carousel>


    </div>
</template>



<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slides = [
    {
        bg: 'src/assets/slide1.png'
    },
    {
        bg: 'src/assets/slide2.png'
    },
    {
        bg: 'src/assets/slide3.png'
    }
]

</script>