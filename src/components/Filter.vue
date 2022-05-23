<template>
  <ul>
    <li><button>All</button></li>
    <li><button @click="activeTodos(allTodos)">Active</button></li>
    <li><button>Completed</button></li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    ...mapGetters(["allTodos", "activeTodos"]),
  }
}
</script>

<style lang="scss" scoped>
.filter {
  @apply justify-center gap-[19px]
  bg-white dark:bg-[#25273D] mt-4 py-[15px] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)] dark:shadow-none
    sm:bg-transparent sm:shadow-none sm:mt-0 sm:py-0
  text-[#9495A5] dark:text-[#5B5E7E];

  & button {
    @apply  font-bold;
    &:hover {
      @apply text-[#3A7CFD];
    }
  }
}
</style>
