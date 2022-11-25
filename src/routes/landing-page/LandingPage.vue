<script lang="ts" setup>
import LandingPageHeader from '@/routes/landing-page/LandingPageHeader.vue'
import LandingPageMainHero from '@/routes/landing-page/LandingPageMainHero.vue'
import LandingPageFooter from '@/routes/landing-page/LandingPageFooter.vue'
import LandingPageMainIllustrations from '@/routes/landing-page/LandingPageMainIllustrations.vue'
</script>

<template lang="pug">
#landing-page
  landing-page-header
  main
    landing-page-main-hero
    landing-page-main-illustrations
  landing-page-footer
</template>

<style lang="scss" scoped>
#landing-page {
  main {
    @apply mt-12;
  }
}
</style>
