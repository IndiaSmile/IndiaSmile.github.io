<template lang="pug">
  .news
    .news__heading 📰 Recent updates
    .news__text.news__subheading Latest news about the COVID-19 outbreak from around the world.

    .news__section(v-for="(data, index) in articles" :key="index")
      .news__title {{ title(data) }}

      .news__time {{ time(data.created) }}

      p.news__text(v-if="typeof data.text === 'string'" v-html="data.text")
      div(v-else-if="typeof data.text === 'object'")
        p.news__text(v-for="(text, idx) in data.text" :key="idx" v-html="text")
      p.news__text(v-else v-html="text(data)")

      .news__action
        a(:href="data.link" target="_blank" rel="nofollow")
          b-button.news__action__button(icon-left="open-in-new" size='is-small') Read more

        b-button.news__action__button(icon-left="share-variant" @click="share(data)") Share
</template>

<script>
import moment from 'moment'
import sharer from '~/services/sharer'
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
        username: '@ANI',
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

  async mounted() {
    const response = await this.$axios('?get=feed')
    this.rssArticles = response.data.rss
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

    showTitle(data) {
      return !this.isTweet(data)
    },

    title(data) {
      return !this.isTweet(data) ? data.title : this.twitter.username
    },

    isTweet(data) {
      return data.link.startsWith('https://twitter.com/')
    },

    time(timestamp) {
      return moment().diff(moment(timestamp), 'days') >= 2
        ? moment(timestamp).format('llll')
        : moment(timestamp).fromNow()
    },

    share(data) {
      sharer(data.title ? data.title : data.text, data.link)
    },
  },
}
</script>

<style lang="stylus" scoped>
.news
  &__heading
    color #19175B
    font-size 1.25rem
    font-weight bold

  &__subheading
    margin-bottom 0.75rem

  &__section
    padding 1rem 0
    border-top 1px solid rgba(169, 194, 232, 0.5)

  &__title
    color #19175B
    font-size 1em
    font-weight bold

  &__time
    font-size 0.75rem
    color #1C5BFF
    margin-bottom 0.375rem

  &__text
    font-size .875em
    color rgba(25, 23, 91, 0.65)

  &__action
    display flex
    justify-content center

    &__button
      height 2rem
      padding 0 1rem
      background-color rgba(28, 91, 255, 0.1)
      border 0
      border-radius 0.25rem
      color #1C5BFF
      font-size 0.75rem
      font-weight 500

      &:first-child
        margin-right 0.75rem
</style>
