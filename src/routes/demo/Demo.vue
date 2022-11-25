<script lang="ts" setup></script>

<template lang="pug">
.container.mx-auto.max-w-4xl.flex.h-screen.w-screen.items-center.justify-center
  main.grid.grid-cols-3.w-full
    .item.bg-primary
    .item.bg-secondary.grid-col-span-3
    .item.bg-tertiary
</template>

<style lang="scss" scoped>
.item {
  @apply h-96;
}

main {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);

  .grid-col-span-3 {
    grid-column: span 3;
  }

  .item:last-child {
    grid-column-start: 3;
    grid-row-start: 2;
    background-color: red !important;
    padding: 2rem;
  }
}
</style>
