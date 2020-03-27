<template lang="pug">
  div
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        h5.content__heading(v-if="!!data.heading") {{ data.heading }}
        YTEmbed(v-if="!!data.youtubeSrc" :src="data.youtubeSrc")
        p.content__text {{ data.text }}
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
      title: 'Yoga',
      image: '/images/girl-yoga.png',
      article: [
        {
          text: `They say that it takes a minimum of 21 days of a particular routine to build a true habit! As we have that amount of time in our lives currently, let’s set specific goals and achieve some real targets that help us step out into life with a deeper sense of calmness and a superior state of physical and mental health. We have selected some video courses that challenge you to be better!`,
        },
        {
          heading: '1. Yoga For Beginners at Home',
          youtubeSrc: '',
          text: `This is a great 30 day Yoga challenge that will align your body and breathing perfectly! With focused exercises as you work together with the creator to achieve your targets!`,
        },
        {
          heading: '2. 21 Day Yin Yoga Challenge',
          youtubeSrc: '',
          text: `Explore this 21 day Yoga challenge with Heather, the calmness and soothing tone of the complete video course will definitely make you want to indulge and have a positive impact on your life!`,
        },
      ],
    }
  },
}
</script>

<style scoped lang="stylus">
.content
  width 100%
  max-width 26em
  padding 1.5em 1.875em

  &__title
    color #19175B
    font-size 1.5em
    font-weight bold

  &__heading
    color #19175B
    font-size 1em
    font-weight bold

  &__text
    color #000
    font-size 0.875em
    margin-bottom 1.5em
</style>
