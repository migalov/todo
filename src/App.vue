<template>
  <Background />
  <Todo />
</template>

<style>

body {
  @apply dark:bg-[#171823]
}

#app {
  @apply flex flex-col items-center text-xs sm:text-[18px];
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
