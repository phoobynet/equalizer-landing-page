<script lang="ts" setup>
import LandingPageFooter from '@/routes/landing-page/LandingPageFooter.vue'
import LandingPageHero from '@/routes/landing-page/LandingPageHero.vue'
import LandingPageHeader from '@/routes/landing-page/LandingPageHeader.vue'
</script>

<template lang="pug">
#landing-page
  header
    landing-page-header
  main
    landing-page-hero
  footer
    landing-page-footer
</template>

<style lang="scss" scoped>
#landing-page {
  header {
    @apply mt-10;
  }
  main {
    @apply mt-16;
  }
}
</style>
