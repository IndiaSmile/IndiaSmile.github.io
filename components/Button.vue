<template lang="pug">
  component(:is="element" :to="href")
    button.button
      | {{ text }}
      span.button__icon

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
      default: true,
    },
  },

  computed: {
    element() {
      return this.href ? 'nuxt-link' : 'span'
    },
  },
}
</script>

<style lang="stylus" scoped>
.button
  padding 0.5em 0.875em 0.5em 0.75em
  background rgba(28, 91, 255, 0.1)
  border 0
  border-radius 4px
  color #1C5BFF
  font-size 0.875em
  font-weight bold
  height 2.5em

  &__icon
    border solid #1C5BFF
    border-width 0 1.5px 1.5px 0
    transform rotate(-45deg)
    margin-left 0.5em
    padding 2px
</style>
