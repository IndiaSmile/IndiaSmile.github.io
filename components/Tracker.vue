<template lang="pug">
  div
    .content__section
      header.wrapper__header
        .wrapper__title 👪 COVID-19 Near You
        .wrapper__subtitle.wrapper__subtitle--em(v-if="!computedDistance")
          | Allow location access & find out how close an infected patient is from you!

    b-message(v-if="showError" type="is-warning") We need access to your location to find the nearest case

    .content__section.request-container(v-if="!position")
      b-button.request__button(icon-left="crosshairs-gps" type="is-primary" @click="fetchLocation") Allow location access
      p.request__text Your current location will be used to get this data.

    .content__section.location(v-else)
      .location__wrapper
        .location__wrapper__icon
          b-icon(icon="map-marker")
        .location__wrapper__text.is-size-7 You are
        .location__wrapper__text.is-size-5

          span(v-if="computedDistance") {{ computedDistance }} KM

          b-icon.location__wrapper__loading(v-else icon="loading")

        .location__wrapper__text.is-size-7 from the nearest confirmed case *

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
      endpoint: '/api-geo2covid/',

      showError: false,
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
              const timestamp1 = Date.now()

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
              const timestamp2 = Date.now()

              this.distance = Math.round(Number(data.data) * 100) / 100

              // got nearby data
              // push GTM event
              this.$gtm.push({ event: 'loc_acc_received' })

              // set the localstorage data
              localStorage.setItem('isLocationPermissionGranted', true)

              // compare timestamps here
              // if it took more than 10s
              if ((timestamp2 - timestamp1) / 100 > 10) {
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

    share(platform) {
      const message = `Nearest COVID19 case to my location is around ${this.distance} km away! 😨

Get the latest COVID19 stats and check from your family's location: https://indiasmile.org/covid 🦠

Stay Indoors & Stay Safe 🇮🇳`

      sharer(message, '', platform)
    },
  },
}
</script>

<style lang="stylus" scoped>
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
