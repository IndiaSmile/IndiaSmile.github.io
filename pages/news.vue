<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      Sharer(:title="title")

      .content__section(v-for="(data, index) in articles" :key="index")

        h2.content__title(v-if="showTitle(data)") {{ data.title }}

        .content__user
          .content__user__image(v-if="avatar(data)")
            img(:src="avatar(data)")
          .content__user__text
            .content__user__text__name {{ author(data) }}
            .content__user__text__date {{ date(data.created) }}

        p.content__text(v-if="typeof data.text === 'string'" v-html="data.text")
        div(v-else-if="typeof data.text === 'object'")
          p.content__text(v-for="(text, idx) in data.text" :key="idx" v-html="text")
        p.content__text(v-else v-html="text(data)")

        a(v-if="!!data.link" :href="data.link" target="_blank" rel="nofollow")
          b-button.content__button(type="is-primary" icon-right="chevron-right") Read more

      Sharer(:title="title")
</template>

<script>
import Feed from 'rss-to-json'
import Button from '~/components/Button'
import ArticleHero from '~/components/ArticleHero'
// import indiaSmileLogo from '~/assets/logo-square.png'

export default {
  name: 'HomePage',
  components: {
    Button,
    ArticleHero,
  },

  data() {
    return {
      image: require('~/assets/images/newspapers-stack.jpg?resize'),
      title: 'News',

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

      return data.sort((a, b) => {
        return b.created - a.created
      })
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
      const d = new Date(timestamp)

      return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
    },

    showTitle(data) {
      return !this.isTweet(data)
    },

    isTweet(data) {
      return data.link.startsWith('https://twitter.com/')
    },
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
      ],
    }
  },
}
</script>

<style scoped lang="stylus">
.content__button
  margin-bottom 2rem
</style>
