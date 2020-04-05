<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      InternationalCases

      Tracker.margin-top

      Stats.margin-top
</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import InternationalCases from '~/components/InternationalCases'
import Tracker from '~/components/Tracker'
import Stats from '~/components/Stats'

export default {
  components: {
    ArticleHero,
    InternationalCases,
    Tracker,
    Stats,
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

<style lang="stylus" scoped>
.content
  padding 16px
  padding-top 32px
</style>
