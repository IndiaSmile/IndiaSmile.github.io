<template lang="pug">
  .card
    nuxt-link(:to="to")
      img.card__image(:src="image")
      .card__gradient(:style="{ backgroundImage: 'linear-gradient(180deg, rgba(196, 196, 196, 0) 30.73%, ' + color + ' 70.31%)'}")
      .card__text
        .card__text__title(:class="{'text--dark': isDarkText}") {{ title }}
        .card__text__subtitle(:class="{'text--dark': isDarkText}") {{ subtitle }}
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: false,
      default: '#',
    },
    isDarkText: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped lang="stylus">
.card
  height 11.25em
  border-radius 0.4em
  position relative
  box-shadow none
  overflow hidden

  &__image
    width 100%

  &__gradient
    position absolute
    width 100%
    height 100%
    left 0
    top 0
    z-index 2
    border-radius 0.4em

  &__text
    position absolute
    left 1em
    bottom 0.75em
    z-index 3

    &__title
      font-weight bold
      font-size 1em
      color #fff

      &.text--dark
        color #000

    &__subtitle
      font-size 0.875em
      color rgba(255, 255, 255, 0.75)

      &.text--dark
        color rgba(25, 23, 91, 0.75)
</style>
