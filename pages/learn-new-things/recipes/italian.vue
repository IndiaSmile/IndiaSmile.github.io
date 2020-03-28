<template lang="pug">
  div.main
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        h5.content__heading(v-if="!!data.heading") {{ data.heading }}

        p.content__text {{ data.text }}

        YTEmbed(v-if="!!data.youtube" :src="data.youtube")
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
      title: 'Italian',
      image: require('~/assets/images/recipe-italian.png'),
      article: [
        {
          text: `Mamma mia! A list of simple Indo-Italian recipes that are hands on.`,
        },
        {
          heading: 'Pasta in Makhani Sauce ',
          text: `Pasta made in delicious Makhani sauce! Try out this unique blend of Indian Italian.`,
          youtube: 'https://www.youtube.com/watch?v=98SJuJ7iY9Q',
        },
        {
          heading: 'Bread Pizza',
          text: `This bread pizza is a quick, easy and tasty bread snack made easily on a tawa or pan. Don’t have a pizza base, need not worry anymore!`,
          youtube: 'https://www.youtube.com/watch?v=D1wAl7g5tvk',
        },
        {
          heading: 'Italian Pizza ',
          text: `Delicious pizza made on a frying pan. The easy way to enjoy the beloved dish!`,
          youtube: 'https://www.youtube.com/watch?v=ppAIhDNkuM0',
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

<style scoped lang="stylus">
.main
  display flex
  flex-direction column
  align-items center

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
      white-space pre-line
</style>
