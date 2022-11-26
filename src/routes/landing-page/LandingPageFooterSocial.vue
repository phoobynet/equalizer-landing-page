<script lang="ts" setup>
import facebookUrl from '@/assets/icon-facebook.svg'
import instagramUrl from '@/assets/icon-instagram.svg'
import twitterUrl from '@/assets/icon-twitter.svg'
</script>

<template lang="pug">
#landing-page-footer-social
  img(:src='facebookUrl', alt='Facebook')
  img(:src='instagramUrl', alt='Instagram')
  img(:src='twitterUrl', alt='Twitter')
</template>

<style lang="scss" scoped>
#landing-page-footer-social {
  @apply mt-16 flex justify-start space-x-5;
}
</style>
