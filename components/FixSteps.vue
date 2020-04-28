<template lang="pug">
  div
    | We were unable to determine your exact location. Please try the following steps to attempt fixing it.

    .steps-list
      b-collapse.card(animation='slide' v-for='(step, i) of steps' v-if='step.title === userOS' :key='i' :open='currentStep === i' @open='currentStep = i')
        .card-header(slot='trigger' slot-scope='props' role='button')
          .card-header-title
            b-icon.card-header-title__icon(:icon='step.icon')
            | {{ step.title }}
          span.card-header-icon
            b-icon(:icon="props.open ? 'menu-up' : 'menu-down'")

        .card-content
          ol.context
            li(v-for="(stepItem, i2) in step.items" :key='i2' v-html='stepItem')
</template>

<script>
export default {
  name: 'FixSteps',

  data() {
    return {
      currentStep: null,
      userOS: 'Android',
      steps: [
        {
          icon: 'apple',
          title: 'iOS',
          items: [
            'Go to your phone <b>Settings</b>',
            'Open <b>General</b> settings',
            'Scroll to the bottom and go to <b>Reset</b>',
            'Tap <b>Reset Location & Privacy</b>',
            'Open Safari & Reload the page',
            'Tap Allow Location Access & Click <b>Allow</b>',
          ],
        },
        {
          icon: 'android',
          title: 'Android',
          items: [
            'Use <b>Google Chrome</b> as your browser to access IndiaSmile',
            '<b>Inside Chrome</b>, Open <b>Settings</b> by clicking 3 dots in top right corner of the screen',
            'Scroll to bottom and go to <b>Site settings</b>',
            'Tap <b>Location</b> settings',
            'Scroll to <b>find</b> ‘https://indiasmile.org’ and tap on it',
            'Click <b>Clear Settings</b>',
            'Reload <b>IndiaSmile Corona Around You</b> page',
            'Tap Allow Location Access & Click <b>Okay</b>',
          ],
        },
      ],
    }
  },

  mounted() {
    // calculate user's operating system
    const userAgent = navigator.userAgent || navigator.vendor || window.opera

    if (/android/i.test(userAgent)) {
      this.userOS = 'Android'
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      this.userOS = 'iOS'
    }
  },
}
</script>

<style lang="stylus" scoped>
.steps-list
  margin-top 1rem

  .card-header-title__icon
    margin-right 1rem
</style>
