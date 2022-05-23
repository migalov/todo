<template>
  <footer class="footer-app">
    <span v-if="$store.state.todos.length > 0">{{ $store.state.todos.length }} items left</span>
    <span v-else>No items</span>
    <Filter :class="'filter hidden sm:flex'" />
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
    @apply flex justify-between py-[22px] px-5 sm:px-6 sm:py-4 rounded-b-[5px]
    bg-white dark:bg-[#25273D] border-t border-[#E3E4F1] dark:border-[#393A4B]
    text-[#9495A5] dark:text-[#5B5E7E] sm:text-[14px]
  }
</style>