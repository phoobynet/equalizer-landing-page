<script lang="ts" setup>
import illustrationAppUrl from '@/assets/illustration-app.png'
import AppDownloadButton from '@/components/AppDownloadButton.vue'
</script>

<template lang="pug">
#illustrations
  .background-item
  img.illustration-app(
    :src='illustrationAppUrl',
    alt='application screen shot'
  )
  .app-download-cta
    h2 Premium EQ
    p.text-whitish.text-body-2
      | Get expert-level control with a robust equalizer, volume mixer, and spatial audio.
      | Take your listening experience to a whole new level and access all our incredible features!
    .price-container
      .text-whitish.text-price $4
      .text-whitish.text-body-1 / month
    .button-container
      app-download-button(variant='ios')
      app-download-button(variant='android')
</template>

<style lang="scss" scoped>
#illustrations {
  @apply mt-20 grid grid-cols-1 grid-rows-3;

  .background-item {
    @apply col-start-1 col-end-1 row-start-1 row-end-2 h-[37.5rem] bg-blackish bg-[length:280px_420px] bg-top bg-no-repeat;
    background-image: url('@/assets/bg-pattern-2.svg');
  }

  .illustration-app {
    @apply relative top-[-6rem] col-start-1 col-end-2 row-start-1 row-end-2 h-[26.875rem] justify-self-center;
  }

  .app-download-cta {
    @apply relative top-[-13.5rem] col-start-1 col-end-2 row-start-2 row-end-3 flex h-[34.125rem] flex-col space-y-6 justify-self-center rounded-2xl bg-secondary px-6 py-10;

    h2 {
      @apply text-heading-2 text-whitish;
    }

    .price-container {
      @apply flex items-center space-x-3;
    }

    .button-container {
      @apply flex flex-col space-y-3;
    }
  }
}
</style>
