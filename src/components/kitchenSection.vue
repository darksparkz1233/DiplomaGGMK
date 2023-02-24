<template>
    <sectionComponentVue>
        <template #product-name>
            <h1>Кухни</h1>
        </template>

        <template #product-grid>
            <ul v-for="product in products" :key="product">
                <router-link :to="`/kitchens/${product.id}`">
                    <div class="card w-45 bg-base-100 shadow-xl">
                        <figure><img :src="product.img" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{{ product.name }}</h2>
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
        name: 'Кухня со стильной перегородкой',
        desc: 'Какое-то описание',
        img: 'src/assets/Kitchen/1.png'
    },
    {
        id: 2,
        name: 'Необыкновенной красоты кухня',
        desc: 'Какое-то описание',
        img: 'src/assets/Kitchen/2.png'

    },
    // {
    //     id: 3,
    //     name: 'Название мебели',
    //     desc: 'Какое-то описание',
    //     img: 'src/assets/Kitchen/3.png'

    // },
    {
        id: 4,
        name: 'Стильная, брутальная кухня',
        desc: 'Какое-то описание',
        img: 'src/assets/Kitchen/4.png'

    },
    {
        id: 5,
        name: 'Белая, современная кухня',
        desc: 'Какое-то описание',
        img: 'src/assets/Kitchen/5.png'

    },
    {
        id: 6,
        name: 'Розовая, стильная кухня',
        desc: 'Какое-то описание',
        img: 'src/assets/Kitchen/6.png'

    },
    {
        id: 7,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/Kitchen/7.png'

    },
    {
        id: 8,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/Kitchen/8.png'

    },
]
</script>