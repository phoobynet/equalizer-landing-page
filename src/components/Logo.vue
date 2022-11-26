<script lang="ts" setup>
import logoUrl from '@/assets/logo.svg'
</script>

<template lang="pug">
img.logo(:src='logoUrl', alt='equalizer')
</template>

<style lang="scss" scoped>
.logo {
  @apply w-[9.15rem];
}
</style>
