<template lang="pug">
  .hero__header
    nuxt-link(to="/")
      img.hero__header__logo(src="~/assets/logo-horizontal.png")
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="stylus" scoped>
.hero
  &__header
    padding 0.5em
    display flex
    align-items center
    justify-content center
    background linear-gradient(rgba(#fff, .9) 50%, transparent)
    margin 0 0 -2em
    position relative
    z-index 99

    &__logo
      height 1em
      display block
</style>
