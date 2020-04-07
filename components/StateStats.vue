<template lang="pug">
  div
    .wrapper__header
      .wraper__title 🌆 Situation of Your State: <strong>{{ stateName }}</strong>
    StatsBox(v-if="state" :data="computedState")
</template>

<script>
import StatsBox from '~/components/StatsBox'

export default {
  components: {
    StatsBox,
  },

  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      stateCode: '',
      stateName: '',
      state: false,
    }
  },

  computed: {
    computedState() {
      return this.stateName
        ? {
            total_cases: this.state.confirmed,
            active_cases: this.state.active,
            total_recovered: this.state.recovered,
            total_deaths: this.state.deaths,
          }
        : null
    },
  },

  watch: {
    data() {
      this.fetchData()
    },
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      if (process.client && typeof window !== 'undefined') {
        window.geoip2.city((res) => {
          this.stateCode = res.subdivisions[0].iso_code

          if (this.data.length) {
            this.state = this.data.filter((item) => {
              return item.statecode === this.stateCode
            })[0]

            this.stateName = this.state.state
          }
        })
      }
    },
  },
}
</script>

<style scoped lang="stylus"></style>
