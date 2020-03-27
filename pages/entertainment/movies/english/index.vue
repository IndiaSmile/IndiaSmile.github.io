<template lang="pug">
  div.main
    ArticleHero(:image="image")

    section.section.content
      h2.content__title English movies

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
      image: require('~/assets/images/english-thriller.png'),

      list: [
        {
          title: 'Thriller',
          subtitle: 'Best thrillers',
          image: require('~/assets/images/english-thriller.png'),
          color: 'rgba(71, 81, 56, 0.85)',
          href: '/entertainment/movies/english/thriller',
          isDarkText: false,
        },
        {
          title: 'Crime',
          subtitle: 'Best crimes',
          image: require('~/assets/images/english-crime.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/movies/english/crime',
          isDarkText: true,
        },
        {
          title: 'Comedy',
          subtitle: 'Best comedies',
          image: require('~/assets/images/english-comedy.png'),
          color: 'rgba(234, 169, 83, 0.85)',
          href: '/entertainment/movies/english/comedy',
          isDarkText: false,
        },
        {
          title: 'Horror',
          subtitle: 'Best horrors',
          image: require('~/assets/images/it-clown.png'),
          color: 'rgba(26, 9, 2, 0.85)',
          href: '/entertainment/movies/english/horror',
          isDarkText: false,
        },
        {
          title: 'Romantic Comedies',
          subtitle: 'Best rom-coms',
          image: require('~/assets/images/english-rom-com.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/movies/english/romantic-comedy',
          isDarkText: true,
        },
      ],
    }
  },
}
</script>

<style scoped lang="stylus">
.content
  padding 1.25em

  &__title
    color #19175B
    font-size 1.5em
    font-weight bold
    padding-left 0.42em
</style>
