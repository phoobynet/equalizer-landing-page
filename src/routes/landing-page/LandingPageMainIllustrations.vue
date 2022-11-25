<script lang="ts" setup>
import AppDownloadCta from '@/components/AppDownloadCta.vue'
import bgPattern2Url from '@/assets/bg-pattern-2.svg'
import illustrationAppUrl from '@/assets/illustration-app.png'
</script>

<template lang="pug">
#illustrations
  .bg-pattern-container
    img.bg-pattern(:src='bgPattern2Url', alt='pattern')
  img.app(:src='illustrationAppUrl', alt='app')
  .app-download-cta-container
    app-download-cta
</template>

<style lang="scss" scoped>
#illustrations {
  @apply relative py-44 tablet:mx-6 tablet:pt-56;

  .bg-pattern-container {
    @apply w-full rounded-2xl bg-blackish tablet:h-[37rem];

    img.bg-pattern {
      @apply mx-auto object-contain;
    }
  }

  img.app {
    @apply absolute top-16 origin-top scale-mobile tablet:top-20 tablet:-translate-x-[4rem] tablet:scale-tablet;
  }

  .app-download-cta-container {
    @apply absolute -translate-y-12 transform tablet:w-[25rem] tablet:-translate-y-[26rem] tablet:translate-x-[19.5rem];
  }
}
</style>
