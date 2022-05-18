<template>
  <input
    type="checkbox"
    class="custom-checkbox"
    :id="id"
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
  methods: {
    // checkFlag() {
    //   if (this.status) {
    //     return 'checked'
    //   }
    //   else return ''
    // }
  }
};
</script>

<style lang="scss">
.custom-checkbox {
  @apply absolute top-[50%] translate-y-[-50%] left-6;
}

.custom-checkbox {
  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #E3E4F1;
    background-color: #fff;
  }

  &:checked::before {
    background: url('../img/icon-check.svg'), linear-gradient(135deg, #55DDFF 0%, #C058F3 100%);
    background-repeat: no-repeat;
    background-position: center;
    border: none;
  }
}
</style>
