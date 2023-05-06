<style>
#prompt {
  font-family: Ubuntu, Verdana, Geneva, Tahoma, sans-serif;
}
</style>

<template>
  <main class="flex flex-col items-center justify-center relative z-20 my-auto h-full">
    <!-- generate button -->
    <Generator v-on:prompt="handleNewPrompt($event)" v-on:combinations="combinations = $event" />
    <!-- prompt text -->
    <div
      id="prompt"
      @click.stop="copy"
      class="block my-5 px-2 text-2xl w-full text-center capitalize"
    >
      <Prompt :prompt="prompt" />
    </div>
    <!-- 'click to copy' button -->
    <div
      class="text-white w-full text-xs text-cente flex justify-center scale-75"
      v-show="prompt.length"
    >
      <div
        @click.stop="copy"
        class="m-auto border-2 border-solid border-purple-950 flex justify-center items-center px-1 box-border hover:bg-white hover:text-[#1e001e] cursor-pointer uppercase font-bold"
      >
        {{ copyText }}
      </div>
    </div>
    <!-- footer -->
    <div
      class="w-full flex flex-col text-center py-3 capitalize absolute left-0 bottom-0 text-xs text-white"
    >
      <!-- combinations text -->
      <div class="w-full text-center capitalize text-white" v-show="combinations">
        <span>There are </span>
        <span class="slate-ish"> {{ formatNumber(combinations) }} </span>
        <span> different possible prompts</span>
      </div>
      <div class="relative flex justify-center items-center w-full h-3">
        <span class="rounded-2xl bg-[#31041F] w-11 h-1"></span>
      </div>
      <div class="mx-auto my-0">
        <span>made with </span>
        <span class="slate-ish"> ♥ </span>
        <span> by </span>
        <a href="https://github.com/Leigh-Ola">Leigh Ola</a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Prompt from '../Components/Prompt.vue'
import Generator from '../Components/Generator.vue'
//
import copyToClipboard from '../assets/copy'
//
// import {storeToRefs} from "pinia"
import { historyStore } from '@/stores/History'
const store = historyStore()
// let { addItem } = storeToRefs(store)
// note you will have to use `addItem.value` to access
// the function within the <script setup>
//
let copyText = ref('Click To Copy')
const prompt = ref([])
const combinations = ref(0)
const history = ref([])

/* methods */
// handle new prompt
function handleNewPrompt(v: string[]) {
  prompt.value = []
  v.forEach((text) => {
    prompt.value.push(text)
  })
  console.log('handleNewPrompt', v)
}
// format number. Ie., from 1000 to 1,000
function formatNumber(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
// copy current prompt to clipboard
function copy() {
  copyToClipboard(prompt.value.join(' '), () => (copyText.value = 'Copied!'))
}

// onmount
onMounted((): void => {
  console.log('MOUNTED!')
  // Initialize with 'prompt-history' from localStorage
  let localStorageHistory = localStorage.getItem('prompt-history')
  if (localStorageHistory) {
    let localStorageHistoryArr = JSON.parse(localStorageHistory)
    localStorageHistoryArr.forEach((promptArr: string[]) => {
      history.value.push(promptArr)
      store.addItem(promptArr)
    })
    console.log('Initialized!')
  }
})

// watchers
watch(prompt, (newVal: string) => {
  history.value.push(newVal)
  store.addItem(newVal)
  // update the 'prompt-history' on localStorage
  let localStorageHistory = localStorage.getItem('prompt-history')
  if (localStorageHistory) {
    let localStorageHistoryArr = JSON.parse(localStorageHistory)
    localStorageHistoryArr.push(newVal)
    // if history is longer than 100, remove the oldest item
    if (localStorageHistoryArr.length > 100) {
      localStorageHistoryArr.shift()
    }
    localStorage.setItem('prompt-history', JSON.stringify(localStorageHistoryArr))
  } else {
    localStorage.setItem('prompt-history', JSON.stringify([newVal]))
  }
})
watch(copyText, () => {
  let defaultCopyText = 'Click To Copy'
  setTimeout(() => {
    if (copyText.value == defaultCopyText) return
    copyText.value = 'Click To Copy'
  }, 2000)
})
</script>

<style></style>
