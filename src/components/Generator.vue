<template>
  <div>
    <button class="button-64" role="button" @click.stop="generatePrompt">
      <span class="text">Generate!</span>
    </button>
  </div>
</template>

<style scoped>
/* CSS */
.button-64 {
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  /* box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px; */
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

.button-64:active,
.button-64:hover {
  outline: 0;
}

.button-64 span {
  /* background-color: rgb(5, 6, 45); */
  background-color: rgb(30, 0, 30);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.button-64:hover span {
  background: none;
}
.button-64:active span {
  color: rgb(30, 0, 30);
}

@media (min-width: 768px) {
  .button-64 {
    font-size: 24px;
    min-width: 196px;
  }
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue'
import { makePrompt, getCombinations } from '../assets/generator'

const emit = defineEmits(['prompt', 'combinations'])

function generatePrompt() {
  emit('prompt', makePrompt())
}

onMounted(() => {
  emit('combinations', getCombinations())
})
</script>
