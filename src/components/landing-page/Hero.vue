<script lang="ts" setup>
import IllustrationApp from '@/components/IllustrationApp.vue'
import AppDownloadCta from '@/components/AppDownloadCta.vue'
import AppHeading from '@/components/AppHeading.vue'
</script>

<template lang="pug">
.hero
  .hero-heading
    app-heading(:level='1') We make your music sound extraordinary.
    p A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with
      | {{ ' ' }} a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!

  .illustrations
    .background-item
    illustration-app
    app-download-cta
</template>

<style lang="scss" scoped>
.hero {
  @apply min-h-[1300px];

  .hero-heading {
    @apply mx-6;

    p {
      @apply pt-5 text-body-2 tablet:w-2/3 tablet:text-body-1;
    }
  }

  .illustrations {
    @apply grid h-[600px] grid-cols-1 grid-rows-3 pt-[4rem];

    .background-item {
      @apply col-start-1 col-end-1 row-start-1 row-end-2 h-[37.5rem] bg-blackish bg-[length:280px_420px] bg-top bg-no-repeat;
      background-image: url('@/assets/bg-pattern-2.svg');
    }
  }
}
</style>
