<template lang="pug">
  .wrapper
    transition(name="fade")
      nuxt
    Colophon
    client-only
      HighlightSharer
</template>

<script>
import Colophon from '~/components/Colophon'
import HighlightSharer from '~/components/HighlightSharer'

export default {
  components: {
    Colophon,
    HighlightSharer,
  },
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
      ],
    }
  },
}
</script>

<style lang="stylus">
.wrapper
  font-family 'DM Sans', sans-serif

  .fade-enter-active
    -webkit-animation-duration 1s
    animation-duration 1s
    -webkit-animation-fill-mode both
    animation-fill-mode both
    -webkit-animation-name fadeIn
    animation-name fadeIn

// fade page animation
@-webkit-keyframes fadeIn
  from
    opacity 0
  to
    opacity 1

@keyframes fadeIn
  from
    opacity 0
  to
    opacity 1

// for article styles
.article
  display flex
  flex-direction column
  align-items center

  .content
    width 100%
    max-width 26em
    padding 1.5em 1.875em

    &__header
      display flex
      justify-content space-between
      margin 1.5rem 0 1rem

    &__rating
      font-size .875em
      display flex
      align-content center
      font-weight bold
      color #f1c40f

      /deep/ .icon
        font-size 2em
        margin-right .25em
        height 1.375rem

    &__title
      color #19175B
      font-size 1.5em
      font-weight bold

    &__heading
      color #19175B
      font-size 1.25em
      margin 0
      font-weight bold

    &__text
      color #35394c
      font-size 1em
      margin-bottom 1rem
      white-space pre-line

    &__button
      margin-bottom 1rem

    &__buttons
      margin-bottom 1.5em

      &__item
        margin-right 0.5em

// for card list index pages
.main
  .content
    padding 1.25em

    &__title
      color #19175B
      font-size 1.5em
      font-weight bold
      text-align center
</style>
