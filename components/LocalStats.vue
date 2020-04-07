<template lang="pug">
  div(v-if="dataLength")
    div(v-if="!hideIndia")
      h3(v-if="!hideState") India
      StatsBox(:data="computedTotal")

    //- slot
    div(v-if="!hideState")
      .wrapper__header
        .wraper__title 🌆 Situation of Your State: <strong>{{ state.state }}</strong>
      StatsBox(:data="computedState")
</template>

<script>
import StatsBox from '~/components/StatsBox'

export default {
  components: {
    StatsBox,
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
    hideIndia: {
      type: Boolean,
      required: false,
      default: false,
    },
    hideState: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      stateCode: '',
    }
  },

  computed: {
    computedTotal() {
      return {
        total_cases: this.total.confirmed,
        active_cases: this.total.active,
        total_recovered: this.total.recovered,
        total_deaths: this.total.deaths,
      }
    },

    computedState() {
      return {
        total_cases: this.state.confirmed,
        active_cases: this.state.active,
        total_recovered: this.state.recovered,
        total_deaths: this.state.deaths,
      }
    },

    dataLength() {
      return this.data ? Object.keys(this.data).length : null
    },

    total() {
      return this.dataLength ? this.data.statewise[0] : {}
    },

    state() {
      return this.dataLength
        ? this.data.statewise.filter(
            (item) => item.statecode === this.stateCode
          )[0]
        : {}
    },
  },

  created() {
    if (process.client) {
      this.fetchData()
    }
  },

  methods: {
    fetchData() {
      if (typeof window !== 'undefined') {
        window.geoip2.city((res) => {
          this.stateCode = res.subdivisions[0].iso_code
        })
      }
    },
  },
}
</script>

<style scoped lang="stylus"></style>
