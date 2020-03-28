<template lang="pug">
  .wrapper
    transition(name="fade")
      nuxt
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
