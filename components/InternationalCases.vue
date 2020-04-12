<template lang="pug">
  div
    .wrapper
      header.wrapper__header
        .wrapper__title 🌏 Global statistics
        .wrapper__subtitle Cases around the world
      StatsBox(:data='globalData' :showTotal="true")

      .share-box(@click="share")
        .share-box__icon
          b-icon.share-box__icon__element(icon="share-variant")
        .share-box__text
          .share-box__text__title Share with your friends!
          .share-box__text__subtitle Stay informed and keep others informed.


      .tabs-container
        hr.wrapper__hr
        header.wrapper__header
          .wrapper__title 🚩 Country History
          .wrapper__subtitle Tap to see their charts
        .country-selector.buttons.has-addons
          .button.is-small(
            v-for="(country, idx) in countries"
            :key="idx"
            @click="switchCountry(idx)"
            :class="{ 'is-warning is-selected': idx === currentCountry }"
          ) {{ country }}

        //- .wrapper__title--small {{ countries[currentCountry] }}
        StatsBox(:data='selectedCountry')

        .historical
          .historical__data(v-show="showStats")
            .historical__data__date {{ computedDate }}
            .historical__data__item
              span.historical__data__item__box.historical__data__item__box--active
              .historical__data__item__count {{ stats.active }}
              .historical__data__item__text active
            .historical__data__item
              span.historical__data__item__box.historical__data__item__box--recovered
              .historical__data__item__count {{ stats.recovered }}
              .historical__data__item__text recovered
            .historical__data__item
              span.historical__data__item__box.historical__data__item__box--deceased
              .historical__data__item__count {{ stats.deceased }}
              .historical__data__item__text deceased

          HistoricalGraph(:data="graphData" @updateStats="updateStats")

</template>

<script>
import moment from 'moment'
import sharer from '~/services/sharer'
import StatsBox from '~/components/StatsBox'
import HistoricalGraph from '~/components/HistoricalGraph'

export default {
  components: {
    StatsBox,
    HistoricalGraph,
  },

  props: {
    historical: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      endpoints: {
        general:
          'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats',
        countrywise:
          'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=',
      },

      countries: ['India', 'Pakistan', 'Bangladesh', 'USA', 'Italy'],
      currentCountry: 0,

      global: {},
      countriesData: {
        Pakistan: {},
        Bangladesh: {},
        USA: {},
        Spain: {},
        Italy: {},
        India: {},
      },

      graphData: {},

      stats: {
        date: 0,
        active: 0,
        recovered: 0,
        deceased: 0,
      },

      showStats: false,

      shareMessage: `Get the latest COVID19 stats and check from your family's location: https://indiasmile.org/covid 🦠

Stay Indoors & Stay Safe 🇮🇳`,
    }
  },

  computed: {
    selectedCountry() {
      return this.countriesData[this.countries[this.currentCountry]]
    },

    globalData() {
      return {
        total_cases: this.global.total_cases,
        active_cases: this.global.currently_infected,
        total_recovered: this.global.recovery_cases,
        total_deaths: this.global.death_cases,
      }
    },

    computedDate() {
      return moment(this.stats.date).format('DD MMMM')
    },
  },

  watch: {
    historical() {
      this.updateGraph()
    },
  },

  async mounted() {
    // fetch global data
    const response = await this.$axios(this.endpoints.general)

    this.global = response.data.data

    // fetch countrywise data
    for (const country of this.countries) {
      const response = await this.$axios(this.endpoints.countrywise + country)
      this.countriesData[country] = response.data.data.rows[0]
    }

    this.updateGraph()
  },

  methods: {
    switchCountry(countryIndex) {
      this.currentCountry = countryIndex
      this.boxValue = {}

      this.updateGraph()
    },

    updateGraph() {
      if (this.historical.length) {
        this.graphData = this.historical.find(
          (o) => o.country === this.countries[this.currentCountry]
        ).timeline
      }
    },

    updateStats(stats) {
      if (stats) {
        this.showStats = true
        this.stats = stats
      } else {
        this.showStats = false
      }
    },

    share() {
      sharer(this.shareMessage)
    },
  },
}
</script>

<style lang="stylus" scoped>
.wrapper
  .share-box
    display flex
    margin 0.875rem 0
    box-shadow 2px 2px 5px #ddd
    padding 0.8rem
    border-radius 0.25rem

    &__icon
      width 2.5rem
      height 2.5rem
      border-radius 100%
      background #E8EFFF
      margin-right 0.5625rem
      display inline-flex
      justify-content center
      align-items center

      &__element
        color #1C5BFF
        font-size 1.25rem

    &__text
      &__title
        font-size 0.875rem
        color #000
        font-weight bold

      &__subtitle
        font-size 0.75rem
        color #505050

  .tabs-container
    margin-top .5rem

.country-selector
  margin .5rem 0 .25rem
</style>
