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

  head() {
    return {
      meta: [
        {
          hid: 'twitterImage',
          name: 'twitter:image',
          content:
            'https://indiasmile.org' +
            require('~/assets/images/meta-image.jpg'),
        },
      ],
    }
  },
}
</script>

<style lang="stylus">
.wrapper
  font-family 'DM Sans', sans-serif

  .fade-enter-active,
  .fade-leave-active
    transition opacity .5s

  .fade-enter,
  .fade-leave-active
    opacity 0

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

      .content__heading
        margin 0

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
      margin 1.5rem 0 1rem
      font-weight bold

    &__text
      color #35394c
      font-size 1em
      margin-bottom 1rem
      white-space pre-line

    &__button, &__button:hover
      margin-bottom 1rem
      background rgba(28, 91, 255, 0.1)
      color #1C5BFF
      font-weight bold
      border 0

    &__buttons
      margin-bottom 1.5em

      &__item
        margin-right 0.5em

    &__embed
      width 100%
      height 30em

    &__user
      display flex
      justify-content flex-start
      align-items center
      margin 1.5rem 0 1rem

      &__image
        height 2.25rem
        width 2.25rem
        border-radius 100%
        box-shadow 0px 0px 1px #3B4CFE
        display inline-flex
        justify-content center
        align-items center

        img
          height 2rem

      &__text
        margin-left 0.5rem
        display inline-flex
        justify-content center
        flex-direction column

        &__name
          color #19175B
          font-size 0.75em
          font-weight bold

        &__date
          color #3B4CFE
          font-size 0.625em

    &__image
      width 100%
      margin-bottom 1rem

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
