<template>
  <div class="input-task">
    <input class="input-task__default" type="text" placeholder="Create a new todo…">
    <Checkbox />
  </div>
</template>

<script>
  import Checkbox from "./Checkbox.vue";
  export default {
    components: { Checkbox },
  };
</script>

<style scoped>
  .input-task {
    @apply relative
  }
  .input-task__default {
    @apply pl-[52px] sm:pl-[72px] pr-5 py-[14px] sm:py-[23px] w-full rounded-[5px]
    dark:bg-[#25273D]
  }
</style>