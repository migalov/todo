<template>
  <main class="container px-5">
    <Header />
    <TaskInput />
    <Inner />
    <Filter :class="'filter sm:hidden flex'" />    
  </main>
</template>

<script>

import Header from './Header.vue';
import TaskInput from './TaskInput.vue';
import Inner from './Inner.vue';
import Footer from './Footer.vue';
import Filter from './Filter.vue';

export default {
  components: {
    Header,
    Inner,
    Filter,
    TaskInput,
    Footer
  },
}
</script>

<style>

</style>