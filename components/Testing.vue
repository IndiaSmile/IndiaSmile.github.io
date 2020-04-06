<template lang="pug">
  div
    h3 Testing data

    .testing
      .testing__item(v-for="(test, i) in testsDone" :key="i" v-if="test.value" :class="test.class")
        .testing__item__text {{ test.name }}
        .testing__item__count {{ test.value }}
        .testing__item__subtext {{ test.subtext }}

    svg#testingGraph

    b-message.margin-top(type="is-info is-small") Source #[a(href="https://icmr.nic.in/content/covid-19") https://icmr.nic.in/content/covid-19]

</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      rows: [],
      endpoint:
        'https://sheets.googleapis.com/v4/spreadsheets/1R08ny_AVHLasuEyfT9lNX5sscBi6Nl5mgKvQ3cmSvj8/values/Sheet1!A1:G40?key=AIzaSyB1O3W2yx8LTFwrYDsn98FuvaAG50k7hkI',
    }
  },

  computed: {
    computedData() {
      const data = this.rows
      data.shift()

      return data
        .map((a) => {
          if (a.length > 3) {
            return {
              date: Number(moment(a[0], 'DD/MM/YYYY').format('x')),
              testsToday: Number(a[2]),
              totalPositive: Number(a[3]),
              totalTests: Number(a[4]),
            }
          } else {
            return {}
          }
        })
        .filter((a) => {
          return !!Object.keys(a).length
        })
    },

    testsDone() {
      if (Object.keys(this.computedData).length) {
        const lastElement = this.computedData[this.computedData.length - 1]
        const secondLastElement = this.computedData[
          this.computedData.length - 2
        ]

        return [
          {
            name: 'Today',
            value: moment().isSame(lastElement.date, 'date')
              ? lastElement.testsToday
              : 0,
            subtext: 'Tests done',
            class: 'today',
          },
          {
            name: 'Yesterday',
            value: moment().isSame(lastElement.date, 'date')
              ? secondLastElement.testsToday
              : 0,
            subtext: 'Tests done',
            class: 'yesterday',
          },
          {
            name: 'Total',
            value: lastElement.totalTests,
            subtext: 'Tests done',
            class: 'total',
          },
          {
            name: 'Total',
            value: lastElement.totalPositive,
            subtext: 'Positive cases',
            class: 'positive',
          },
        ]
      } else {
        return []
      }
    },
  },

  async created() {
    const res = await this.$axios(this.endpoint)

    this.rows = res.data.values

    if (typeof window !== 'undefined') {
      this.createGraph()
    }
  },

  methods: {
    createGraph() {
      const d3 = require('d3')

      const w = document.querySelector('.content').offsetWidth - 20
      const h = w * 0.34
      const margin = { top: 0, right: 40, bottom: 30, left: 0 }
      const innerWidth = w - margin.left - margin.right
      const innerHeight = h - margin.top - margin.bottom

      const data = this.computedData

      const date = (d) => {
        return moment(d).format('MMM DD')
      }

      const svg = d3
        .select('#testingGraph')
        .attr('width', w)
        .attr('height', h)

      svg.selectAll('*').remove()

      const xValue = (d) => d.date
      const yValue1 = (d) => d.testsToday
      const yValue2 = (d) => d.totalPositive

      const xScale = d3
        .scaleTime()
        .domain(d3.extent(data, xValue))
        .rangeRound([0, innerWidth])
        .nice()

      const yScale = d3
        .scaleLinear()
        .domain(d3.extent(data, yValue1))
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

      const lineGenerator1 = d3
        .line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue1(d)))
        .curve(d3.curveCardinal)

      const lineGenerator2 = d3
        .line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue2(d)))
        .curve(d3.curveCardinal)

      g.append('path')
        .attr('class', 'line-path line-path--recovered')
        .attr('d', lineGenerator1(data))

      g.append('path')
        .attr('class', 'line-path line-path--cases')
        .attr('d', lineGenerator2(data))
    },
  },
}
</script>

<style lang="stylus" scoped>
.testing
  display flex
  text-align center

  &__item
    padding 1rem
    border-radius 0.25rem
    margin 0 0.125rem

    &.total
      background rgba(108,117,125,.0627451)
      color #6c757d

    &.today
      background rgba(40,167,69,.12549)
      color #28a745

    &.yesterday
      background rgba(0,123,255,.0627451)
      color #007bff

    &.positive
      background rgba(255,7,58,.12549)
      color #ff073a

    &__text
      font-size 0.85rem

    &__count
      font-size 1.2rem
      font-weight bold

    &__subtext
      font-size 0.75rem
</style>
