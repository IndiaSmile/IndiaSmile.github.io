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
      title: 'Bollywood',

      image: require('~/assets/images/hindi-rom-com.png'),

      list: [
        {
          title: 'Thriller',
          subtitle: 'Best thrillers',
          image: require('~/assets/images/hindi-thriller.png'),
          color: 'rgba(71, 81, 56, 0.85)',
          href: '/entertainment/movies/hindi/thriller',
          isDarkText: false,
        },
        {
          title: 'Crime',
          subtitle: 'Best crimes',
          image: require('~/assets/images/hindi-crime.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/movies/hindi/crime',
          isDarkText: true,
        },
        {
          title: 'Comedy',
          subtitle: 'Best comedies',
          image: require('~/assets/images/hindi-comedy.png'),
          color: 'rgba(234, 169, 83, 0.85)',
          href: '/entertainment/movies/hindi/comedy',
          isDarkText: false,
        },
        {
          title: 'Horror',
          subtitle: 'Best horrors',
          image: require('~/assets/images/hindi-horror.png'),
          color: 'rgba(26, 9, 2, 0.85)',
          href: '/entertainment/movies/hindi/horror',
          isDarkText: false,
        },
        {
          title: 'Romantic Comedies',
          subtitle: 'Best rom-coms',
          image: require('~/assets/images/hindi-rom-com.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/movies/hindi/romantic-comedy',
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
