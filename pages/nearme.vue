<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content

      Tracker

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
        :to="list.card2.href"
      )

      CovidDisclaimers

      h3 COVID-19 India Statistics

      LocalStats

      // @TODO -- Add whatsapp card with community links here

      Articles.margin-top(:count="count")

      b-button(v-if="count !== 0" @click="count = 0" icon-left="chevron-down" type="is-primary") View more
</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import Card from '~/components/Card'
import LocalStats from '~/components/LocalStats'
import CovidDisclaimers from '~/components/CovidDisclaimers'
import Tracker from '~/components/Tracker'
import Articles from '~/components/Articles'

export default {
  name: 'TrackerPage',
  components: {
    ArticleHero,
    Card,
    LocalStats,
    CovidDisclaimers,
    Tracker,
    Articles,
  },

  data() {
    return {
      image: require('~/assets/images/virus.jpg?resize'),
      metaImage: require('~/assets/images/CovidTracker.png?resize'),
      title: 'COVID Tracker',
      count: 3,

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
          color: 'rgba(128, 150, 140, 0.85)',
          href: '/entertainment',
          isDarkText: false,
        },
      },
    }
  },

  head() {
    return {
      title: this.title,
      script: [
        {
          src: '//geoip-js.com/js/apis/geoip2/v2.1/geoip2.js',
        },
      ],
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
.content
  margin-bottom 0
</style>
