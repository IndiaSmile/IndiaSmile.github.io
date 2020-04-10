<template lang="pug">
  .colophon
    .colophon__content
      p By the अति विशिष्ट people at <a href="https://nataco.us/">NATACO</a>
      p IndiaSmile is a Non-Profit and is fully <a href="https://github.com/IndiaSmile">open source</a>. Contributions & ideas are welcome!
      p जनहित में जारी &copy; 2020
      p #[a(href='/pp') Privacy Policy]
      p Jai Hind 🇮🇳
</template>

<script>
export default {
  name: 'Colophon',
}
</script>

<style lang="stylus" scoped>
.colophon
  background #34495e
  font-size .75em
  padding 2em
  margin 1.5em 0 0
  text-align center
  color rgba(white, .65)
  line-height 1.5

  p
    margin 1em 0
</style>
