<script lang="ts" setup></script>

<template lang="pug">
.container.mx-auto.max-w-4xl.flex.h-screen.w-screen.items-center.justify-center
  main.grid.grid-cols-3.w-full
    .item
      span 1
    .item
      span 2
    .item
      span 3
</template>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 600px;
  height: 600px;
}

.item {
  @apply flex items-center justify-center text-heading-1 text-whitish;
  width: 200px;
  height: 200px;

  &:nth-of-type(1) {
    @apply bg-secondary;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  &:nth-of-type(2) {
    @apply bg-tertiary;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    position: relative;
    left: -50px;
    top: -50px;
  }

  &:nth-of-type(3) {
    @apply bg-primary;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    place-self: center;
    position: relative;
  }
}
</style>
