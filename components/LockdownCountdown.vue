<template lang="pug">
  .container
    b-message.lockdown-countdown(type="is-info") You&rsquo;ve survived <strong>{{completed}} days so far</strong> 😷 only <strong>{{remaining}}&nbsp;more days</strong> before the lockdown is lifted. Congrats! 🥳
</template>

<script>
import moment from 'moment'

export default {
  name: 'LockdownCountdown',
  data() {
    return {
      startDate: moment('2020-03-24'),
      completionDate: moment('2020-04-15'),
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
  margin .5rem 0 -1.5rem
</style>
