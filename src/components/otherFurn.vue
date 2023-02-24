<template>
    <sectionComponentVue>
        <template #product-name>
            <h1>Прочая мебель</h1>
        </template>
        
        <template #product-grid>
            <ul v-for="product in products" :key="product">
                <router-link :to="`/other/${product.id}`">
                    <div class="card w-45 h-full bg-base-100 shadow-xl">
                        <figure><img :src="product.img" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h6 class="card-title">{{ product.name }}</h6>
                            <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
                            <div class="card-actions justify-end">
                                <button class="btn bg-link">Подробнее</button>
                            </div>
                        </div>
                    </div>
                </router-link>
            </ul>
        </template>

    </sectionComponentVue>
</template>

<script setup>
import sectionComponentVue from './sectionComponent.vue';

const products = [
    {
        id: 1,
        name: 'Двери перегородные',
        desc: 'Какое-то описание',
        img: 'src/assets/OtherFurn/1.png'
    },
    {
        id: 2,
        name: 'Мебель для гостинной',
        desc: 'Какое-то описание',
        img: 'src/assets/OtherFurn/2.png'

    },
    {
        id: 3,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/OtherFurn/3.png'

    },
    {
        id: 4,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/OtherFurn/4.png'

    },
    {
        id: 5,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/OtherFurn/5.png'

    },
    {
        id: 6,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/OtherFurn/6.png'

    },
    {
        id: 7,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/OtherFurn/7.png'

    },
    {
        id: 8,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/OtherFurn/8.png'

    },


]
</script>