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
      title: 'Hollywood',

      image: require('~/assets/images/english-thriller.jpg'),

      list: [
        {
          title: 'Thriller',
          subtitle: 'Best thrillers',
          image: require('~/assets/images/english-thriller.jpg'),
          color: 'rgba(71, 81, 56, 0.85)',
          href: '/entertainment/movies/english/thriller',
          isDarkText: false,
        },
        {
          title: 'Crime',
          subtitle: 'Best crimes',
          image: require('~/assets/images/english-crime.jpg'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/movies/english/crime',
          isDarkText: true,
        },
        {
          title: 'Comedy',
          subtitle: 'Best comedies',
          image: require('~/assets/images/english-comedy.jpg'),
          color: 'rgba(234, 169, 83, 0.85)',
          href: '/entertainment/movies/english/comedy',
          isDarkText: false,
        },
        {
          title: 'Horror',
          subtitle: 'Best horrors',
          image: require('~/assets/images/it-clown.jpg'),
          color: 'rgba(26, 9, 2, 0.85)',
          href: '/entertainment/movies/english/horror',
          isDarkText: false,
        },
        {
          title: 'Romantic Comedies',
          subtitle: 'Best rom-coms',
          image: require('~/assets/images/english-rom-com.jpg'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/movies/english/romantic-comedy',
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
