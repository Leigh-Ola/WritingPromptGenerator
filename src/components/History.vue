<template>
  <div id="history-container" class="w-full min-h-full flex flex-col relative">
    <div
      id="history"
      :class="{ maximized: maximized }"
      class="w-full overflow-hidden capitalize h-0 flex flex-col"
    >
      <div
        v-for="(item, index) in store.items"
        v-bind:key="index"
        class="v-full block my-2 px-2 text-center text-sm"
      >
        <Prompt :prompt="item" :style="true" />
      </div>
    </div>
    <!-- <div @click="toggle()" class="cursor-pointer w-full h-full text-center bg-[#31041F]">
            History
        </div> -->
    <div
      class="fixed w-8 h-16 flex right-0 px-2 top-0 cursor-pointer active:bg-[#1e001e] rounded-md box-content"
      @click.stop="toggle" v-show="store.count > 0"
    >
      <div class="m-auto w-8 shrink-0 h-auto p-1 hover:scale-110 iconbox">
        <img alt="History Icon" class="w-full h-auto m-auto" src="@/assets/history-white.png" />
      </div>
    </div>
  </div>
</template>

<style>
#history {
  transition: all 0.5s ease-in-out;
  background: rgb(30, 0, 30);
  padding: 0px;
  margin: 0px;
  height: 0px;
  /* hide the scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
}
/* hide the history scrollbar */
#history::-webkit-scrollbar {
  display: none;
}

.maximized {
  /* height: calc(100vh - 62.5px) !important; 62.5px = header height */
  height: calc(100vh - 64px) !important; /* 62.5px = header height */
  overflow-y: scroll;
  overflow-x: hidden;
}
#history-container .iconbox {
  transition: all 0.3s ease;
}
</style>

<script setup lang="ts">
import Prompt from './Prompt.vue'
import { onMounted, ref } from 'vue'
//
import { historyStore } from '@/stores/History'
const store = historyStore()

let maximized = ref(false)

function toggle() {
    if(store.count < 1) return;
  maximized.value = !maximized.value
  // scroll to the bottom of 'history' div
  let history: HTMLElement | null = document.getElementById('history')
  if (!history) return
  let scrollHeight = history.scrollHeight
  // smooth scroll
  history.scrollTo({
    top: scrollHeight,
    behavior: 'smooth'
  })
}
</script>
