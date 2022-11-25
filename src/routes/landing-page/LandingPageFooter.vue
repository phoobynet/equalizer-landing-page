<script lang="ts" setup>
import LandingPageFooterSocial from '@/routes/landing-page/LandingPageFooterSocial.vue'
import Logo from '@/components/Logo.vue'
</script>

<template lang="pug">
#footer
  .mb-8
    logo
  p.text-body-2 All rights reserved © Equalizer 2021
  p.text-body-2 Have any problems? Contact us via social media or email us at
    strong {{ ' ' }}equalizer@example.com
  landing-page-footer-social
</template>

<style lang="scss" scoped>
#footer {
  @apply mx-6 mt-[22rem] mb-[6rem];
}
</style>
