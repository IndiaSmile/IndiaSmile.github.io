<template lang="pug">
  div
    .wrapper__header
      .wraper__title.states-select-container 🌆 Situation in
        b-select.states-select(v-model='stateIterator' placeholder='State' size='is-small' expanded)
          option(v-for='(stateData, index) of states' :key='index' :value='index') {{ stateData.state }}

    StatsBox(v-if="states.length" :data="computedState")
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

    ipData: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      userStateCode: '',
      states: [],
      stateIterator: 0,
    }
  },

  computed: {
    computedState() {
      return this.states.length
        ? {
            total_cases: this.states[this.stateIterator].confirmed,
            active_cases: this.states[this.stateIterator].active,
            total_recovered: this.states[this.stateIterator].recovered,
            total_deaths: this.states[this.stateIterator].deaths,
          }
        : null
    },
  },

  watch: {
    ipData() {
      this.updateData()
    },
  },

  mounted() {
    this.updateData()
  },

  methods: {
    updateData() {
      this.userStateCode = this.ipData.region

      if (this.data.length) {
        const states = [...this.data]

        const userStateIndex = states.findIndex((item) => {
          return item.statecode === this.userStateCode
        })

        const userState = states[userStateIndex]

        // find "total element"
        states.splice(
          states.findIndex((item) => {
            return item.state.toLowerCase() === 'total'
          }),
          1
        )

        // remove stateitem from array
        states.splice(userStateIndex, 1)

        // serialise
        states.sort((a, b) => {
          return a.state.localeCompare(b.state)
        })

        // push to beginning of array
        states.unshift(userState)

        this.states = states
      }
    },
  },
}
</script>

<style scoped lang="stylus">
.states-select-container
  display flex
  justify-content space-between
  flex-wrap wrap

.states-select
  display inline-block
  float right
</style>
