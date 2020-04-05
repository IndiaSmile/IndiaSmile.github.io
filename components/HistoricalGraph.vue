<template lang="pug">
  svg(ref="svg")
</template>

<script>
import moment from 'moment'

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      id: 'historicalGraph' + Math.floor(Math.random() * 1000),
    }
  },

  watch: {
    data() {
      this.createGraph()
    },
  },

  created() {
    if (typeof window !== 'undefined' && !!this.data.length) {
      this.createGraph()
    }
  },

  methods: {
    createGraph() {
      const d3 = require('d3')

      const w = document.querySelector('.content').offsetWidth - 20
      const h = w * 0.67
      const margin = { top: 0, right: 40, bottom: 30, left: 0 }
      const innerWidth = w - margin.left - margin.right
      const innerHeight = h - margin.top - margin.bottom

      const { cases, deaths, recovered } = this.data

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
        .select(this.$refs.svg)
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

<style lang="stylus">
svg
  display block
  margin 0 auto

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
