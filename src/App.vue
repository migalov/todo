<template>
  <Background />
  <Todo />
</template>

<style>
#app {
  @apply flex flex-col items-center text-xs;
  background-size: 100% 200px;
  font-family: "Josefin Sans", sans-serif;
  min-height: 100vh;
}

.todo-footer {
  @apply flex justify-between
}
</style>

<script>
import Todo from "./components/Todo.vue";
import Background from "./components/Background.vue";

export default {
  name: "App",
  components: {
    Background, Todo
  }
};
</script>
