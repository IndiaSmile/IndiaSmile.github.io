<template lang="pug">
  .wrapper
    transition(name="fade")
      nuxt
    Colophon
    client-only
      HighlightSharer

    b-modal(:active.sync='isShareModalActive' has-modal-card trap-focus aria-role='dialog' aria-modal)
      .card.share-modal
        .card-image
          img(src='~/assets/images/support.png')

        .card-content.content
          .content__heading Thanks for supporting IndiaSmile!
          .share-modal__text Follow us on Facebook and Twitter to stay up to date with the latest developments.

          ul.share-modal__actions.social-list
            li.social-list__item(@click="share('facebook')")
              b-icon.social-list__item__icon.icon--facebook(size="is-small" icon="facebook")
              | Like on Facebook
            li.social-list__item(@click="share('twitter')")
              b-icon.social-list__item__icon.icon--twitter(size="is-small" icon="twitter")
              | Follow on Twitter

          .share-modal__text Thanks and keep smiling! #[br] - IndiaSmile Team
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

      isShareModalActive: false,
      socialLinks: {
        twitter: 'https://twitter.com/indiasmileorg',
        facebook: 'https://www.facebook.com/IndiaSmileOrg/',
      },
    }
  },

  mounted() {
    let SiteViewsCount = this.$storage.getLocalStorage('SiteViewsCount')
    let ShowShareModal = this.$storage.getLocalStorage('ShowShareModal')

    if (SiteViewsCount === null) {
      this.$storage.setLocalStorage('SiteViewsCount', 1)
      SiteViewsCount = 1
    } else {
      SiteViewsCount++
      this.$storage.setLocalStorage('SiteViewsCount', SiteViewsCount)
    }

    if (ShowShareModal === null) {
      this.$storage.setLocalStorage('ShowShareModal', true)
      ShowShareModal = true
    }

    if (
      ShowShareModal &&
      typeof SiteViewsCount === 'number' &&
      (SiteViewsCount === 2 ||
        (SiteViewsCount % 2 === 1) & (SiteViewsCount >= 5))
    ) {
      this.isShareModalActive = true

      const js = document.createElement('script')
      js.src = 'https://platform.twitter.com/widgets.js'
      document.body.appendChild(js)
    }
  },

  methods: {
    share(name) {
      this.$storage.setLocalStorage('ShowShareModal', false)

      window.open(this.socialLinks[name])
    },
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

  // header & typoography
  &__hr
    margin 1rem -.5rem
    height 3px
    border-top thin solid #eee

  &__header
    margin 0 0 .5rem

  &__title
    margin 0
    font-size 1.125em
    font-weight normal

  &__subtitle
    font-size .875em
    color inherit
    font-weight normal
    color #999
    margin 0 !important

    &--em
      color #1C5BFF

  &__title--small
    font-size 1.125em
    color #444
    font-weight bold

  // for share modal
  .share-modal
    max-width 20rem
    margin 0 auto
    border-radius 0.5rem

    &__actions
      margin-bottom 1rem!important

    &__text
      margin 0
      font-size 0.875rem
      color rgba(25, 23, 91, 0.65)

    img
      display block
      border-radius 0.5rem 0.5rem 0 0

    .content
      padding 1.25rem 1.5rem 2rem 1.5rem

      &__heading
        margin-top 0

// for article styles
.article
  display flex
  flex-direction column
  align-items center

.content
  width 100%
  max-width 26em
  padding 1.5em 1.875em

  .historical
    position relative
    width calc(100% + 2rem)
    margin 0 -1rem

    &__data
      position absolute
      left 1rem
      top 0

      &__date
        font-weight bold
        font-size 0.85rem

      &__item
        display flex
        align-items center
        font-size 0.75rem

        &__box
          width 0.5rem
          height 0.5rem
          border-radius 0.1rem

          &--recovered
            background #2ed573
          &--total
            background #ff4757
          &--active
            background #70a1ff
          &--deceased
            background #7f8c8d

        &__count
          margin 0 0.5rem
          font-weight bold

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
    word-break break-word

  &__button, &__button:hover, &__button:active
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
      margin-right 0.5rem

      img
        height 2rem
        border-radius 100%

    &__text
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


.social-list
  margin 0!important
  margin-top 1rem
  padding 0
  list-style-type none

  &__item
    display inline-flex
    justify-content center
    margin-top 1rem
    background-color rgba(28,91,255,0.05)
    padding 0.5rem 1rem
    border-radius 0.25rem
    border-bottom 4px solid rgba(28,91,255,0.05)
    cursor pointer

    &__icon
      margin-right 0.5rem
      color #fff
      border-radius 100%
      height 1.5rem!important
      width 1.5rem!important

      &.icon--twitter
        background-color #1DA1F2

      &.icon--facebook
        background-color #4267B2

      &.icon--whatsapp
        background-color #25D366

// for card list index pages
.main
  .content
    padding 1.25em

    &__title
      color #19175B
      font-size 1.5em
      font-weight bold
      text-align center

.margin-top
  margin-top 1rem


svg
  display block
  margin 0 auto

.line-path
    fill none
    stroke-width 2
    stroke-linejoin round

    &--active
      stroke #70a1ff

    &--cases
        stroke #ff4757

    &--recovered
        stroke #2ed573

    &--deaths
        stroke #a4b0be

.axis
    stroke #57606f
    stroke-width 1px

    .tick
        stroke none
        color #57606f

.circle
  stroke none

  &--active
    fill #70a1ff
  &--cases
    fill #ff4757
  &--deaths
    fill #a4b0be
  &--recovered
    fill #2ed573

.cover-mouse-over
  fill none

.text--confirmed
  color #ff4757
  &--light
    color rgba(255,7,58,.6)

.text--active
  color #70a1ff
  &--light
    color rgba(0,123,255,.6)

.text--deceased
  color #a4b0be
  &--light
    color rgba(108,117,125,.6)

.text--recovered
  color #2ed573
  &--light
    color rgba(40,167,69,.6)
</style>
