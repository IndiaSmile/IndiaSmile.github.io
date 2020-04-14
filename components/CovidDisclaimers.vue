<template lang="pug">
  div
    .disclaimer__footer
      p.disclaimer__footer__text Statistical information provided by our friends at
      a.disclaimer__footer__link(href="https://api.covid19india.org" target="_blank" rel="nofollow") covid19india.org
        b-icon(icon="open-in-new" size="is-small")

    b-message.disclaimer__message(type="is-warning is-small") * This information is sourced from crowdsource data and can be inaccurate. Do not panic & wait for government sources to verify this data.
</template>

<script>
export default {
  name: '',
}
</script>

<style lang="stylus" scoped>
.disclaimer__footer
  margin-top 0.5rem
  text-align center

  &__text
    font-size 0.625rem
    margin-bottom 0!important

  &__link
    color #1C5BFF
    padding 0.5rem 1rem
    background-color rgba(28, 91, 255, 0.1)
    text-decoration underline
    margin 0.5rem 0
    display inline-block
    font-size 0.875rem
    border-radius 0.25rem

.disclaimer__message
    margin-top 1rem
</style>
