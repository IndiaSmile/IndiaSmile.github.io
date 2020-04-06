<template lang="pug">
  .hero.is-primary
    Header
    .hero-body.has-text-centered
      .container
        h2.title {{ title }}
        .subtitle
          slot
</template>

<script>
export default {
  name: 'TextHero',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.hero
  .hero-body
    padding 1.5rem

  .title
    font-size 1.6em

  .subtitle
    font-size 1em
    width fit-content
    text-align left
    margin -.5em auto 0

    li
      padding .5em 0
      list-style normal
</style>
