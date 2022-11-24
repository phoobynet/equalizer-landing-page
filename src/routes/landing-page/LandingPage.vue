<script
  lang="ts"
  setup
>
import AppDownloadButton from '@/components/AppDownloadButton.vue'

</script>

<template>
  <div>
    <header class="pt-10 mx-6 relative">
      <img
        src="@/assets/logo.svg"
        alt="equalizer"
      />
      <img
        src="@/assets/bg-pattern-1.svg"
        alt="pattern"
        class="hidden tablet:block absolute top-0 right-0 scale-75 origin-top-right transform translate-x-12 -translate-y-8"
      />
    </header>
    <main class="pt-12">
      <div
        id="hero"
        class="mx-6"
      >
        <div
          role="heading"
          aria-level="1"
          class="text-heading-2 tablet:w-2/3"
        >
          We make your music sound extraordinary.
        </div>
        <p class="text-body-2 pt-5 tablet:w-2/3 tablet:text-body-1">
          A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with
          a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!
        </p>
      </div>
      <div
        id="illustrations"
        class="relative py-44 tablet:mx-6 tablet:pt-56"
      >
        <div class="bg-blackish w-full rounded-2xl tablet:h-[37rem]">
          <img
            src="@/assets/bg-pattern-2.svg"
            alt=""
            class="object-contain mx-auto"
          >
        </div>
        <img
          src="@/assets/illustration-app.png"
          alt=""
          class="absolute top-16 scale-mobile tablet:scale-tablet tablet:-translate-x-[4rem] tablet:top-20 origin-top"
        >
        <div class="absolute bg-secondary w-full rounded-2xl px-6 flex py-10 flex-col space-y-6 transform -translate-y-12 tablet:w-[25rem] tablet:-translate-y-[26rem] tablet:translate-x-[19.5rem]">
          <div
            role="heading"
            aria-level="2"
            class="text-whitish text-heading-2"
          >Premium EQ
          </div>
          <p class="text-whitish text-body-2">Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio.
            Take
            your listening experience to a whole new level and access all our incredible features!
          </p>
          <div class="flex space-x-3 items-center">
            <div class="text-whitish text-price">$4</div>
            <div class="text-whitish text-body-1">/ month</div>
          </div>
          <div class="flex flex-col space-y-3">
            <app-download-button variant="ios" />
            <app-download-button variant="android" />
          </div>
        </div>
      </div>
    </main>
    <footer class="mx-6 mt-[22rem] mb-[6rem]">
      <div class="pb-8">
        <img
          src="@/assets/logo.svg"
          alt="equalizer"
        />
      </div>
      <p class="text-body-2">All rights reserved © Equalizer 2021</p>
      <p class="text-body-2"> Have any problems? Contact us via social media or email us at <strong>equalizer@example.com</strong>
      </p>
      <div class="flex justify-start space-x-4 pt-12">
        <img
          src="@/assets/icon-facebook.svg"
          alt="facebook"
        >
        <img
          src="@/assets/icon-instagram.svg"
          alt="instagram"
        >
        <img
          src="@/assets/icon-twitter.svg"
          alt="twitter"
        >
      </div>
    </footer>
  </div>
</template>

<style
  lang="scss"
  scoped
>
</style>

