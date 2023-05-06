<template>
  <div
    id="prompt"
    :class="{ 'hover:bg-[#31041F] rounded-md p-1': style }"
    class="v-full block text-center cursor-pointer relative"
    @click.stop="copy"
  >
    <span class="slate-ish" v-show="prompt.length">Write About </span>
    <span v-for="(text, i) of prompt" v-bind:key="i">
      <span v-bind:class="'text-' + i">
        {{ text + (i == prompt.length - 1 ? '.' : ' ') }}
      </span>
    </span>
  </div>
</template>

<style scoped>
#prompt .text-0 {
  color: rgb(127, 255, 212);
}
#prompt .text-1 {
  color: maroon;
}
#prompt .text-2 {
  color: orange;
}
#prompt .text-3 {
  color: rgb(144, 106, 10);
}
#prompt .text-4 {
  color: green;
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue'
import copyToClipboard from '../assets/copy'
//
// define a prop called 'prompt'
const props = defineProps({
  prompt: {
    type: Array,
    required: true
  },
  style: {
    type: Boolean,
    default: false
  }
})

function copy() {
  let str = props.prompt.join(' ')
  copyToClipboard(str)
}
//
// const emit = defineEmits(['clipboard'])
// onMounted(() => {
//     emit('clipboard', getCombinations());
// })
</script>
