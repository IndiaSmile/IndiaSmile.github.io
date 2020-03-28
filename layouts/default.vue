<template lang="pug">
  .wrapper
    transition(name="fade")
      nuxt
    .colophon
      .colophon__content
        p By the अति विशिष्ट people at <a href="https://nataco.us/">NATACO</a>
        p जनहित में जारी &copy; 2020
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.wrapper
  font-family 'DM Sans', sans-serif

  .fade-enter-active
    -webkit-animation-duration 1s
    animation-duration 1s
    -webkit-animation-fill-mode both
    animation-fill-mode both
    -webkit-animation-name fadeIn
    animation-name fadeIn

// fade page animation
@-webkit-keyframes fadeIn
  from
    opacity 0
  to
    opacity 1

@keyframes fadeIn
  from
    opacity 0
  to
    opacity 1

// colophon
.colophon
  background #34495e
  font-size .75em
  padding 2em 0
  margin 1.5em 0 0
  text-align center
  color rgba(white, .65)
  line-height 2.5
</style>
