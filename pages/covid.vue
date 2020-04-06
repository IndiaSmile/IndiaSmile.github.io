<template lang="pug">
  .article
    TextHero(
      title="COVID-19 Around You"
    )
      ul
        li 🌐 Scroll & understand COVID-19's worldwide spread
        li 👬 Join <strong>communities</strong> to make new friends
        li 🧠 <strong>Share & save</strong>: only source you need to keep updated.

    .content
      Tracker

      IndianCases(:historical="historical")

      hr.wrapper__hr
      InternationalCases.margin-top(:historical="historical")

      hr.wrapper__hr
      Testing.margin-top



      hr.wrapper__hr
      Articles.margin-top(:count="3")

      hr.wrapper__hr
      LockdownCountdown.margin-top

      hr.wrapper__hr
      CovidDisclaimers
</template>

<script>
import TextHero from '~/components/TextHero'
import InternationalCases from '~/components/InternationalCases'
import Tracker from '~/components/Tracker'
import LockdownCountdown from '~/components/LockdownCountdown'
import CovidDisclaimers from '~/components/CovidDisclaimers'
import IndianCases from '~/components/IndianCases'
import Articles from '~/components/Articles'
import Testing from '~/components/Testing'

export default {
  components: {
    TextHero,
    InternationalCases,
    Tracker,
    LockdownCountdown,
    CovidDisclaimers,
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
  padding 1rem 1.5rem
</style>
