<template lang="pug">
  div.main
    ArticleHero(:image="image")

    section.section.content
      h2.content__title Hindi movies

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
      image: '/images/hindi-rom-com.png',

      list: [
        {
          title: 'Thriller',
          subtitle: 'Best thrillers',
          image: '/images/hindi-thriller.png',
          color: 'rgba(71, 81, 56, 0.85)',
          href: '/entertainment/movies/hindi/thriller',
          isDarkText: false,
        },
        {
          title: 'Crime',
          subtitle: 'Best crimes',
          image: '/images/hindi-crime.png',
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/movies/hindi/crime',
          isDarkText: true,
        },
        {
          title: 'Comedy',
          subtitle: 'Best comedies',
          image: '/images/hindi-comedy.png',
          color: 'rgba(234, 169, 83, 0.85)',
          href: '/entertainment/movies/hindi/comedy',
          isDarkText: false,
        },
        {
          title: 'Horror',
          subtitle: 'Best horrors',
          image: '/images/hindi-horror.png',
          color: 'rgba(26, 9, 2, 0.85)',
          href: '/entertainment/movies/hindi/horror',
          isDarkText: false,
        },
        {
          title: 'Romantic Comedies',
          subtitle: 'Best rom-coms',
          image: '/images/hindi-rom-com.png',
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/movies/hindi/rom-com',
          isDarkText: true,
        },
      ],
    }
  },
}
</script>

<style scoped lang="stylus">
.content
  padding 0.75em

  &__title
    color #19175B
    font-size 1.5em
    font-weight bold
</style>
