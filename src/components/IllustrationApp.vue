<template lang="pug">
//  HACK: Component fails to hot reload when editing style tags to added explicit link to public dir
img(src='/assets/illustration-app.png', alt='application screen shot')
</template>

<style lang="scss" scoped>
img {
  @apply relative top-[-6rem] col-start-1 col-end-2 row-start-1 row-end-2 h-[26.875rem] justify-self-center;
}
</style>
