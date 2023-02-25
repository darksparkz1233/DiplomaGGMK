<template>

    <sectionComponentVue>
        <template #product-name>
            <h1>
                Нижние ящики:
            </h1>
        </template>

        <template #product-grid>
            <ul v-for="product in products" :key="product">
                <div class="">
                    <router-link :to="`/lowerboxes/${product.id}`">
                        <div class="card w-45 bg-base-100 shadow-xl">
                            <figure><img :src="product.img" alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">Нижний ящик №{{ product.id }}</h2>
                                <div class="card-actions justify-end">
                                    <button class="btn bg-link">Подробнее</button>
                                </div>
                            </div>
                        </div>
                    </router-link>

                </div>
            </ul>
        </template>

    </sectionComponentVue>
</template>

<script setup>
import sectionComponentVue from '../../components/sectionComponent.vue';
const products = [
    {
        id: 1,
        name: 'Название мебasdasdели',
        desc: 'Какое-то описание',
        img: 'src/assets/LowerBoxes/1.png'
    },
    {
        id: 2,
        name: 'Назвasdadadsadsadasdание мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/LowerBoxes/2.png'

    },
    {
        id: 3,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/LowerBoxes/3.png'

    },
    {
        id: 4,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/LowerBoxes/4.png'

    },
    {
        id: 5,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/LowerBoxes/5.png'

    },
    {
        id: 6,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/LowerBoxes/6.png'

    },
    {
        id: 7,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/LowerBoxes/7.png'

    },
    {
        id: 8,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/LowerBoxes/8.png'

    },
    {
        id: 9,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/LowerBoxes/9.png'

    },
    {
        id: 10,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/LowerBoxes/10.png'

    },
    {
        id: 11,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/LowerBoxes/11.png'

    },
]
</script>