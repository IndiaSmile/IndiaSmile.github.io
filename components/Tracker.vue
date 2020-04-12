<template lang="pug">
  div
    .content__section
      header.wrapper__header
        .wrapper__title 👪 COVID-19 Near You
        .wrapper__subtitle.wrapper__subtitle--em(v-if="!computedDistance")
          | Allow location access & find out how close an infected patient is from you!

    b-message(v-if="showError" type="is-warning")
      | We need access to your location to find the nearest case #[br]
      | Enable location access by following the steps below:

      .steps-list
        b-collapse.card(animation='slide' v-for='(step, i) of steps' :key='i' :open='currentStep === i' @open='currentStep = i')
          .card-header(slot='trigger' slot-scope='props' role='button')
            .card-header-title
              b-icon.card-header-title__icon(:icon='step.icon')
              | {{ step.title }}
            span.card-header-icon
              b-icon(:icon="props.open ? 'menu-up' : 'menu-down'")

          .card-content
            ol.context
              li(v-for="(stepItem, i2) in step.items" :key='i2' v-html='stepItem')

    .content__section.request-container(v-if="!position")
      b-button.request__button(icon-left="crosshairs-gps" type="is-primary" @click="fetchLocation") Allow location access
      p.request__text Your current location will be used to get this data.

    .content__section.location(v-else)
      .location__wrapper
        div(v-if='showTimeoutError')
          span(@click='reload') Try Again 😳

        div(v-else-if="computedDistance")
          .location__wrapper__icon
            b-icon(icon="map-marker")
          .location__wrapper__text.is-size-7 You are
          .location__wrapper__text.is-size-5
            span {{ computedDistance }} KM

          .location__wrapper__text.is-size-7 from the nearest confirmed case *

        div(v-else)
          b-icon.location__wrapper__loading(icon="loading")
          .is-size-7 {{ loadingMessage }}

      .location__text(v-if="showTimeoutError") We were unable to get this data due to too many users. #[u(@click="reload") Click here to refresh and try again]

      div(v-else)
        .location__text Your <strong>family or friends</strong> could be close to someone affected 😷 <strong>Share this page</strong> & keep your loved ones safe 👨‍👩‍👦

        ul.location__list
          li.location__list__item(@click="share('whatsapp')")
            b-icon.location__list__item__icon.icon--whatsapp(size="is-small" icon="whatsapp")
            | Share on WhatsApp
          li.location__list__item(@click="share('facebook')")
            b-icon.location__list__item__icon.icon--facebook(size="is-small" icon="facebook")
            | Share on Facebook
          li.location__list__item(@click="share('twitter')")
            b-icon.location__list__item__icon.icon--twitter(size="is-small" icon="twitter")
            | Share on Twitter
</template>

<script>
import sharer from '~/services/sharer'

export default {
  data() {
    return {
      position: null,
      distance: null,
      endpoint: '/api-geo2covid/exec',

      showError: false,
      loadingMessage: '',
      loadingMessages: [
        'We are calculating distance from your location',
        'We are still trying to calculate distance, hang on!',
        'This is taking longer than usual',
      ],
      loadingMessageCounter: 0,

      timestamps: {
        initial: null,
        final: null,
      },

      showTimeoutError: false,

      currentStep: null,
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

  computed: {
    computedDistance() {
      return this.distance
        ? this.distance < 3
          ? 'Within 3'
          : this.distance
        : false
    },
  },

  created() {
    if (!process.server) {
      if (localStorage.getItem('isLocationPermissionGranted')) {
        this.fetchLocation()
      }
    }
  },

  methods: {
    fetchLocation() {
      if (!process.server) {
        // push GTM event
        this.$gtm.push({ event: 'tap_loc_acc' })

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              // permission granted
              // push GTM event
              this.$gtm.push({ event: 'loc_acc_grant' })
              // register timestamp to compare
              this.timestamps.initial = Date.now()

              // register timeouts
              this.addTimeout(3000)

              // also add another timeout for 22s
              setTimeout(() => {
                if (!this.distance) {
                  this.showTimeoutError = true
                }
              }, 22000)

              this.showError = false
              this.position = position.coords

              const data = await this.$axios(
                this.endpoint +
                  '?lat=' +
                  this.position.latitude +
                  '&long=' +
                  this.position.longitude
              )

              // data recieved, register another timestamp
              this.timestamps.final = Date.now()

              this.distance = Math.round(Number(data.data) * 100) / 100

              // got nearby data
              // push GTM event
              this.$gtm.push({ event: 'loc_data_received' })

              // set the localstorage data
              localStorage.setItem('isLocationPermissionGranted', true)

              // compare timestamps here
              // if it took more than 10s
              if (
                (this.timestamps.final - this.timestamps.initial) / 100 >
                10
              ) {
                // push GTM event
                this.$gtm.push({ event: 'loc_data_fail' })
              }
            },
            () => {
              // permission denied
              // push GTM event
              this.$gtm.push({ event: 'loc_acc_deny' })

              this.showError = true
            }
          )
        }
      }
    },

    addTimeout(time = 5000) {
      setTimeout(() => {
        if (!this.distance) {
          this.loadingMessage = this.loadingMessages[this.loadingMessageCounter]

          this.loadingMessageCounter++

          // add another timeout
          if (this.loadingMessageCounter < this.loadingMessages.length) {
            this.addTimeout()
          }
        }
      }, time)
    },

    share(platform) {
      const message = `Nearest COVID19 case to my location is around ${this.distance} km away! 😨

Get the latest COVID19 stats and check from your family's location: https://indiasmile.org/covid 🦠

Stay Indoors & Stay Safe 🇮🇳`

      sharer(message, '', platform)
    },

    reload() {
      if (typeof window !== 'undefined') {
        window.location.reload()
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.steps-list
  margin-top 1rem

  .card-header-title__icon
    margin-right 1rem

.request-container
  height 6.94rem
  width 100%
  background-color rgba(0, 0, 0, 0.05)
  display flex
  justify-content center
  align-items center
  flex-direction column

  .request__button
    background-color rgba(28, 91, 255, 0.1)
    color #1C5BFF
    font-weight bold

  .request__text
    text-align center
    font-size 0.625em
    margin-top 0.375rem

.location
  text-align center
  padding 0.625rem 0.625rem 1.875rem 0.625rem
  border-radius 0.25rem
  background-color rgba(28, 91, 255, 0.05)

  &__wrapper
    height 10rem
    border-radius 0.25rem
    font-weight bold
    background-color #1C5BFF
    color #fff
    display flex
    flex-direction column
    align-items center
    justify-content center

    &__icon
      width 3rem
      height 3rem
      border-radius 100%
      background-color #08E76E
      display flex
      justify-content center
      align-items center
      margin 0 auto
      margin-bottom 0.56rem

    &__loading
      animation spin 1s linear infinite

  &__text
    margin-top 1rem

  &__list
    margin 0
    margin-top 1rem
    padding 0
    list-style-type none

    &__item
      display inline-flex
      justify-content center
      margin-top 1rem
      background-color rgba(28,91,255,0.05)
      padding 0.5rem 1rem
      border-radius 0.25rem
      border-bottom 4px solid rgba(28,91,255,0.05)

      &__icon
        margin-right 0.5rem
        color #fff
        border-radius 100%
        height 1.5rem
        width 1.5rem

        &.icon--twitter
          background-color #1DA1F2

        &.icon--facebook
          background-color #4267B2

        &.icon--whatsapp
          background-color #25D366

@keyframes spin
  0%
    transform rotate(0)
  100%
    transform rotate(360deg)
</style>
