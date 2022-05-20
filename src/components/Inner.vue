<template>
  <div class="inner">
    <TaskCard />
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
  }
};
</script>

<style lang="scss" scoped>
.inner {
  @apply rounded-[5px] bg-white dark:bg-[#25273D]
    shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)] dark:shadow-none;
}
</style>
