<template lang="pug">
  div
    .wrapper
      h3.wrapper__title Global statistics
      StatsBox(:data='globalData')

      .tabs-container
        .buttons.has-addons.is-centered
          .button.is-small(
            v-for="(country, idx) in countries"
            :key="idx"
            @click="switchCountry(idx)"
            :class="{ 'is-info is-selected': idx === currentCountry }"
          ) {{ country }}

        h3.wrapper__title {{ countries[currentCountry] }}
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
  &__title
    margin-top 0!important

  .tabs-container
    margin-top 1rem
</style>
