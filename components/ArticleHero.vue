<template lang="pug">
  .hero
    .hero__header
      img.hero__header__logo(src="~/assets/logo-square.png")
      span.hero__header__text IndiaSmile

    .hero__background
      img.hero__background__image(v-if="!!image" :src="image")
      Breadcrumb
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'

export default {
  components: { Breadcrumb },
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.hero
  position relative
  width 100%
  max-width 26em
  margin 0 auto

  &__header
    padding 0.875em
    display flex
    align-items center
    justify-content center
    background #fff

    &__logo
      height 1.875em

    &__text
      font-size 1.375em
      font-weight bold
      color #3B4CFE
      margin-left 0.25em

  &__background
    &__image
      width 100%
      height 100%
</style>
