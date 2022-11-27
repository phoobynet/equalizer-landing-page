<script lang="ts" setup>
import AppHeading from '@/components/AppHeading.vue'
import AppDownloadButton from '@/components/AppDownloadButton.vue'
</script>

<template lang="pug">
.app-download-cta
  app-heading(:level='2') Premium EQ
  p.content
    | Get expert-level control with a robust equalizer, volume mixer, and spatial audio.
    | Take your listening experience to a whole new level and access all our incredible features!
  .price-container
    .price $4
    .period / month
  .button-container
    app-download-button(variant='ios')
    app-download-button(variant='android')
</template>

<style lang="scss" scoped>
.app-download-cta {
  @apply relative top-[12.66rem] col-start-1 col-end-2 row-start-2 row-end-3 h-[34.125rem] justify-self-center rounded-xl bg-secondary px-[36px] pt-[2.7rem];

  .content {
    @apply text-[18px] font-normal leading-[28px] text-whitish;
  }

  .price-container {
    @apply mt-9 flex items-center space-x-4 pl-[6px];

    .price {
      @apply text-[65px] font-bold leading-[52px] tracking-[0px] text-whitish;
    }

    .period {
      @apply text-body-1 text-whitish;
    }
  }

  .button-container {
    @apply mt-8 ml-1.5 flex flex-col space-y-[1rem];
  }
}
</style>
