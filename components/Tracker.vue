<template lang="pug">
  div
    .content__section
      header.wrapper__header
        .wrapper__title 👪 COVID-19 Near You
        .wrapper__subtitle.wrapper__subtitle--em(v-if="!computedDistance")
          | Allow location access & find out how close an infected patient is from you!

    .content__section.request-container(v-if="!position" @click="fetchLocation")
        b-button.request__button(icon-left="crosshairs-gps" type="is-primary") Allow location access
        p.request__text Your current location will be used to get this data.

    .content__section.location(v-else)

      .map-container.margin-top.has-text-left(v-if='showMap')
        div(v-if="showError") We were unable to determine your exact location. Please try the following steps to attempt fixing it.

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

        .content__heading Use the map to calculate from any location
        .content__text Tap anywhere to place a pin. Then tap the button to calculate distance.

        .search.margin-top
          b-field(label="Search..." label-position="on-border")
            b-input(v-model="locationText" placeholder='Enter your address' type='search')
            p.control
              b-button.button.is-primary(@click='searchLocation') Search

        .map#map

        .margin-top.has-text-centered(v-if='pinLocation')
          b-button.is-primary(@click='calculateDistance') Calculate location from point

        .map-result.has-text-centered.margin-top(v-if='computedDistance')
          | The nearest confirmed COVID-19 case from pinned location is #[b {{ computedDistance }}] KM.

      .location__wrapper(v-else-if="computedDistance")
        .location__wrapper__icon
          b-icon(icon="map-marker")
        .location__wrapper__text.is-size-7 You are
        .location__wrapper__text.is-size-5
          span {{ computedDistance }} KM

        .location__wrapper__text.is-size-7 from the nearest confirmed case *

      .location__wrapper(v-else)
        b-icon.location__wrapper__loading(icon="loading")
        .is-size-7 {{ loadingMessage }}

      //- .location__text.is-size-7(v-if='usedIpForLocation') This is an approximate distance using your IP address. Follow the steps above to give location access for more accurate results.
      .location__text(v-if="showTimeoutError") We were unable to get this data due to too many users. #[u(@click="reload") Click here to refresh and try again] or use the map above to find your location.

      div(v-else v-show='distance')
        .margin-top.has-text-centered
          u.has-text-info(@click='showInfoModal = true') How it works?

        .location__text Your <strong>family or friends</strong> could be close to someone affected 😷 <strong>Share this page</strong> & keep your loved ones safe 👨‍👩‍👦

        ul.social-list
          li.social-list__item(@click="share('whatsapp')")
            b-icon.social-list__item__icon.icon--whatsapp(size="is-small" icon="whatsapp")
            | Share on WhatsApp
          li.social-list__item(@click="share('facebook')")
            b-icon.social-list__item__icon.icon--facebook(size="is-small" icon="facebook")
            | Share on Facebook
          li.social-list__item(@click="share('twitter')")
            b-icon.social-list__item__icon.icon--twitter(size="is-small" icon="twitter")
            | Share on Twitter


    b-modal.modal--custom(:active.sync='showInfoModal' has-modal-card trap-focus aria-role='dialog' aria-modal)
      .card
        .card-content
          p IndiaSmile is a non-profit NGO that uses publicly available data from news & government sources to show information of infected cases all around the world. For privacy reasons, we do not store the exact location of an infected case but have to approximate it to the nearest distance location. We then use the location information you provide to calculate a distance to the nearest patient.
          p his information comes from a public [database maintained by volunteers](#[a(href='http://patientdb.covid19india.org/' target='_blank') http://patientdb.covid19india.org/]). Any information we collect from you contains no identifiable IDs and is deleted when you leave the webpage
</template>

<script>
import sharer from '~/services/sharer'

export default {
  props: {
    ipData: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      locationText: '',
      map: null,
      mapCoords: [],
      showMap: false,
      pinLocation: null,

      showInfoModal: false,

      position: null,
      distance: null,
      showError: false,
      loadingMessage: 'We are calculating distance from your location',
      loadingMessages: [
        'We are calculating distance from your location',
        'We are still trying to calculate distance, hang on!',
        'This is taking longer than usual',
      ],
      loadingMessageCounter: 1,

      timestamps: {
        initial: null,
        final: null,
      },

      showTimeoutError: false,
      locationPermission: '',
      infectedDistricts: null,
      // usedIpForLocation: false,
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

  computed: {
    computedDistance() {
      return this.distance
        ? this.distance < 3
          ? 'Within 3'
          : this.distance
        : false
    },
  },

  watch: {
    ipData() {
      if (this.map !== null) {
        this.map.panTo(new window.L.LatLng(this.ipData.lat, this.ipData.lon))
      }
    },
  },

  async mounted() {
    const response = await this.$axios('/cache/infectedDistricts.json')
    this.infectedDistricts = Object.values(response.data)

    if (this.$storage.getLocalStorage('IsLocationPermissionGranted')) {
      // check for allowSponsored variable
      window.allowSponsored = 1

      this.fetchLocation()
    }
  },

  methods: {
    fetchLocation() {
      // push GTM event
      this.$gtm.push({ event: 'tap_loc_acc' })

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // permission granted
            this.locationPermission = 'granted'
            this.showError = false

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

                // try leaflet map for location
                this.useLeafletMap()
              }
            }, 10000)

            this.position = position.coords

            this.calculateDistance(this.position)

            // data recieved, register another timestamp
            this.timestamps.final = Date.now()

            // got nearby data
            // push GTM event
            this.$gtm.push({ event: 'loc_data_received' })

            // set the localstorage data
            this.$storage.setLocalStorage('IsLocationPermissionGranted', true)

            // compare timestamps here
            // if it took more than 10s
            if ((this.timestamps.final - this.timestamps.initial) / 100 > 10) {
              // push GTM event
              this.$gtm.push({ event: 'loc_data_fail' })
            }
          },
          () => {
            // permission denied
            this.locationPermission = 'denied'

            // calculate user's operating system
            const userAgent =
              navigator.userAgent || navigator.vendor || window.opera

            if (/android/i.test(userAgent)) {
              this.userOS = 'Android'
            }

            // iOS detection from: http://stackoverflow.com/a/9039885/177710
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
              this.userOS = 'iOS'
            }

            // show error messages
            this.showError = true

            // push GTM event
            this.$gtm.push({ event: 'loc_acc_deny' })
            // this.usedIpForLocation = true

            this.useLeafletMap()
          }
        )
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
      this.$gtm.push({ event: 'tapShare' })

      let distance = `${this.distance} KM away`

      if (this.distance < 3) {
        distance = 'within 3 KM'
      }

      const message = `Nearest COVID19 case to my location is ${distance}! 😨

Get the latest COVID19 stats and check from your family's location: https://indiasmile.org/covid 🦠

Stay Indoors & Stay Safe #IndiaSmile 🇮🇳`

      sharer(message, '', platform)
    },

    reload() {
      if (typeof window !== 'undefined') {
        window.location.reload()
      }
    },

    calculateDistance(position) {
      position = position.latitude ? position : this.pinLocation

      const distancesArray = this.infectedDistricts.map((obj) => {
        return this.distanceBetweenCoords(
          obj.coords.lat,
          obj.coords.lng,
          position.latitude,
          position.longitude
        )
      })

      distancesArray.sort((a, b) => a - b)

      setTimeout(() => {
        // show the distance after 3 seconds
        this.distance = Math.round(Number(distancesArray[0]) * 100) / 100
      }, 3000)
    },

    distanceBetweenCoords(lat1, lon1, lat2, lon2) {
      if (lat1 === lat2 && lon1 === lon2) {
        return 0
      } else {
        const radlat1 = (Math.PI * lat1) / 180
        const radlat2 = (Math.PI * lat2) / 180
        const theta = lon1 - lon2
        const radtheta = (Math.PI * theta) / 180
        let dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)

        if (dist > 1) {
          dist = 1
        }

        dist = Math.acos(dist)
        dist = (dist * 180) / Math.PI
        dist = dist * 60 * 1.1515
        dist = dist * 1.609344 // convert to KMs

        return dist
      }
    },

    useLeafletMap() {
      this.showMap = true
      this.position = {
        latitude: this.ipData.lat || 20.5937, // using India's coordinates as fallback
        longitude: this.ipData.lon || 78.9629,
      }

      // adding delay because vue takes time to render
      setTimeout(() => {
        this.map = window.L.map('map').setView(
          [this.position.latitude, this.position.longitude],
          15
        )

        window.L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }
        ).addTo(this.map)

        let marker

        this.map.on('click', (e) => {
          if (marker) marker.remove()
          this.distance = null

          this.mapCoords = [e.latlng.lat, e.latlng.lng]
          marker = window.L.marker(this.mapCoords).addTo(this.map)

          this.pinLocation = {
            latitude: this.mapCoords[0],
            longitude: this.mapCoords[1],
          }
        })
      }, 2000)
    },

    searchLocation() {
      window.L.esri.Geocoding.geocode()
        .text(this.locationText)
        .run((err, results) => {
          if (err) {
            console.log(err)
          } else {
            // using the most credible result
            const coords = results.results[0].latlng

            this.map.panTo(new window.L.LatLng(coords.lat, coords.lng))
          }
        })
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

.map
  height 13rem
  width 100%
  position relative
  overflow hidden

@keyframes spin
  0%
    transform rotate(0)
  100%
    transform rotate(360deg)

.modal--custom
  z-index 1000

  .card
    max-width 20rem
    margin 0 auto
    border-radius 0.5rem
</style>
