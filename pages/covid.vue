<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      InternationalCases
</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import InternationalCases from '~/components/InternationalCases'

export default {
  components: {
    ArticleHero,
    InternationalCases,
  },

  data() {
    return {
      title: 'COVID19 Status',

      image: require('~/assets/images/virus.jpg?resize'),
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'ogimage',
          property: 'og:image',
          content: this.image,
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.content
  padding 16px
  padding-top 32px
</style>
