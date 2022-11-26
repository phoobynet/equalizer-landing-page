<script lang="ts" setup>
import AppDownloadButton from '@/components/AppDownloadButton.vue'
</script>

<template lang="pug">
#hero
  h1 We make your music sound extraordinary.
  p A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with
    | {{ ' ' }} a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!

#illustrations
  .background-item
  img.illustration-app(
    src='/assets/illustration-app.png',
    alt='application screen shot'
  )
  .app-download-cta
    h2(style='letter-spacing: 0.08px') Premium EQ
    p.text-whitish.font-normal(
      class='text-[18px] leading-[28px]',
      style='padding-top: 9px; letter-spacing: 0px'
    )
      | Get expert-level control with a robust equalizer, volume mixer, and spatial audio.
      | Take your listening experience to a whole new level and access all our incredible features!
    .price-container
      .text-whitish.font-bold(class='text-[65px] leading-[52px] tracking-[0px]') $4
      .text-whitish.text-body-1 / month
    .button-container
      app-download-button(variant='ios')
      app-download-button(variant='android')
</template>

<style lang="scss" scoped>
#hero {
  @apply mx-6;

  h1 {
    @apply text-heading-2 tablet:w-2/3;
  }

  p {
    @apply pt-5 text-body-2 tablet:w-2/3 tablet:text-body-1;
  }
}

#illustrations {
  @apply grid h-[600px] grid-cols-1 grid-rows-3 pt-[4rem];

  .background-item {
    @apply col-start-1 col-end-1 row-start-1 row-end-2 h-[37.5rem] bg-blackish bg-[length:280px_420px] bg-top bg-no-repeat;
    background-image: url('@/assets/bg-pattern-2.svg');
  }

  .illustration-app {
    @apply relative top-[-6rem] col-start-1 col-end-2 row-start-1 row-end-2 h-[26.875rem] justify-self-center;
  }

  .app-download-cta {
    @apply relative top-[13rem] col-start-1 col-end-2 row-start-2 row-end-3 h-[34.125rem] justify-self-center rounded-xl bg-secondary px-[36px] pt-[2.7rem];

    h2 {
      @apply text-[2rem] font-bold tracking-[0px] text-whitish;
    }

    .price-container {
      @apply mt-9 flex items-center space-x-4 pl-[6px];
    }

    .button-container {
      @apply mt-8 ml-1.5 flex flex-col space-y-[1rem];
    }
  }
}
</style>
