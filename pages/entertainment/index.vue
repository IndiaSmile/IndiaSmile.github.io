<template lang="pug">
  div.main
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
      title: 'Best Modern TV & Movies',

      image: require('~/assets/images/amitabh-bachchan.png'),

      list: [
        {
          title: 'Movies',
          subtitle: 'Hollywood & Bollywood',
          image: require('~/assets/images/it-clown.png'),
          color: 'rgba(48, 19, 1, 0.85)',
          href: '/entertainment/movies',
          isDarkText: false,
        },
        {
          title: 'TV',
          subtitle: 'English & Hindi',
          image: require('~/assets/images/how-i-met-your-mother.png'),
          color: 'rgba(255, 230, 0, 0.85)',
          href: '/entertainment/tv',
          isDarkText: true,
        },
        {
          title: 'Music',
          subtitle: 'links to external playlists on YT/Spotify',
          image: require('~/assets/images/girls-like-you.png'),
          color: 'rgba(60, 77, 105, 0.85)',
          href: '/entertainment/music',
          isDarkText: false,
        },
        {
          title: 'Jokes',
          subtitle: '',
          image: require('~/assets/images/clown.png'),
          color: 'rgba(140, 119, 140, 0.85)',
          href: '/entertainment/jokes',
          isDarkText: false,
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
.content
  padding 1.25em

  &__title
    color #19175B
    font-size 1.5em
    font-weight bold
    padding-left 0.42em
</style>
