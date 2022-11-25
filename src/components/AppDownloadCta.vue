<script lang="ts" setup>
import AppDownloadButton from '@/components/AppDownloadButton.vue'
</script>

<template lang="pug">
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
.app-download-cta {
  @apply flex w-full flex-col space-y-6 rounded-2xl bg-secondary px-6 py-10;

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
</style>
