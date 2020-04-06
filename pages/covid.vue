<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      InternationalCases(:historical="historical")

      Tracker.margin-top

      IndianCases(:historical="historical")

      Articles.margin-top(:count="3")

      LockdownCountdown.margin-top

      Testing.margin-top

</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import InternationalCases from '~/components/InternationalCases'
import Tracker from '~/components/Tracker'
import LockdownCountdown from '~/components/LockdownCountdown'
import IndianCases from '~/components/IndianCases'
import Articles from '~/components/Articles'
import Testing from '~/components/Testing'

export default {
  components: {
    ArticleHero,
    InternationalCases,
    Tracker,
    LockdownCountdown,
    IndianCases,
    Articles,
    Testing,
  },

  data() {
    return {
      title: 'COVID19 Status',

      image: require('~/assets/images/virus.jpg?resize'),

      endpoints: {
        countrywise:
          'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=',
        historical: 'https://corona.lmao.ninja/v2/historical',
      },

      historical: [],
    }
  },

  async created() {
    // fetch historical data
    const historical = await this.$axios(this.endpoints.historical)

    this.historical = historical.data
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
  padding 1rem
  padding-top 2rem
</style>
