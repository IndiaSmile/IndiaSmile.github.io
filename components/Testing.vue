<template lang="pug">
  div
    .wrapper__header
      .wrapper__title 🧪 Testing in <strong>India</strong>
      .wrapper__subtitle {{ testsDone[2] ? testsDone[2].value : '...' }} samples tested so far

    .historical.testing
      .testing__data(v-show="showStats")
        .testing__data__date {{ computedTestDate }}
        .testing__data__item
          span.testing__data__item__box.testing__data__item__box--today
          .testing__data__item__count {{ stats.testsToday }}
          .testing__data__item__text tests done
        .testing__data__item
          span.testing__data__item__box.testing__data__item__box--positive
          .testing__data__item__count {{ stats.totalPositive }}
          .testing__data__item__text tests turned out positive
        .testing__data__item
          span.testing__data__item__box.testing__data__item__box--total
          .testing__data__item__count {{ stats.totalTests }}
          .testing__data__item__text total tests done

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

      stats: {
        date: 0,
        testsToday: 0,
        totalPositive: 0,
        totalTests: 0,
      },

      showStats: false,
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

    computedTestDate() {
      return moment(this.stats.date).format('DD MMMM')
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

      const indexScale = d3
        .scaleLinear()
        .domain([0, data.length])
        .range([0, innerWidth])

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

      // this line is about total tests done that day
      g.append('path')
        .attr('class', 'line-path line-path--recovered')
        .attr('d', lineGenerator1(data))

      // this line is about positive cases
      g.append('path')
        .attr('class', 'line-path line-path--cases')
        .attr('d', lineGenerator2(data))

      // add dots
      // these dots are for successful tests
      g.selectAll('.circle--recovered')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'circle circle--recovered')
        .attr('cx', (d) => xScale(xValue(d)))
        .attr('cy', (d) => yScale(yValue1(d)))
        .attr('r', 2.5)

      // these dots are for positive tests
      g.selectAll('.circle--cases')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'circle circle--cases')
        .attr('cx', (d) => xScale(xValue(d)))
        .attr('cy', (d) => yScale(yValue2(d)))
        .attr('r', 2.5)

      const mouseG = svg.append('g').attr('class', 'cover-mouse-over')

      mouseG
        .append('svg:rect')
        .attr('width', w)
        .attr('height', h)
        .attr('pointer-events', 'all')
        .on('mousemove', () => {
          const mouse = d3.mouse(d3.event.target)

          const i = Math.round(indexScale.invert(mouse[0]))
          if (i >= 0 && i < data.length) {
            this.showStats = true
            this.stats = data[i]
          }
        })
        .on('mouseout', () => {
          this.showStats = false
        })
    },
  },
}
</script>

<style lang="stylus" scoped>
.testing
  &__data
    position absolute
    left 0
    top 0

    &__date
      font-weight bold
      font-size 0.85rem

    &__item
      display flex
      align-items center
      font-size 0.75rem

      &__box
        width 0.5rem
        height 0.5rem
        border-radius 0.1rem

        &--today
          background #2ed573
        &--positive
          background #ff4757
        &--total
          background #ff7f50

      &__count
        margin 0 0.5rem
        font-weight bold
</style>
