<script lang="ts" setup>
interface Props {
  level: 1 | 2
}

const { level } = defineProps<Props>()
</script>

<template lang="pug">
.app-heading(
  role='heading',
  :aria-level='level',
  :class='`app-heading-${level}`'
)
  slot
</template>

<style lang="scss" scoped>
.app-heading {
  @apply font-bold;

  .app-heading-1 {
    @apply text-[2.5rem] leading-[3.125rem];
  }

  .app-heading-2 {
  }

  @screen tablet {
    .app-heading-1 {
    }

    .app-heading-2 {
    }
  }
}
</style>
