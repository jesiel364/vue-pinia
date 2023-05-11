
<template>
    <div class='wrapper'>

        <form class='container'>
            <h1 class='form'>Página Home</h1> 

            <h2>Seu nome é: {{ store.name }}</h2>
            <router-link to="/about">Sobre</router-link>
        </form>

       
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { userConfigs } from '@/stores/sets'

const store = userConfigs()
const { name, age } = store

</script>

<style>
body,
html {
    width: 100%;
    max-width: 100vw;
    height: 100%;
    padding: 0;
    margin: 0;
    
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #283E51, #4B79A1);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #283E51, #4B79A1);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.wrapper {

    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    /* background-color: aquamarine; */
    margin-top:100px;

}

form {
    background-color: aliceblue;
    width: 700px;
    height: 350px;
    padding: 16px;
    /* align-items: center; */
}

@media (max-width: 700px) {
  form {
    min-width: 100px;
    display: flex;
    align-items: top;
    height: 100vw;
    
  }

  .wrapper{
    /* height: 100%; */
  }
}
</style>