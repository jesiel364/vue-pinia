import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userConfigs = defineStore('sets', () => {
  const name = ref("João")
  const age = ref(32)
 

  return { name, age}
})
