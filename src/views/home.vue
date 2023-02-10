<template>
    <div>
        <mainSectionVue />

        <kitchenSectionVue />

        <closetsSectionVue />

        <otherFurnSectionVue />

    </div>
</template>
  
<script setup>
import headerVue from '../components/header.vue';
import mainSectionVue from '../components/mainSection.vue';
import kitchenSectionVue from '../components/kitchenSection.vue';
import closetsSectionVue from '../components/closetsSection.vue';
import otherFurnSectionVue from '../components/otherFurn.vue'
import footerSectionVue from '../components/footerSection.vue';

</script>
  
<style>
* {
    padding: 0;
    margin: 0;
}
</style>
  