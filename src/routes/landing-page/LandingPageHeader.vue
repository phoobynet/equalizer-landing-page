<script lang="ts" setup>
import bgPattern1Url from '@/assets/bg-pattern-1.svg'
import Logo from '@/components/Logo.vue'
</script>

<template lang="pug">
header#landing-page-header
  logo
  img.bg-pattern(:src='bgPattern1Url', alt='pattern')
</template>

<style lang="scss" scoped>
#landing-page-header {
  @apply relative mx-6 pt-10;

  .bg-pattern {
    @apply absolute top-[-2.6rem] right-[-4rem] hidden origin-top-right scale-[.85] tablet:block;
  }
}
</style>
