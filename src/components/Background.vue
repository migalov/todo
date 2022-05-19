<template>
  <div class="bg-for-app"></div>
</template>

<style>
.bg-for-app {
  @apply
    bg-[url('../img/bg-mobile-light.jpg')] bg-cover bg-no-repeat bg-center dark:bg-[url('../img/bg-mobile-dark.jpg')]
    sm:bg-[url('../img/bg-desktop-light.jpg')] sm:dark:bg-[url('../img/bg-desktop-dark.jpg')]
    absolute top-0 left-0 -z-10
    w-full h-[200px] sm:h-[300px]
    font-bold
}
</style>