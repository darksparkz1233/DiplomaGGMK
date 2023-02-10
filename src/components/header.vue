<template>
  <div
    class="flex bg-white w-full justify-between items-center xs:justify-between gap-4 xs:p-10 xs:pl-5 xs:pb-5 xs:pt-6 md:pt-4 md:pb-4 md:pr-32 md:pl-32">

    <!-- ? burger menu -->
    <div class="flex xs:text-1xl  justify-center sm:text-2xl md:text-2xl font-bold flex-col">
      <Slide :closeOnNavigation="true" noOverlay class="">

        <router-link to="/home" class="text-link hover:underline">
          Проекты
        </router-link>

        <router-link to="/kitchens" class="text-link hover:underline">
          Кухни
        </router-link>

        <router-link to="/closets" class="text-link hover:underline">
          Шкафы
        </router-link>

        <router-link to="/other" class="text-link hover:underline">
          Прочяя мебель
        </router-link>

        <h1 class="text-black">
          Сделай сам
        </h1>

        <router-link to="/upperboxes" class="ml-4 text-link hover:underline">
          Верхние ящики
        </router-link>

        <router-link to="/lowerboxes" class="ml-4 text-link hover:underline">
          Нижние ящики
        </router-link>

        

      </Slide>
    </div>
    <!-- ? header title -->
    <div class="xs:hidden sm:block sm:text-2xl md:text-2xl font-bold flex-col ">

      <a href="#" class="font-raleway">
        <h1 class="">
          Мебель для души
        </h1>
      </a>
      <a href="#">
        <h3 class="">
          Мебель, которая греет глаз и душу! ❤️
        </h3>
      </a>
    </div>
    <!-- ? cart icon -->
    <div class="cursor-pointer">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg> -->
    </div>

  </div>
</template>



<script setup>
import { Slide } from 'vue3-burger-menu'
import router from '../router';

</script>

<style >
.bm-burger-button {
  /* position: fixed; */
  /* width: 36px;
      height: 30px;
      left: 36px;
      top: 36px; */
  cursor: pointer;
}

.bm-burger-bars {
  background-color: #000000;
}

.line-style {
  height: 10%;
  left: 0;
  right: 0;
}

.cross-style {
  top: 12px;
  right: 2px;
  cursor: pointer;
}

.bm-cross {
  background: #000;
}

.bm-cross-button {
  height: 24px;
  width: 24px;
}

.bm-menu {
  height: 100%;
  /* 100% Full-height */
  width: 0;
  /* 0 width - change this with JavaScript */
  position: fixed;
  /* Stay in place */
  z-index: 1000;
  /* Stay on top */
  top: 0;
  left: 0;
  background-color: white;
  border: black 1px solid;
  /* Black*/
  overflow-x: hidden;
  /* Disable horizontal scroll */
  padding-top: 60px;
  /* Place content 60px from the top */
  transition: 0.5s;
  /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}

.bm-item-list>* {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}

.bm-item-list>*>span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
</style>