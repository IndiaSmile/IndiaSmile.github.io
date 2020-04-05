<template lang="pug">
  div
    h3 India
    StatsBox(:data="computedTotal")

    slot

    h3 {{ state.state }}
    StatsBox(:data="computedState")
</template>

<script>
import StatsBox from '~/components/StatsBox'

export default {
  components: {
    StatsBox,
  },

  data() {
    return {
      total: {},
      state: {},

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
  },

  mounted() {
    window.geoip2.city(async (res) => {
      this.stateCode = res.subdivisions[0].iso_code

      const response = await this.$axios(
        'https://api.covid19india.org/data.json'
      )

      this.total = response.data.statewise[0]

      this.state = response.data.statewise.filter(
        (item) => item.statecode === this.stateCode
      )[0]
    })
  },
}
</script>

<style scoped lang="stylus"></style>
