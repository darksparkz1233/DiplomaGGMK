<template>
    <!-- ! lower boxes -->
    <sectionComponentVue>
        <template #product-name>
            <h1>
                Нижние ящики:
            </h1>
        </template>

        <template #product-grid>
                <ul v-for="product in products" :ket="product">
                    <div class="">
                        <router-link :to="`/upperboxes/${product.id}`">
                            <img :src="product.img"
                                class="w-full h-full cursor-pointer transition ease-in-out hover:-translate-y-7 alt=">
                        </router-link>

                    </div>
                </ul>
        </template>

    </sectionComponentVue>
    <!-- ! upper boxes -->
    <sectionComponentVue>
        <template #product-name>
            <h1>
                Верхние ящики:
            </h1>
        </template>

        <template #product-grid>
            <ul v-for="box in upperBoxes" :ket="box">
                <router-link :to="`/upperboxes/${box.id}`">
                    <div class="">
                        <img :src="box.img"
                            class="w-full h-full cursor-pointer transition ease-in-out hover:-translate-y-7"
                        >
                    </div>
                </router-link>
            </ul>
        </template>
    </sectionComponentVue>


</template>

<script setup>
import sectionComponentVue from '../components/sectionComponent.vue';


const upperBoxes = [

    {
        id: 1,
        name: 'Название мебasdasdели',
        desc: 'Какое-то описание',
        img: 'src/assets/UpperBoxes/1.png'
    },
    {
        id: 2,
        name: 'Назвasdadadsadsadasdание мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/UpperBoxes/2.png'

    },
    {
        id: 3,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/UpperBoxes/3.png'

    },
    {
        id: 4,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/UpperBoxes/4.png'

    },
    {
        id: 5,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/UpperBoxes/5.png'

    },
    {
        id: 6,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/UpperBoxes/6.png'

    },
    {
        id: 7,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/UpperBoxes/7.png'

    },
    {
        id: 8,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/UpperBoxes/8.png'

    },
    {
        id: 9,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/UpperBoxes/9.png'

    },
    {
        id: 10,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/UpperBoxes/10.png'

    },
    {
        id: 11,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/UpperBoxes/11.png'

    },
    {
        id: 12,
        name: 'Название мебели',
        desc: 'Какое-то описание',
        img: 'src/assets/UpperBoxes/12.png'

    },
]
</script>