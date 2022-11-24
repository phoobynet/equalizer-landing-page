<script
  lang="ts"
  setup
>
import { computed } from 'vue'
import iconAndroid from '@/assets/icon-android.svg'
import iconIOS from '@/assets/icon-apple.svg'

interface Props {
  variant: 'ios' | 'android'
}

const props = defineProps<Props>()

const buttonText = computed(() =>
  props.variant === 'ios'
    ? 'iOS Download'
    : 'Android Download')

const iconUrl = computed(() =>
  props.variant === 'ios'
    ? iconIOS
    : iconAndroid)

</script>

<template>
  <button
    class="btn"
    :class="props.variant"
  >
    <img
      :src="iconUrl"
      alt=""
    >
    <span class="text-button">{{ buttonText }}</span>
  </button>
</template>

<style
  lang="scss"
  scoped
>
  .btn {
    @apply rounded-2xl flex items-center w-full h-16 justify-center space-x-2;

    &.ios {
      @apply bg-blackish text-whitish hover:bg-primary;
    }

    &.android {
      @apply bg-whitish text-blackish hover:bg-tertiary;
    }
  }
</style>

