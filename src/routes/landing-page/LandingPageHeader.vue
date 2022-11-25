<template lang="pug">
header#landing-page-header
  img(src='@/assets/logo.svg', alt='equalizer')
  img.bg-pattern(src='@/assets/bg-pattern-1.svg', alt='pattern')
</template>

<style lang="scss" scoped>
#landing-page-header {
  @apply relative mx-6 pt-10;

  .bg-pattern {
    @apply absolute top-0 right-0 hidden origin-top-right translate-x-12 -translate-y-8 scale-75 transform tablet:block;
  }
}
</style>
