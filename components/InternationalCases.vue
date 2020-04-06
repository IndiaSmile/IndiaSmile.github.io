<template lang="pug">
  div
    .wrapper
      header.wrapper__header
        .wrapper__title 🌏 Global statistics
        .wrapper__subtitle Cases around the world
      StatsBox(:data='globalData')

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
          .historical__date(v-if="graphDate") {{ graphDate }}
          HistoricalGraph(:data="graphData" @updateBox="updateBox")

</template>

<script>
import moment from 'moment'
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

      boxValue: {},
    }
  },

  computed: {
    selectedCountry() {
      return Object.keys(this.boxValue).length
        ? this.boxValue
        : this.countriesData[this.countries[this.currentCountry]]
    },

    graphDate() {
      return this.selectedCountry.timestamp
        ? moment(this.selectedCountry.timestamp).format('DD MMMM')
        : undefined
    },

    globalData() {
      return {
        total_cases: this.global.total_cases,
        active_cases: this.global.currently_infected,
        total_recovered: this.global.recovery_cases,
        total_deaths: this.global.death_cases,
      }
    },
  },

  async created() {
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

    updateBox(value) {
      this.boxValue = value
    },
  },
}
</script>

<style lang="stylus" scoped>
.wrapper
  .tabs-container
    margin-top .5rem

.country-selector
  margin .5rem 0 .25rem
</style>
