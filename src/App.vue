<script >
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue';


export default{
  components: {
    Home,
  }
}
</script>

<template>
  <!-- <Home msg="Pinia" /> -->

  <RouterView />
</template>

<style scoped>


</style>
