<template lang="pug">
  div
    LocalStats.margin-top
      .historical
        HistoricalGraph(:data="graphData")

</template>

<script>
import LocalStats from '~/components/LocalStats'
import HistoricalGraph from '~/components/HistoricalGraph'

export default {
  components: {
    LocalStats,
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
      graphData: {},
    }
  },

  watch: {
    historical() {
      this.updateGraph()
    },
  },

  methods: {
    updateGraph() {
      if (this.historical.length) {
        this.graphData = this.historical.find(
          (o) => o.country === 'India'
        ).timeline
      }
    },
  },
}
</script>

<style scoped lang="stylus"></style>
