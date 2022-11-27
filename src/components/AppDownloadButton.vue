<script lang="ts" setup>
import { computed } from 'vue'
import iconAndroid from '@/assets/icon-android.svg'
import iconIOS from '@/assets/icon-apple.svg'

interface Props {
  variant: 'ios' | 'android'
}

const props = defineProps<Props>()

const buttonText = computed(() =>
  props.variant === 'ios' ? 'iOS Download' : 'Android Download',
)

const iconUrl = computed(() =>
  props.variant === 'ios' ? iconIOS : iconAndroid,
)
</script>

<template lang="pug">
button(:class='props.variant', type='button')
  img(:src='iconUrl', alt='icon')
  span {{ buttonText }}
</template>

<style lang="scss" scoped>
button {
  @apply flex h-[61px] w-full items-center justify-center space-x-2 rounded-xl;

  span {
    @apply mt-[2px] text-[18px] font-bold;
  }

  &.ios {
    @apply bg-blackish text-whitish hover:bg-primary;
  }

  &.android {
    @apply bg-whitish text-blackish hover:bg-tertiary;
  }
}
</style>
