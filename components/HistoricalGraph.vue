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
      const h = w * 0.34
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

      const activeData = casesData.map((o, index) => {
        return {
          date: o.date,
          value: o.value - deathsData[index].value - recoveredData[index].value,
        }
      })

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
        .domain(d3.extent(activeData, xValue))
        .rangeRound([0, innerWidth])
        .nice()

      const yScale = d3
        .scaleLinear()
        .domain(d3.extent(activeData, yValue))
        .rangeRound([innerHeight, 0])
        .nice()

      const indexScale = d3
        .scaleLinear()
        .domain([0, activeData.length])
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

      const lineGenerator = d3
        .line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))
        .curve(d3.curveCardinal)

      g.append('path')
        .attr('class', 'line-path line-path--active')
        .attr('d', lineGenerator(activeData))

      g.append('path')
        .attr('class', 'line-path line-path--deaths')
        .attr('d', lineGenerator(deathsData))

      g.append('path')
        .attr('class', 'line-path line-path--recovered')
        .attr('d', lineGenerator(recoveredData))

      g.selectAll('.circle--active')
        .data(activeData)
        .enter()
        .append('circle')
        .attr('class', 'circle circle--active')
        .attr('cx', (d) => xScale(xValue(d)))
        .attr('cy', (d) => yScale(yValue(d)))
        .attr('r', 2.5)

      g.selectAll('.circle--deaths')
        .data(deathsData)
        .enter()
        .append('circle')
        .attr('class', 'circle circle--deaths')
        .attr('cx', (d) => xScale(xValue(d)))
        .attr('cy', (d) => yScale(yValue(d)))
        .attr('r', 2.5)

      g.selectAll('.circle--recovered')
        .data(recoveredData)
        .enter()
        .append('circle')
        .attr('class', 'circle circle--recovered')
        .attr('cx', (d) => xScale(xValue(d)))
        .attr('cy', (d) => yScale(yValue(d)))
        .attr('r', 2.5)

      g.selectAll('.circle')
        .attr('pointer-events', 'all')
        .on('mouseover', (d) => {
          d3.select(d3.event.target).attr('r', 5)
        })
        .on('mouseout', (d) => {
          d3.select(d3.event.target).attr('r', 2.5)
        })

      const mouseG = svg.append('g').attr('class', 'cover-mouse-over')

      mouseG
        .append('svg:rect')
        .attr('width', w)
        .attr('height', h)
        .attr('pointer-events', 'all')
        .on('mousemove', () => {
          const mouse = d3.mouse(d3.event.target)

          const i = Math.round(indexScale.invert(mouse[0]))
          if (i >= 0 && i < casesData.length) {
            this.emitData({
              date: moment(casesData[i].date).format('DD MMMM'),
              total: casesData[i].value,
              recovered: recoveredData[i].value,
              deceased: deathsData[i].value,
              active:
                casesData[i].value -
                recoveredData[i].value -
                deathsData[i].value,
            })
          }
        })
        .on('mouseout', () => {
          this.emitData(null)
        })
    },

    emitData(values) {
      this.$emit('updateStats', values)
    },
  },
}
</script>

<style lang="stylus"></style>
