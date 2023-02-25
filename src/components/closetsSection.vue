<template>
    <sectionComponentVue>
        <template #product-name>
            <h1>
                Шкафы
            </h1>
        </template>

        <template #product-grid>
            <ul v-for="product in products" :key="product">
                <router-link :to="`/closets/${product.id}`">
                    <div class="card w-45 h-full bg-base-100 shadow-xl">
                        <figure><img :src="product.img" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{{ product.name }}</h2>
                            <p class="text-base">
                               <!-- {{ product.desc }} -->
                            </p>
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
        name: 'Шкаф угловой',
        desc: 'Какое-то описание',
        img: 'src/assets/Closets/1.png'
    },
    {
        id: 2,
        name: 'Белый, современный шкаф',
        desc: 'Какое-то описание',
        img: 'src/assets/Closets/2.png'

    },
    {
        id: 3,
        name: 'Широкий, чёрно-белый шкаф',
        desc: 'Какое-то описание',
        img: 'src/assets/Closets/3.png'

    },
    {
        id: 4,
        name: 'Бежевый, просторный шкаф',
        desc: 'Какое-то описание',
        img: 'src/assets/Closets/4.png'

    },

]
</script>
