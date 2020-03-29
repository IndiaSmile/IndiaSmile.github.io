<template lang="pug">
  component.wrapper(:is="element" v-bind="parentAttributes")
    b-button(v-bind="buttonAttributes")
      span(v-html="content")
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
    type: {
      type: String,
      required: false,
      default: '',
    },
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

    parentAttributes() {
      if (this.element === 'a') {
        return { href: this.href, target: '_blank' }
      } else if (this.element === 'nuxt-link') {
        return { to: this.href }
      } else {
        return {}
      }
    },

    buttonAttributes() {
      const attributesMap = {
        ios: {
          type: 'is-black',
          'icon-left': 'apple',
        },
        android: {
          class: 'button--android',
          'icon-left': 'google-play',
        },
        // @TODO: make netflix, hotstar, and prime buittons with correct colors
        netflix: {
          'icon-left': 'netflix',
          class: 'button--extra button--netflix',
        },
        default: {
          type: 'is-primary',
          outlined: true,
          'icon-left': 'web',
        },
      }
      return attributesMap[this.type] || attributesMap.default
    },

    content() {
      const htmlMap = {
        android: 'Android',
        ios: 'iOS',
        // @TODO: make netflix, hotstar, and prime buittons with correct colors
        netflix: `<span class="sm">Watch on</span><span class="text">Netflix</span>`,
        default: '',
      }
      return this.text || htmlMap[this.type] || this.type || htmlMap.default
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
.button--extra
  padding-top calc(.75em - 1px)
  height 2.625em
  border 0

/deep/ .sm
  display block
  font-size .5em
  line-height 1em
  text-transform uppercase
  position absolute
  top .75em
  color rgba(white, .75)


// @TODO: make netflix, hotstar, and prime buittons with correct colors
.button--android
  background #a4c639
  color #fff
  border 0

.button--netflix
  background #e50914
  color white
</style>
