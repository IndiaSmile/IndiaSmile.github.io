<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h3 COVID-19 India Statistics
      LocalStats.stats

      Sharer(:title="title")

      Articles

      Sharer(:title="title")
</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import LocalStats from '~/components/LocalStats'
import Articles from '~/components/Articles'
// import indiaSmileLogo from '~/assets/logo-square.png'

export default {
  name: 'HomePage',
  components: {
    ArticleHero,
    LocalStats,
    Articles,
  },

  data() {
    return {
      image: require('~/assets/images/newspapers-stack.jpg?resize'),
      title: 'News',
    }
  },

  head() {
    return {
      title: this.title,
      script: [
        {
          src: '//geoip-js.com/js/apis/geoip2/v2.1/geoip2.js',
        },
      ],
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

<style scoped lang="stylus">
.stats
  margin-top 1.5rem

.content
  &__section
    margin-bottom 1rem
</style>
