<template lang="pug">
  div
    StatsBox(:data="computedTotal" :showAll='true')

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
  },

  computed: {
    computedTotal() {
      return {
        total_cases: this.data.confirmed,
        active_cases: this.data.active,
        total_recovered: this.data.recovered,
        total_deaths: this.data.deaths,
      }
    },
  },
}
</script>

<style scoped lang="stylus"></style>
