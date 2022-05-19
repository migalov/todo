<template>
  <div class="inner">
    <TaskCard :data="tasks" />
    <Footer />
  </div>
</template>

<script>
import TaskCard from "./TaskCard.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    TaskCard,
    Footer,
  },
  data() {
    return {
      tasks: [
        { title: "Complete online JavaScript course", status: true },
        { title: "Jog around the park 3x", status: false },
        { title: "10 minutes meditation", status: false },
        { title: "Read for 1 hour", status: false },
        { title: "Pick up groceries", status: false },
        { title: "Complete Todo App on Frontend Mentor", status: false },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.inner {
  @apply rounded-[5px] bg-white dark:bg-[#25273D]
    shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)] dark:shadow-none;
}
</style>
