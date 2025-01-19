<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from './components/navBar.vue';
</script>

<template>
  <div class="big">
    <navBar></navBar>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.big{
  display: flex;
  flex-wrap: nowrap;
  
}

</style>
