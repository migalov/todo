<template>
  <div class="tasks">
    <ul class="tasks-list">
      <li v-for="(task, index) in data" :key="index" class="task-item">
        <Checkbox :id="index" :checked="task.status" />
        <label :for="index">{{ task.title }}</label>
        <button class="task-delete"></button>
      </li>
    </ul>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: { Checkbox },
};
</script>

<style scoped>
.tasks {
  @apply mt-[18px] mt-6;
}

input[type="checkbox"]:checked + label {
  @apply line-through text-[#D1D2DA] dark:text-[#4D5067];
}

label {
  @apply dark:text-[#C8CBE7];
}

.tasks-list {
}
.task-item {
  @apply flex justify-between items-center py-5 sm:py-[22px] pl-[52px] sm:pl-[72px] pr-5 w-full relative;
}

.task-item:not(:first-of-type) {
  @apply border-t-[1px] dark:border-[#393A4B];
}

.task-delete {
  @apply bg-[url('../img/button-delete.svg')] w-[11px] sm:w-[20px] h-[11px] sm:h-[20px] bg-contain;
}
</style>
