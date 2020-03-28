<template lang="pug">
  b-message.lockdown-countdown(type="is-info") You&rsquo;ve survived <strong>{{completed}} days so far</strong> 😷 only <strong>{{remaining}}&nbsp;more days</strong> before the lockdown is lifted. Congrats! 🥳
</template>

<script>
import moment from 'moment'

export default {
  name: 'LockdownCountdown',
  data() {
    return {
      startDate: moment('25 March 2020'),
      completionDate: moment('14 April 2020'),
    }
  },
  computed: {
    completed() {
      return moment().diff(this.startDate, 'd')
    },

    remaining() {
      return this.completionDate.diff(moment(), 'd')
    },
  },
}
</script>

<style lang="stylus" scoped>
.lockdown-countdown
  font-size .75em
  margin .5rem 1rem -1.5rem
</style>
