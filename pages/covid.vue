<template lang="pug">
  .article
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

      LocalStats.margin-top(:data="statewise" :hideState="true")

      hr.wrapper__hr

      Tracker.margin-top

      IndianCases(:historical="historical" :statewise="statewise")

      hr.wrapper__hr
      InternationalCases.margin-top(:historical="historical")

      hr.wrapper__hr
      Testing.margin-top

      card.margin-top(
        :title="card.title"
        :subtitle="card.subtitle"
        :image="card.image"
        :color="card.color"
        :isDarkText="card.isDarkText"
        :list="card.links"
      )

      hr.wrapper__hr
      Articles.margin-top(:count="3")

      hr.wrapper__hr
      StatewiseTable(:data="statewise")

      hr.wrapper__hr
      LockdownCountdown.margin-top

      hr.wrapper__hr
      CovidDisclaimers
</template>

<script>
import TextHero from '~/components/TextHero'
import InternationalCases from '~/components/InternationalCases'
import Tracker from '~/components/Tracker'
import LockdownCountdown from '~/components/LockdownCountdown'
import CovidDisclaimers from '~/components/CovidDisclaimers'
import IndianCases from '~/components/IndianCases'
import Articles from '~/components/Articles'
import Testing from '~/components/Testing'
import Card from '~/components/Card'
import LocalStats from '~/components/LocalStats'
import StatewiseTable from '~/components/StatewiseTable'

export default {
  components: {
    TextHero,
    InternationalCases,
    Tracker,
    LockdownCountdown,
    CovidDisclaimers,
    IndianCases,
    Articles,
    Testing,
    Card,
    LocalStats,
    StatewiseTable,
  },

  data() {
    return {
      title: 'Find how near COVID-19 is and other stats',

      image: require('~/assets/images/meta-image-covid.png?resize'),

      endpoints: {
        countrywise:
          'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=',
        historical: 'https://corona.lmao.ninja/v2/historical',
        statewise: '/api-c19/',
      },

      historical: [],
      statewise: {},

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
            link: 'https://chat.whatsapp.com/KGdpQoNwG7q4IsZy2n13dd',
          },
          {
            name: '👫 Mood Support',
            link: 'https://chat.whatsapp.com/F97AbnosfqeEC3gJObw6sU',
          },
          {
            name: '🤣 Jokes',
            link: 'https://chat.whatsapp.com/KrTMHQTJ8CcA1V58rYy9Mc',
          },
          {
            name: '📚 Books',
            link: 'https://t.me/books_isc',
          },
        ],
      },
    }
  },

  async created() {
    // fetch historical data
    const historical = await this.$axios(this.endpoints.historical)
    this.historical = historical.data

    const statewise = await this.$axios(this.endpoints.statewise)
    this.statewise = statewise.data
  },

  head() {
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
          hid: 'twitterImage',
          name: 'twitter:image',
          content: 'https://indiasmile.org' + this.image,
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
