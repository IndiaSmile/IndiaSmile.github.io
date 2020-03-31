<template lang="pug">
  .card(:class="parentClassNames")
    component.link(:is="element" :to="to")
      img.card__image(:srcSet="image.srcSet" :src="image.src")
      .card__gradient(:style="{ backgroundImage: 'linear-gradient(180deg, rgba(196, 196, 196, 0) 30.73%, ' + color + ' 70.31%)'}")
      .card__text
        .card__text__title(:class="textClassName") {{ title }}
        .card__text__subtitle(:class="textClassName") {{ subtitle }}

        .card__action(v-if="!!button")
          a(:href="to")
            b-button.card__action__button(icon-right="chevron-right" :class="textClassName") {{ button }}

        .card__list(v-if="!!list.length")
          a.card__list__item(v-for="(item, idx) in list" :key="idx" :href="item.link" target="_blank" rel="nofollow")
            img.card__list__item__icon(:src="item.image")
            .card__list__item__body
              .card__list__item__body__text
                .card__list__item__body__text__name {{ item.name }}
                .card__list__item__body__text__subtext Buy now
              .card__list__item__body__icon
                b-icon(icon="chevron-right")

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
    list: {
      type: Array,
      required: false,
      default: () => [],
    },
  },

  computed: {
    parentClassNames() {
      if (this.button) {
        return 'card--large'
      } else if (this.list.length) {
        return ['card--list', 'card--list--' + this.list.length]
      } else {
        return ''
      }
    },

    textClassName() {
      return this.isDarkText ? 'text--dark' : ''
    },

    element() {
      return this.button || !!this.list.length ? 'div' : 'nuxt-link'
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

  &--list
    &--1
      padding-bottom 56%

      .card__gradient
        height 100%
    &--2
      padding-bottom 70%

      .card__gradient
        height 90%
    &--3
      padding-bottom 96%

      .card__gradient
        height 170%

    &--4
      padding-bottom 109%

      .card__gradient
        height 170%

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

  &__list
    &__item
      display flex
      justify-content flex-start
      align-items center
      border-bottom 1px solid rgba(0, 0, 0, 0.12)
      padding 8px 0

      &:last-child
        border-bottom 0

      &__icon
        width 2.25rem
        height 2.25rem
        border-radius 0.375rem
        margin-right 0.75rem

      &__body
        width 100%
        display inline-flex
        justify-content space-between

        &__text
          &__name
            font-weight 500
            color #19175B
            font-size 0.875em

          &__subtext
            font-size 0.75em
            color rgba(25, 23, 91, 0.6)

        &__icon
          display inline-flex
          align-items center
          color #000000

.link
  display block
  overflow hidden
  position absolute
  top 0
  right 0
  bottom 0
  left 0
</style>
