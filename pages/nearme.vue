<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      .content__section
        h2.content__title COVID-19 Tracker

      .content__section
        h3.content__title.content__title--blue.is-size-5
          | Use this tool to find out how far is #Covid from you!

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

        .location__text Your family or friends could be close to someone affected 😷 Share this page & keep your loved ones safe 👨‍👩‍👦

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


      .content__footer
        p.content__footer__text This information has been provided by our friends at
        a.content__footer__link(href="https://bit.ly/COVID19Distance" target="_blank" rel="nofollow") coronatracker.in
          b-icon(icon="open-in-new" size="is-small")

      card.margin-top(
        :title="list.card1.title"
        :subtitle="list.card1.subtitle"
        :image="list.card1.image"
        :color="list.card1.color"
        :to="list.card1.href"
        :isDarkText="list.card1.isDarkText"
      )

      card.margin-top(
        :title="list.card2.title"
        :subtitle="list.card2.subtitle"
        :image="list.card2.image"
        :color="list.card2.color"
        :isDarkText="list.card2.isDarkText"
        :list="list.card2.links"
      )

      b-message.content__message(v-if="!!distance" type="is-warning is-small") * This information is sourced from crowdsource data and can be inaccurate. Do not panic & wait for government sources to verify this data.

      Sharer(:title="title")
</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import sharer from '~/services/sharer'
import Card from '~/components/Card'

export default {
  name: 'TrackerPage',
  components: {
    ArticleHero,
    Card,
  },

  data() {
    return {
      image: require('~/assets/images/virus.jpg?resize'),
      metaImage: require('~/assets/images/CovidTracker.png?resize'),
      title: 'COVID Tracker',

      position: null,
      distance: null,
      endpoint:
        'https://script.google.com/macros/s/AKfycbwqcrVhD9D6Oi2aIi9EG16ks3hLjbJqag_jznwxqpY88xdoBQun/exec',

      showError: false,

      list: {
        card1: {
          title: 'Find like-minded people to talk to!',
          subtitle: 'Topic based community chats',
          image: require('~/assets/images/whatsapp-alt.jpg?resize'),
          color: '#1ebfa5',
          href: '/communities',
          isDarkText: false,
        },
        card2: {
          title: 'Best Modern TV & Movies',
          subtitle: 'Things to watch when bored',
          image: require('~/assets/images/amitabh-bachchan.jpg?resize'),
          color: '#81958A',
          isDarkText: false,
          links: [
            {
              name: 'English Movies',
              link: '/entertainment/movies/english',
            },
            {
              name: 'Hindi Movies',
              link: '/entertainment/movies/hindi',
            },
            {
              name: 'English TV',
              link: '/entertainment/tv/english',
            },
            {
              name: 'Hindi TV',
              link: '/entertainment/tv/hindi',
            },
          ],
        },
      },
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
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              this.showError = false
              this.position = position.coords

              const data = await this.$axios(
                this.endpoint +
                  '?lat=' +
                  this.position.latitude +
                  '&long=' +
                  this.position.longitude
              )

              this.distance = Math.round(Number(data.data) * 100) / 100

              // set the localstorage data
              localStorage.setItem('isLocationPermissionGranted', true)
            },
            () => {
              this.showError = true
            }
          )
        }
      }
    },

    share(platform) {
      const message = `Nearest COVID19 case to my location is around ${this.distance} km away! 😨

Check from your family's location: https://indiasmile.org/nearme 🦠

Stay Indoors & Stay Safe  🇮🇳`

      sharer(message, '', platform)
    },
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'ogimage',
          property: 'og:image',
          content: this.metaImage,
        },
        {
          hid: 'ogtitle',
          property: 'og:title',
          content: 'IndiaSmile.org | COVID-19 Tracker',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Find out your distance from Covid-19',
        },
        {
          hid: 'twitterImage',
          name: 'twitter:image',
          content: 'https://indiasmile.org' + this.metaImage,
        },
      ],
    }
  },
}
</script>

<style scoped lang="stylus">
.content__title--blue
  line-height 140%
  color #1C5BFF

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

.content__footer
  margin-top 0.5rem
  text-align center

  &__text
    font-size 0.625rem
    margin-bottom 0!important

  &__link
    color #1C5BFF
    padding 0.5rem 1rem
    background-color rgba(28, 91, 255, 0.1)
    text-decoration underline
    margin-top 0.5rem
    display inline-block
    font-size 0.875rem
    border-radius 0.25rem

.content__message
    margin-top 1rem

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
    font-weight bold

  &__list
    margin 0
    margin-top 1rem
    padding 0
    list-style-type none

    &__item
      display flex
      justify-content center
      margin-top 1rem

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

.margin-top
  margin-top 1rem

@keyframes spin
  0%
    transform rotate(0)
  100%
    transform rotate(360deg)
</style>
