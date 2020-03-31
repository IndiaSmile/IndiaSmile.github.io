<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      .content__section
        h2.content__title COVID-19 Tracker

      .content__section
        h3.content__title.content__title--blue.is-size-5
          | Use this tool to find out how far is #Covid from you!

      .content__section.request-container(v-if="!position")
        b-button.request__button(icon-left="crosshairs-gps" type="is-primary" @click="fetchLocation") Allow location access
        p.request__text Your current location will be used to get this data.

      .content__section.location(v-else)
        .location__wrapper
          .location__wrapper__icon
            b-icon(icon="map-marker")
          .location__wrapper__text.is-size-7 You are
          .location__wrapper__text.is-size-5 {{ computedDistance }} KM
          .location__wrapper__text.is-size-7 from the nearest confirmed case

        .location__text Your family or friends could be close to someone affected. Share this page & keep your loved ones and safe.

        ul.location__list(@click="shareOnWhatsapp")
          li.location__list__item
            img.location__list__item__image(src="~/assets/whatsapp.png")
            | Share on WhatsApp
          li.location__list__item
            img.location__list__item__image(src="~/assets/facebook.png")
            | Share on Facebook
          li.location__list__item
            img.location__list__item__image(src="~/assets/instagram.png")
            | Share on Instagram


      .content__footer
        p.content__footer__text This information has been provided by our friends at
        a.content__footer__link(href="https://coronatracker.in" target="_blank" rel="nofollow") coronatracker.in
          b-icon(icon="open-in-new" size="is-small")

</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import sharer from '~/services/sharer'

export default {
  name: 'TrackerPage',
  components: {
    ArticleHero,
  },

  data() {
    return {
      image: require('~/assets/images/virus.jpg?resize'),
      title: 'News',

      position: null,
      distance: 0,
      endpoint:
        'https://script.google.com/macros/s/AKfycbwqcrVhD9D6Oi2aIi9EG16ks3hLjbJqag_jznwxqpY88xdoBQun/exec',
    }
  },

  computed: {
    computedDistance() {
      return this.distance ? this.distance : '...'
    },
  },

  created() {
    this.fetchLocation()
  },

  methods: {
    fetchLocation() {
      if (!process.server) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            this.position = position.coords

            const data = await this.$axios(
              this.endpoint +
                '?lat=' +
                this.position.latitude +
                '&long=' +
                this.position.longitude
            )

            this.distance = Math.round(Number(data.data) * 100) / 100
          })
        }
      }
    },

    shareOnWhatsapp() {
      const message = `Nearest COVID19 case to my location is ${this.distance} km away! 😨 Check yours at ➡ https://indiasmile.org/nearme & Stay Safe 😊`

      sharer(message)
    },
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

      &__image
        margin-right 0.5rem
</style>
