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
              v-if="!item.custom"
              :title="item.title"
              :subtitle="item.subtitle"
              :image="item.image"
              :color="item.color"
              :to="item.href"
              :isDarkText="item.isDarkText"
            )
            Sharer(
              v-else-if="item.custom === 'Sharer'"
              :title="title"
              textType="list"
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

      image: require('~/assets/images/hindi-rom-com.jpg?resize'),

      list: [
        {
          title: 'Thriller',
          subtitle: 'Best thrillers',
          image: require('~/assets/images/hindi-thriller.jpg?resize'),
          color: 'rgba(71, 81, 56, 0.85)',
          href: '/entertainment/movies/hindi/thriller',
          isDarkText: false,
        },
        {
          title: 'Crime',
          subtitle: 'Best crimes',
          image: require('~/assets/images/hindi-crime.jpg?resize'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/movies/hindi/crime',
          isDarkText: true,
        },
        {
          title: 'Comedy',
          subtitle: 'Best comedies',
          image: require('~/assets/images/hindi-comedy.jpg?resize'),
          color: 'rgba(234, 169, 83, 0.85)',
          href: '/entertainment/movies/hindi/comedy',
          isDarkText: false,
        },
        {
          title: 'Horror',
          subtitle: 'Best horrors',
          image: require('~/assets/images/hindi-horror.jpg?resize'),
          color: 'rgba(26, 9, 2, 0.85)',
          href: '/entertainment/movies/hindi/horror',
          isDarkText: false,
        },
        {
          title: 'Romantic Comedies',
          subtitle: 'Best rom-coms',
          image: require('~/assets/images/hindi-rom-com.jpg?resize'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/movies/hindi/romantic-comedy',
          isDarkText: true,
        },
        {
          custom: 'Sharer',
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
