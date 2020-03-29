<template lang="pug">
  .hero__header
    b-button.hero__header__button(v-if="showBackButton" size="is-small" icon-left="chevron-left" @click="goBack") BACK

    nuxt-link(to="/")
      img.hero__header__logo(src="~/assets/logo-horizontal-2.png")
</template>

<script>
export default {
  name: 'Header',

  props: {
    showBackButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    goBack() {
      // go up one level by default
      const path = window.location.pathname.split('/')
      if (path.length >= 1) {
        if (!path.pop()) path.pop() // pop twice if last is empty
        const backPath = path.join('/') || '/'
        return this.$router.push({ path: backPath })
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.hero__header
  padding 0.5em
  display flex
  align-items center
  justify-content center
  background linear-gradient(rgba(#fff, .9) 50%, transparent)
  margin 0 0 -3em
  position relative
  z-index 99

  &__button
    position absolute
    left 1.125rem
    border-radius 2.5rem!important
    background-color rgba(59, 76, 254, 0.2)

  &__logo
    height 2em
    display block
</style>
