<script setup lang="ts">
import History from './components/History.vue'
</script>

<template>
  <header
    class="w-full overflow-visible relative z-30 h-16 flex flex-col items-center bg-[#31041F]"
  >
    <div
      class="w-full shrink-0 capitalize h-full mx-auto my-0 flex gap-2 justify-center items-center"
    >
      <!-- Tell Me A story -->
      <span class="tell">Tell</span>
      <span class="me">me</span>
      <span class="a">a</span>
      <span class="story">story</span>
    </div>
    <div
      class="w-full relative overflow-visible grow mx-auto my-0 flex justify-center items-center"
    >
      <History />
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  color: white;
  font-size: 2.4em;
}
header span {
  /* background-color: gold; */
  height: 100%;
  display: flex;
  align-items: center;
}
header .tell {
  font-size: 110%;
  font-family: 'Shadows Into Light', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
header .a {
  font-family: 'Amatic SC', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
header .me {
  font-size: 125%;
  padding-top: 5pt;
  font-family: 'Indie Flower', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
header .story {
  font-family: 'Kaushan Script', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
@media (min-width: 1024px) {
}
</style>
