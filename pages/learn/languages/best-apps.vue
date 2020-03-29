<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")

        h5.content__heading(v-if="!!data.heading") {{ data.heading }}

        img.content__image(v-if="!!data.image" :src="data.image")

        Sharer(v-if="data.custom === 'Sharer'" :title="title")

        p.content__text(v-if="!!data.text" v-html="data.text")

        a(v-if="!!data.button" :href="data.link")
          b-button.content__button(icon-right="chevron-right") {{ data.button.text }}
</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import Button from '~/components/Button'

export default {
  name: 'HomePage',
  components: {
    ArticleHero,
    Button,
  },

  data() {
    return {
      title: 'Learn new languages',
      image: require('~/assets/images/languages.jpg'),
      article: [
        {
          text: `Only three percent of people around the world can speak over four languages. On top of that, our minds have the capacity to learn indefinitely. The isolation days present you an opportunity! A chance, a strong desire to learn can substantially boost your social skills and personality.`,
        },
        {
          custom: 'Sharer',
          image: require('~/assets/images/languages-grid.jpg'),
        },
        {
          text: `We wish to encourage our readers to work on themselves and try out a new language. <span class="js--h">Speaking fluently in multiple dialects is a truly impressive skill! Prepare for all the holidays you are going to take once this ends with these apps 😍 </span>`,
        },
        {
          heading: 'DuoLingo',
          text: `DuoLingo boasts over 100 million users, and is the most well-known free language learning app available today. The success of this app comes from a gamified user experience of seamless learning. Most of the courses offered by DuoLingo are created by native speakers, which helps to ensure accuracy of dialect. A free platform you can use to learn your favourite language.`,
          button: {
            text: 'DuoLingo',
            link: 'https://www.duolingo.com/',
          },
          image: require('~/assets/images/duolingo-app.jpg'),
        },
        {
          heading: 'MemRise',
          text: `With over 200 languages available, there’s a good  if you want to learn it, MemRise has it. The free version of the app gives you access to the same number of languages as the Pro version, just with fewer functionalities. Where it truly excels is in its ability to make learning fun and engaging.`,
          button: {
            text: 'MemRise',
            link: 'https://www.memrise.com/',
          },
          image: require('~/assets/images/memrise-app.jpg'),
        },
        {
          heading: 'HelloTalk',
          text: `HelloTalk takes a very interesting and different approach to learning. Instead of choosing from preset lessons, learners are connected with native speakers of their target language. Users then communicate conversationally using text and voice messages. Thanks to an in-app correction tool, users can make corrections to each other’s messages in real time. Learn by doing it approach, works effectively too.`,
          button: {
            text: 'HelloTalk',
            link: 'https://www.hellotalk.com/',
          },
          image: require('~/assets/images/hellotalk-app.jpg'),
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
