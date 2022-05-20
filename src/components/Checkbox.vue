<template>
  <input
    type="checkbox"
    class="custom-checkbox"
    :data-id="id"
  />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.custom-checkbox {
  @apply absolute top-[50%] translate-y-[-50%] left-6;
}

.custom-checkbox {
  &::before {
    content: "";
    @apply absolute top-[-4px] sm:top-[-6px] left-[-4px] sm:left-[-2px] w-5 sm:w-6 h-5 sm:h-6 rounded-[50%] border-[1px] border-[#E3E4F1] dark:border-[#393A4B]
    bg-[#fff] dark:bg-[#25273D];
  }

  &:checked::before {
    background: url('../img/icon-check.svg'), linear-gradient(135deg, #55DDFF 0%, #C058F3 100%);
    background-repeat: no-repeat;
    background-position: center;
    border: none;
  }
}
</style>
