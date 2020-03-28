<template lang="pug">
  button.hero__button(@click="goBack")
    span.hero__button__icon
    | BACK

</template>

<script>
export default {
  methods: {
    goBack() {
      // go up one level by default
      const path = window.location.pathname.split('/')
      if (path.length >= 1) {
        path.pop()
        const backPath = path.join('/') || '/'
        return this.$router.push({ path: backPath })
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.hero__button
  position absolute
  left 1.125rem
  height 1.5rem
  font-size 0.75em
  font-weight bold
  border 0
  color #3B4CFE
  background-color rgba(59, 76, 254, 0.2)
  border-radius 2.5rem
  z-index 100
  padding-right 0.625rem
  display flex
  align-items center

  &__icon
    display inline-block
    border solid #1C5BFF
    border-width 0 1.5px 1.5px 0
    transform rotate(135deg)
    padding 2px
</style>
