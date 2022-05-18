<template>
  <div class="tasks">
    <ul class="tasks-list">
      <li v-for="(task, index) in data" :key="index" class="task-item">
        <Checkbox :id="index" :checked="task.status" />
        <label :for="index">{{ task.title }}</label>
        <button class="bg-[url(./img/button-delete.svg)] w-[11px] h-[11px]"></button>
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
  @apply mt-[18px];
}

input[type=checkbox]:checked + label {
  text-decoration-line: line-through;
  color: #D1D2DA;
}

.tasks-list {

}
.task-item {
  @apply relative flex justify-between items-center py-[18px] pl-[52px] pr-5 w-full;

}

.task-item:not(:first-of-type) {
  @apply border-t-[1px];
}
</style>
