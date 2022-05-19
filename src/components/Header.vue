<template>
  <header>
    <h1>TODO</h1>
    <button @click="toggle" class="change-theme"></button>
  </header>
</template>

<script>
export default {
  methods: {
    toggle() {
      document.documentElement.classList.toggle("dark");
      (document.documentElement.classList.contains("dark")) ? localStorage.theme = 'dark' : localStorage.theme = '';
    }
  },
  mounted() {
    (localStorage.theme == 'dark') ? document.documentElement.classList.add("dark") : '';
  }
};
</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}

h1 {
  @apply text-white text-3xl sm:text-[40px];
  letter-spacing: 7px;
}

header {
  @apply flex justify-between pt-[45px] pb-[27px] sm:pb-[50px];
}

.change-theme {
  @apply bg-[url('../img/icon-sun.svg')] dark:bg-[url('../img/icon-moon.svg')] w-[26px] h-[26px];
}
</style>
