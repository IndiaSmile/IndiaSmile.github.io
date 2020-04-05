<template lang="pug">
  div
    .wrapper
      h3.wrapper__title Global statistics

      .stats
        .stats__item.stats__item--confirmed
          .stats__item__text CONFIRMED
          .stats__item__number {{ global.total_cases }}
        .stats__item.stats__item--active
          .stats__item__text ACTIVE
          .stats__item__number {{ global.currently_infected }}
        .stats__item.stats__item--recovered
          .stats__item__text RECOVERED
          .stats__item__number {{ global.recovery_cases }}
        .stats__item.stats__item--deceased
          .stats__item__text DECEASED
          .stats__item__number {{ global.death_cases }}

      .tabs-container
        .buttons.has-addons.is-centered
          .button.is-small(v-for="(country, idx) in countries" :key="idx" @click="switchCountry(idx)" :class="{'is-info is-selected': idx === currentCountry}") {{ country }}

        h3.wrapper__title {{ countries[currentCountry] }}
        .stats
          .stats__item.stats__item--confirmed
            .stats__item__text CONFIRMED
            .stats__item__number {{ selectedCountry.total_cases }}
          .stats__item.stats__item--active
            .stats__item__text ACTIVE
            .stats__item__number {{ selectedCountry.active_cases }}
          .stats__item.stats__item--recovered
            .stats__item__text RECOVERED
            .stats__item__number {{ selectedCountry.total_recovered }}
          .stats__item.stats__item--deceased
            .stats__item__text DECEASED
            .stats__item__number {{ selectedCountry.total_deaths }}

        .historical
          svg.historical__graph#historicalGraph

</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      endpoints: {
        general:
          'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats',
        countrywise:
          'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=',
        historical: 'https://corona.lmao.ninja/v2/historical',
      },

      countries: ['Pakistan', 'Bangladesh', 'USA', 'Spain', 'Italy'],
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

      historical: [],
    }
  },

  computed: {
    selectedCountry() {
      return this.countriesData[this.countries[this.currentCountry]]
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

    // fetch historical data
    const historical = await this.$axios(this.endpoints.historical)

    this.historical = historical.data

    if (typeof window !== 'undefined') {
      this.createGraph()
    }
  },

  methods: {
    switchCountry(countryIndex) {
      this.currentCountry = countryIndex

      this.createGraph()
    },

    createGraph() {
      const d3 = require('d3')

      const w = document.querySelector('.historical').offsetWidth - 20
      const h = w * 0.67
      const margin = { top: 0, right: 40, bottom: 30, left: 0 }
      const innerWidth = w - margin.left - margin.right
      const innerHeight = h - margin.top - margin.bottom

      const { cases, deaths, recovered } = this.historical.find(
        (o) => o.country === this.countries[this.currentCountry]
      ).timeline

      const parseData = (d) => {
        return Object.entries(d).map((a) => {
          return { date: new Date(a[0]).getTime(), value: a[1] }
        })
      }

      const casesData = parseData(cases)

      const deathsData = parseData(deaths)

      const recoveredData = parseData(recovered)

      const date = (d) => {
        return moment(d).format('MMM DD')
      }

      const svg = d3
        .select('#historicalGraph')
        .attr('width', w)
        .attr('height', h)

      svg.selectAll('*').remove()

      const xValue = (d) => d.date
      const yValue = (d) => d.value

      const xScale = d3
        .scaleTime()
        .domain(d3.extent(casesData, xValue))
        .rangeRound([0, innerWidth])
        .nice()

      const yScale = d3
        .scaleLinear()
        .domain(d3.extent(casesData, yValue))
        .rangeRound([innerHeight, 0])
        .nice()

      const g = svg.append('g').attr('transform', 'translate(0, 10)')

      // create x axis
      g.append('g')
        .attr('transform', `translate(0, ${innerHeight})`)
        .attr('class', 'axis axis--x')
        .call(
          d3
            .axisBottom(xScale)
            .ticks(d3.timeWeek)
            .tickFormat(date)
        )
        .select('.domain')
        .remove()

      // create y axis
      g.append('g')
        .attr('transform', `translate(${innerWidth}, 0)`)
        .attr('class', 'axis axis--y')
        .call(
          d3
            .axisRight(yScale)
            .ticks(5)
            .tickPadding(5)
            .tickFormat(d3.format('~s'))
        )

      const lineGenerator = d3
        .line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))
        .curve(d3.curveCardinal)

      g.append('path')
        .attr('class', 'line-path line-path--cases')
        .attr('d', lineGenerator(casesData))

      g.append('path')
        .attr('class', 'line-path line-path--deaths')
        .attr('d', lineGenerator(deathsData))

      g.append('path')
        .attr('class', 'line-path line-path--recovered')
        .attr('d', lineGenerator(recoveredData))
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

  .stats
    display flex

    &__title
      font-weight bold

    &__item
      flex 1 0
      text-align center

      &__text
        font-weight 600
        font-size 0.75rem

      &__number
        font-size 1rem
        font-weight bold

      &--confirmed
        .stats__item__text
          color rgba(255,7,58,.6)
        .stats__item__number
          color #ff073a

      &--active
        .stats__item__text
          color rgba(0,123,255,.6)
        .stats__item__number
          color #007bff

      &--recovered
        .stats__item__text
          color rgba(40,167,69,.6)
        .stats__item__number
          color #28a745

      &--deceased
        .stats__item__text
          color rgba(108,117,125,.6)
        .stats__item__number
          color #6c757d

  .historical
    width calc(100% + 2rem)
    margin 0 -1rem

    &__graph
      display block
      margin 0 auto
</style>

<style lang="stylus">
.line-path
  fill none
  stroke-width 2
  stroke-linejoin round

  &--cases
    stroke #ff073a

  &--recovered
    stroke #28a745

  &--deaths
    stroke #6c757d

.axis
  stroke #6c757d
  stroke-width 1px

  .tick
    stroke none
    color #6c757d
</style>
