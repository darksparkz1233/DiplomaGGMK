<template>
  <div class="grid justify-center  xl:grid-rows-2 xl:grid-cols-2 lg:grid-rows-1 lg:grid-cols-2 font-raleway font-bold">
    <!-- ? product image & title -->
    <div class="flex flex-col justify-center items-center pt-20 ">
      <img class="" :src="queryProduct.img" alt="">
      <h1 class="text-3xl">
        {{ queryProduct.name }}
      </h1>
    </div>

    <!-- ? modal window -->
    <div v-if="isOpen" class="text-2xl  fixed z-50 top-0 left-0 h-full w-full p-10 bg-white ">
      <button @click="closeModal">
        X
      </button>
      <div class=" flex flex-col gap-16 justify-center items-center ">
        <h1>Укажите свои контактные данные:</h1>

        <div class="flex flex-col gap-4 justify-center items-center">
          <label for="">Имя:</label>
          <input class="bg-input h-10 w-96 rounded-xl p-2" type="text">

          <label for="">Телефон:</label>
          <input class="bg-input h-10 w-96 rounded-xl p-2" type="phone">

          <label for="">Email:</label>
          <input class="bg-input h-10 w-96 rounded-xl p-2" type="text">
        </div>
        <!-- ? send form data btn -->
        <div>
          <button class="text-white text-base p-4 rounded-2xl bg-link">
            Отправить!
          </button>
        </div>
      </div>
    </div>

    <!-- ? product description -->
    <div class="flex w-full xl:break-words flex-col justify-center gap-6 xs:p-10">
      <h1 class="text-2xl">
        О продкуте:
      </h1>
      <p class="text-md">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus beatae optio, tenetur saepe
        nihil officia repellat autem nam, aut sequi facere consectetur incidunt obcaecati at quis natus
        doloremque delectus? Odio nemo odit quae sequi quidem, velit ducimus illo aliquam reprehenderit natus
        iusto et laborum, dolore eum consequuntur debitis dolor eaque harum voluptatum cupiditate assumenda
        totam optio incidunt exercitationem. Exercitationem fugiat recusandae modi magnam repellendus accusamus
        consectetur similique. Fugiat id doloremque officiis expedita, quos iste. Tenetur, ratione rem ipsam
        facilis excepturi ipsa alias ab tempore cupiditate velit nostrum quidem, impedit provident.
      </p>
      <!-- ? product order & add to cart btns -->
      <div class="flex gap-5">
        <button @click="openModal" class="text-white p-4 rounded-2xl bg-link">
          Заказать!
        </button>
        <button class="text-link border p-4 rounded-2xl bg-white">
          В Корзину!
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const queryProduct = ref({})
const isLoading = ref(true)
const route = useRoute()

// TODO modal window:
let isOpen = ref(false)

let openModal = () => {
  isOpen.value = !isOpen.value
}

let closeModal = () => {
  isOpen.value = false
}


onMounted(async () => {
  const result = await fetch(`http://localhost:3000/diy/${route.params.id}`)
  const response = await result.json()
  console.log(response);
  queryProduct.value = response
  isLoading.value = false
})
</script>
