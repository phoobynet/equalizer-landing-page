<template lang="pug">
#hero
  h1 We make your music sound extraordinary.
  p A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with
    | professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!
</template>

<style lang="scss" scoped>
#hero {
  @apply mx-6;

  h1 {
    @apply text-heading-2 tablet:w-2/3;
  }

  p {
    @apply pt-5 text-body-2 tablet:w-2/3 tablet:text-body-1;
  }
}
</style>
