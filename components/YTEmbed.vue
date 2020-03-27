<template lang="pug">
  div.wrapper
    iframe(:src="computedSource" frameborder="0" allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen)
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: '',
    },
  },

  computed: {
    computedSource() {
      return this.src.replace('watch?v=', 'embed/')
    },
  },
}
</script>

<style scoped lang="stylus">
.wrapper
  position relative
  width 100%
  height 0
  padding-top 56.25%

  iframe
    position absolute
    left 0
    top 0
    width 100%
    height 100%
</style>
