<template lang="pug">
  component.wrapper(:is="element" v-bind="attribute")
    b-button(:type="computedType" :icon-left="leftIcon") {{text}}

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

    attribute() {
      if (this.element === 'a') {
        return { href: this.href, target: '_blank' }
      } else if (this.element === 'nuxt-link') {
        return { to: this.href }
      } else {
        return {}
      }
    },

    computedType() {
      if (this.text.toLowerCase() === 'ios') {
        return 'is-black'
      } else if (this.text.toLowerCase() === 'android') {
        return 'is-success'
      } else {
        return ''
      }
    },

    leftIcon() {
      if (this.text.toLowerCase() === 'android') {
        return 'google-play'
      } else if (this.text.toLowerCase() === 'ios') {
        return 'apple'
      } else {
        return ''
      }
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

<style lang="stylus" scoped></style>
