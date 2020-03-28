<template lang="pug">
  .main
    ArticleHero(:image="image")

    section.section.content
      h2.content__title {{ title }}

      .container
        .columns.is-multiline
          .column.is-one-third(
            v-for="(item, index) in list"
            :key="index"
          )
            card(
              :title="item.title"
              :subtitle="item.subtitle"
              :image="item.image"
              :color="item.color"
              :to="item.href"
              :isDarkText="item.isDarkText"
            )
</template>

<script>
import Card from '~/components/Card'
import ArticleHero from '~/components/ArticleHero'

export default {
  components: {
    Card,
    ArticleHero,
  },

  data() {
    return {
      title: 'Movies',

      image: require('~/assets/images/it-clown.png'),

      list: [
        {
          title: 'Hollywood',
          subtitle: 'English',
          image: require('~/assets/images/english-thriller.png'),
          color: 'rgba(252, 197, 177, 0.85)',
          href: '/entertainment/movies/english',
          isDarkText: false,
        },
        {
          title: 'Bollywood',
          subtitle: 'Hindi',
          image: require('~/assets/images/hindi-rom-com.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/movies/hindi',
          isDarkText: true,
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
