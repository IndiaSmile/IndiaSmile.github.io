<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")

        Sharer(v-if="data.custom === 'Sharer'" :title="title")

        h5.content__heading(v-if="!!data.heading") {{ data.heading }}

        YTEmbed(v-if="!!data.youtube" :src="data.youtube")
        p.content__text(v-if="typeof data.text === 'string'" v-html="data.text")
        div(v-else-if="typeof data.text === 'object'")
          p.content__text(v-for="(text, idx) in data.text" :key="idx" v-html="text")

</template>

<script>
import YTEmbed from '~/components/YTEmbed'
import ArticleHero from '~/components/ArticleHero'

export default {
  name: 'HomePage',
  components: {
    YTEmbed,
    ArticleHero,
  },

  data() {
    return {
      title: 'Introduction to Programming 👨‍💻',
      image: require('~/assets/images/code.jpg'),
      article: [
        {
          text: [
            `Why not spend these days of isolation on a skillset that can help you earn good money in the future? 🤑`,
            `Computer programming is the process of designing and building programs. It is a very in demand skill associated with the highest paying jobs in the market.`,
            `Programming is used for developing intricate websites, designing responsive mobile applications, creating advanced software tools and many other interesting technologies.`,
            `Many programming competitions are held across the world, in order to churn out top coders. All good companies build solid tech teams to manage their network and web platforms.`,
            `Python is one of the most popular programming languages in the world, as it has a clean syntax and is user-friendly.`,
          ],
        },
        {
          youtube: 'https://www.youtube.com/watch?v=Y8Tko2YC5hA',
          text: `What is Python, what is it used for, and why you must learn it?`,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
          text: `This is a full fledged 6 hour youtube lesson that will help you learn, as well as practice by doing projects.`,
        },
      ],
    }
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

<style scoped lang="stylus"></style>
