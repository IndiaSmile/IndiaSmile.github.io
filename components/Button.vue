<template lang="pug">
  component.wrapper(:is="element" v-bind="attribute")
    button.button(:class="computedClass")
      img.button__image(v-if="!!computedClass" :src="iconSource")
      | {{ text }}
      span.button__icon(v-if="icon")

</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: false,
      default: '#',
    },
    icon: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: '',
    },
  },

  data() {
    return {
      icons: {
        android: require('~/assets/images/play-store-icon.png'),
        ios: require('~/assets/images/apple-icon.png'),
      },
    }
  },

  computed: {
    element() {
      if (this.href === '#') {
        return 'span'
      } else if (this.isValidURL(this.href)) {
        return 'a'
      } else {
        return 'nuxt-link'
      }
    },

    attribute() {
      if (this.element === 'a') {
        return { href: this.href, target: '_blank' }
      } else if (this.element === 'nuxt-link') {
        return { to: this.href }
      } else {
        return {}
      }
    },

    computedClass() {
      if (this.text.toLowerCase() === 'ios') {
        return 'button--ios'
      } else if (this.text.toLowerCase() === 'android') {
        return 'button--android'
      } else {
        return ''
      }
    },

    iconSource() {
      return this.icons[this.text.toLowerCase()]
    },
  },

  methods: {
    isValidURL(str) {
      const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$',
        'i'
      ) // fragment locator

      return !!pattern.test(str)
    },
  },
}
</script>

<style lang="stylus" scoped>
.wrapper
  display inline-block

  .button
    padding 0.5em 0.875em 0.5em 0.75em
    background rgba(28, 91, 255, 0.1)
    border 0
    border-radius 4px
    color #1C5BFF
    font-size 0.875em
    font-weight bold
    height 2.5em
    display flex
    justify-content space-between
    align-items center

    &--android
      background green
      color #fff

    &--ios
      background #000
      color #fff

    &__image
      height 0.875em
      margin-right 0.5em

    &__icon
      border solid #1C5BFF
      border-width 0 1.5px 1.5px 0
      transform rotate(-45deg)
      margin-left 0.5em
      padding 2px
</style>
