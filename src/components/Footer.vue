<template>
  <footer class="footer-app">
    <span>5 items left</span>
    <Filter :class="'hidden sm:flex'" />
    <span>Clear Completed</span>
  </footer>
</template>

<script>
import Filter from './Filter.vue'
export default {
  components: {
    Filter
  }
}
</script>

<style lang="scss" scoped>
  .footer-app {
    @apply flex justify-between py-[22px] px-5 rounded-b-[5px] bg-white border-t border-[#E3E4F1]
  }
</style>