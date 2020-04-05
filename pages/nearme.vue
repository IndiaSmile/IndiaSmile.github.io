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
        :list="list.card2.links"
      )

      b-message.content__message(v-if="!!distance" type="is-warning is-small") * This information is sourced from crowdsource data and can be inaccurate. Do not panic & wait for government sources to verify this data.

      Sharer(:title="title")

      Stats
</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import Card from '~/components/Card'
import Stats from '~/components/Stats'
import Tracker from '~/components/Tracker'

export default {
  name: 'TrackerPage',
  components: {
    ArticleHero,
    Card,
    Stats,
    Tracker,
  },

  data() {
    return {
      image: require('~/assets/images/virus.jpg?resize'),
      metaImage: require('~/assets/images/CovidTracker.png?resize'),
      title: 'COVID Tracker',

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
          color: '#ce4040',
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
