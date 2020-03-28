<template lang="pug">
</template>

<script>
import sharer from '~/services/sharer'

export default {
  name: 'HighlightSharer',
  created() {
    this.bindHighlightSharer()
  },
  methods: {
    bindHighlightSharer() {
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('js--h')) {
          const text = e.target.textContent
          const url = window.location.href
          sharer(text, url)
        }
        return
      })
    },
  },
}
</script>

<style lang="stylus">
.js--h
  background rgba(#54a0ff, .2)
  &:after
    content 'Share'
    position absolute
    font-size .875em
    font-weight bold
    text-transform uppercase
    border-radius .3em
    box-shadow 0 1px 3px rgba(black, .3)
    padding .1em .3em
    color white
    background #54a0ff
    transform rotate(-90deg)
    left -.5em
    margin-top -1em
</style>
