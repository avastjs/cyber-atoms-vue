<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
<div>
  <ul>
    <li @click="count++">Menu 1</li>
    <li>Menu 2 {{count}}</li>
  </ul>
</div>
</template>

<style scoped>
li {
  color: #888;
}
</style>
