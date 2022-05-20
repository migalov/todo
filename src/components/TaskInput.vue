<template>
  <div class="input-task">
    <input
      @keyup.enter="addTodoI(todoText)"
      @change="todoTextChange"
      :value="todoText"
      class="input-task__default"
      type="text"
      placeholder="Create a new todo…">
    <Checkbox @change="todoStatusChange" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Checkbox from "./Checkbox.vue";
import { v1 } from 'uuid';
  export default {
    data() {
      return {
        todoText: "",
        todoStatus: false
      }
    },
    components: { Checkbox },
    methods: {
      ...mapActions(["addTodo"]),
      todoTextChange(e) {
        this.todoText = e.target.value;
      },
      todoStatusChange(e) {
        this.todoStatus = e.target.checked;
      },
      addTodoI() {
        this.addTodo({
          id: v1(),
          title: this.todoText,
          status: this.todoStatus
        })
        this.todoText = "";
        this.todoStatus = "";
      }
    }
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