<template lang="pug">
  div
    .wrapper__title 📰 Recent updates

    .news__section(v-for="(data, index) in articles" :key="index")

      .news__title(v-if="showTitle(data)") {{ data.title }}

      p.news__text(v-if="typeof data.text === 'string'" v-html="data.text")
      div(v-else-if="typeof data.text === 'object'")
        p.news__text(v-for="(text, idx) in data.text" :key="idx" v-html="text")
      p.news__text(v-else v-html="text(data)")

      //- .news__user
        a(v-if="!!data.link" :href="data.link" target="_blank" rel="nofollow")
          .news__user__text
            .news__user__text__name {{ author(data) }}
            //- .news__user__text__date {{ date(data.created) }}
</template>

<script>
import moment from 'moment'
import Feed from 'rss-to-json'
import Button from '~/components/Button'

export default {
  components: {
    Button,
  },
  props: {
    count: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  data() {
    return {
      rssArticles: [],

      twitter: {
        username: 'ANI',
        avatar:
          'https://pbs.twimg.com/profile_images/1497864299/ani_mic_logo_400x400.jpg',
      },

      /*
      Use this format


      {
        author: 'IndiaSmile Team',
        avatar: indiaSmileLogo,
        title: 'Yoga',
        text: [
          `They say that it takes a minimum of 21 days of a particular routine to build a true habit! As we have that amount of time in our lives currently, let’s set specific goals and achieve some real targets that help us step out into life with a deeper sense of calmness and a superior state of physical and mental health.`,
          `We have selected some video courses that challenge you to be better! `,
        ],
        created: 158664970000,
        link: '#href',
      },

      */

      items: [],
    }
  },

  computed: {
    articles() {
      const data = [...this.items, ...this.rssArticles]

      const sorted = data.sort((a, b) => {
        return b.created - a.created
      })

      return this.count ? sorted.slice(0, this.count) : sorted
    },
  },

  created() {
    // this.rssUrls.forEach((rss) => {
    Feed.load('/feed.xml', (err, data) => {
      if (err) {
        console.error(err)
      } else {
        this.rssArticles = data.items
      }
    })
  },

  methods: {
    author(data) {
      return data.author
        ? data.author
        : this.isTweet(data)
        ? this.twitter.username
        : ''
    },

    avatar(data) {
      return data.avatar
        ? data.avatar
        : this.isTweet(data)
        ? this.twitter.avatar
        : false
    },

    text(data) {
      return this.isTweet(data) ? data.title : data.description
    },

    date(timestamp) {
      return moment(timestamp).format('llll')
    },

    showTitle(data) {
      return !this.isTweet(data)
    },

    isTweet(data) {
      return data.link.startsWith('https://twitter.com/')
    },
  },
}
</script>

<style lang="stylus" scoped>
.news
  &__section
    margin .5rem 0
    line-height 1.4
    font-weight 400

  &__title
    font-size .875em
    font-weight normal
    margin 0
  &__text
    font-size .75em
    color #999
</style>
