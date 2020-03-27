<template lang="pug">
  div.main
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}

</template>

<script>
import ArticleHero from '~/components/ArticleHero'

export default {
  name: 'HomePage',
  components: {
    ArticleHero,
  },

  data() {
    return {
      image: require('~/assets/images/whatsapp-alt.png'),
      title: 'Whatsapp communities',
    }
  },

  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style scoped lang="stylus">
.main
  display flex
  flex-direction column
  align-items center

  .content
    width 100%
    max-width 26em
    padding 1.5em 1.875em

    &__title
      color #19175B
      font-size 1.5em
      font-weight bold

    &__heading
      color #19175B
      font-size 1em
      font-weight bold

    &__text
      color #000
      font-size 0.875em
      margin-bottom 1.5em
</style>
