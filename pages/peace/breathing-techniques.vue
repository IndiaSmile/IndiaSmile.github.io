<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")

        Sharer(v-if="data.custom === 'Sharer'" :title="title")

        h5.content__heading(v-if="!!data.heading") {{ data.heading }}

        YTEmbed(v-if="!!data.youtube" :src="data.youtube")

        p.content__text(v-if="!!data.text" v-html="data.text")
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
      title: 'Breathing techniques',
      image: require('~/assets/images/ramdev-yoga.png'),
      article: [
        {
          text: `In our culture, breathing techniques are known as ‘Pranayam’ (Prana - life and Yama - control of). It is said that one who controls breath, controls life! Many researchers have spent years studying this concept and concluded that many diseases are caused due to incorrect breathing. <span class="js--h">If we have been breathing wrong the entire time, what is the right way? Or as we would like to ask, what is the best way to breathe?</span>`,
        },
        {
          custom: 'Sharer',
        },
        {
          youtube: 'https://www.youtube.com/watch?v=395ZloN4Rr8',
          text:
            'These are the 3 essential pranayama exercises for breath control. Observe carefully the flow and control displayed by the author.',
        },
        {
          youtube: 'https://www.youtube.com/watch?v=QOgKutspaNY',
          text:
            'Anulom-Vilom, a simple alternate breathing exercise is considered powerful and extremely useful in curing stress, headaches and anxiety.',
        },
      ],
    }
  },

  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style scoped lang="stylus"></style>
