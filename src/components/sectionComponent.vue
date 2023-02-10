<template>
    <div class="flex gap-10 flex-col justify-center items-center  font-raleway font-bold text-4xl pb-4 pr-32 pl-32 pt-11
    ">
        <h1 class="text-3xl">
            <slot name="product-name">

            </slot>
        </h1>
        <!-- ? products grid -->
        <div class="grid gap-4 xl:grid-rows-2 xl:grid-cols-4 lg:grid-rows-1 lg:grid-cols-2 ">
                <slot name="product-grid">

                </slot>
        </div>
    </div>
</template>

<script setup>

</script>