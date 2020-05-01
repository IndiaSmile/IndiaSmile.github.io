<template lang="pug">
  .article
    Header

    TextHero(
      title="COVID-19 Around You"
    )
      ul
        li 🌐 Scroll & understand COVID-19's worldwide spread
        li 👬 Join <strong>communities</strong> to make new friends
        li 🧠 <strong>Share & save</strong>: only source you need to keep updated.

    .content
      .wrapper__title 🇮🇳 Indian statistics
      .wrapper__subtitle How our country is fighting CoronaVirus #JaiHind

      IndiaStats.margin-top(:data="computedIndiaStats")

      hr.wrapper__hr

      Tracker.margin-top(:ipData='ipData')

      hr.wrapper__hr
      StateStats.margin-top(:data='statewise' :ipData='ipData')

      hr.wrapper__hr
      StatewiseTable(:data="statewise")

      hr.wrapper__hr
      InternationalCases.margin-top(:historical="historical")

      hr.wrapper__hr
      Testing(:data='testing').margin-top

      hr.wrapper
      a.sponsored-banner(href='https://luckyroyale.app.link/pP51yTGnH5')
        img(src="~/assets/images/banner.png")

      .g-sponsored

      card.margin-top(
        :title="card.title"
        :subtitle="card.subtitle"
        :image="card.image"
        :color="card.color"
        :isDarkText="card.isDarkText"
        :list="card.links"
      )

      //- hr.wrapper__hr
      //- Articles.margin-top(:count="3")

      hr.wrapper__hr
      LockdownCountdown.margin-top

      hr.wrapper__hr
      CovidDisclaimers
</template>

<script>
import Header from '~/components/Header'
import TextHero from '~/components/TextHero'
import InternationalCases from '~/components/InternationalCases'
import Tracker from '~/components/Tracker'
import CovidDisclaimers from '~/components/CovidDisclaimers'
// import Articles from '~/components/Articles'
import Testing from '~/components/Testing'
import Card from '~/components/Card'
import IndiaStats from '~/components/IndiaStats'
import StateStats from '~/components/StateStats'
import StatewiseTable from '~/components/StatewiseTable'
import LockdownCountdown from '~/components/LockdownCountdown'

export default {
  components: {
    Header,
    TextHero,
    InternationalCases,
    Tracker,
    CovidDisclaimers,
    // Articles,
    Testing,
    Card,
    IndiaStats,
    StateStats,
    StatewiseTable,
    LockdownCountdown,
  },

  data() {
    return {
      title: 'Find how near COVID-19 is and other stats',

      image: require('~/assets/images/meta-image-covid.png?resize'),

      historical: [],
      statewise: [],
      testing: [],

      ipData: {},

      card: {
        title: 'Find like minded people to talk to',
        subtitle: 'Topic based community chats',
        image: require('~/assets/images/whatsapp-alt.jpg?resize'),
        color: '#1ebfa5',
        isDarkText: false,
        links: [
          {
            name: '📺 Movies and TV',
            link: 'https://t.me/entertainment_isc',
          },
          {
            name: '📰 Updates',
            link: 'https://t.me/isc_updates',
          },
          {
            name: '👫 Mood Support',
            link: 'https://t.me/isc_mood',
          },
          {
            name: '🤣 Jokes',
            link: 'http://t.me/jokes_isc',
          },
          {
            name: '📚 Books',
            link: 'https://t.me/books_isc',
          },
          {
            name: '🎮 Gaming',
            link: 'https://t.me/isc_gaming',
          },
        ],
      },
    }
  },

  computed: {
    computedIndiaStats() {
      return this.statewise.length ? this.statewise[0] : {}
    },
  },

  async mounted() {
    const data = await this.$axios('/cache/api.json')

    this.historical = data.data.historical
    this.statewise = data.data.statewise.statewise

    if (typeof data.data.testing === 'object') {
      this.testing = data.data.testing.values
    }

    // now fetch ip data
    if (this.$storage.getLocalStorage('ipData')) {
      this.ipData = this.$storage.getLocalStorage('ipData')
    } else {
      const response = await this.$axios(
        'https://pro.ip-api.com/json/?key=0vSC7Gzu2XD8Eew'
      )
      this.ipData = response.data

      this.$storage.setLocalStorage('ipData', this.ipData)
    }
  },

  head() {
    const description =
      'Get all the latest stats related to COVID-19 on a single page, including state level data as well as testing data, at your fingertips. Find like minded communities, get resources to keep yourself occupied and more, only on IndiaSmile.org'

    return {
      title: this.title,
      meta: [
        {
          hid: 'ogimage',
          property: 'og:image',
          content: this.image,
        },
        {
          hid: 'ogtitle',
          property: 'og:title',
          content: this.title + ' | IndiaSmile.org',
        },
        {
          hid: 'twitterTitle',
          name: 'twitter:title',
          content: this.title + ' | IndiaSmile.org',
        },
        {
          hid: 'twitterImage',
          name: 'twitter:image',
          content: 'https://indiasmile.org' + this.image,
        },
        {
          hid: 'twitterDescription',
          name: 'twitter:description',
          content: description,
        },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.content
  padding 1rem 1.5rem
</style>
