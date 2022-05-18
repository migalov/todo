<template>
  <ul :class="class" class="filter">
    <li><button>All</button></li>
    <li><button>Active</button></li>
    <li><button>Completed</button></li>
  </ul>
</template>

<style lang="scss" scoped>
.filter {
  @apply justify-center gap-[19px] bg-white mt-4 py-[15px] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)]
  sm:bg-transparent sm:shadow-none sm:mt-0 sm:py-0;

  & button {
    @apply text-[#9495A5] font-bold;
    &:hover {
      @apply text-[#3A7CFD];
    }
  }
}
</style>
