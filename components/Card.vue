<template lang="pug">
  .card(:class="{'card--large': !!button}")
    component.link(:is="element" :to="to")
      img.card__image(:srcSet="image.srcSet" :src="image.src")
      .card__gradient(:style="{ backgroundImage: 'linear-gradient(180deg, rgba(196, 196, 196, 0) 30.73%, ' + color + ' 70.31%)'}")
      .card__text
        .card__text__title(:class="className") {{ title }}
        .card__text__subtitle(:class="className") {{ subtitle }}

        .card__action(v-if="!!button")
          a(:href="to")
            b-button.card__action__button(icon-right="chevron-right" :class="className") {{ button }}

</template>

<script>
export default {
  props: {
    image: {
      type: Object,
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
    button: {
      type: String,
      required: false,
      default: '',
    },
  },

  computed: {
    className() {
      return this.isDarkText ? 'text--dark' : ''
    },

    element() {
      return this.button ? 'div' : 'nuxt-link'
    },
  },
}
</script>

<style scoped lang="stylus">
.card
  border-radius 0.4em
  position relative
  box-shadow none
  overflow hidden
  padding-bottom 56.25%

  &__gradient
    position absolute
    width 100%
    height 100%
    left 0
    bottom 0
    z-index 2
    border-radius 0.4em

  &--large
    padding-bottom 100%

    .card__gradient
      height 125%

  &__image
    display block
    width 100%


  &__text
    position absolute
    left 1em
    right 1em
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

  &__action
    margin-top 0.75rem

    &__button
      border 0
      color #fff
      background rgba(255, 255, 255, 0.2)

      &.text--dark
        color #000
        background rgba(0,0,0,0.1)

.link
  display block
  overflow hidden
  position absolute
  top 0
  right 0
  bottom 0
  left 0
</style>
