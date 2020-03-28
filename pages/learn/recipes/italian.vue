<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")

        Sharer(v-if="data.custom === 'Sharer'" :title="title")

        h5.content__heading(v-if="!!data.heading") {{ data.heading }}
        p.content__text(v-if="!!data.text" v-html="data.text")

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
          custom: 'Sharer',
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

<style scoped lang="stylus"></style>
