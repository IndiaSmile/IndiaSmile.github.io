<template lang="pug">
  .wrapper
    transition(name="fade")
      nuxt
    Colophon
    HighlightSharer
</template>

<script>
import Colophon from '~/components/Colophon'
import HighlightSharer from '~/components/HighlightSharer'

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
  components: {
    Colophon,
    HighlightSharer
  }
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
</style>
