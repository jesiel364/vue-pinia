<script setup>
import { useCounterStore } from "@/stores/counter"
import { ref } from 'vue'

// const props = defineProps({ msg: String })

const store = useCounterStore()
const { count, doubleCount, increment } = store 


setTimeout(() => {
  store.increment()
}, 1000)

// const doubleValue = computed(() => store.doubleCount)

// alert(count)

// const { count } = storeToRefs(main)

// const { increment } = mapActions(useCounterStore, ["increment"])

</script>

<template>
<h1>Página Home</h1>
<button @click="store.increment()">Increment</button>
</template>