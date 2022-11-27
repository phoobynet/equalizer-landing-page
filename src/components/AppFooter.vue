<script lang="ts" setup>
import Logo from '@/components/Logo.vue'
import AppFooterSocial from '@/components/AppFooterSocial.vue'
</script>

<template lang="pug">
.app-footer
  .mb-8
    logo
  p.text-body-2 All rights reserved © Equalizer 2021
  p.text-body-2 Have any problems? Contact us via social media or email us at
    strong {{ ' ' }}equalizer@example.com
  app-footer-social
</template>

<style lang="scss" scoped>
.app-footer {
  @apply mx-6;
}
</style>
