<template lang="pug">
  .hero__header
    nuxt-link(to="/")
      img.hero__header__logo(src="~/assets/logo-horizontal-2.png")
</template>

<script>
export default {
  name: 'Header',
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

  &__logo
    height 2em
    display block
</style>
