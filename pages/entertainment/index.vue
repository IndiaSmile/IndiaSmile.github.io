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
      title: 'Best Modern TV & Movies',

      image: require('~/assets/images/amitabh-bachchan.jpg?resize'),

      list: [
        {
          title: 'Movies',
          subtitle: 'Curated Hollywood & Bollywood Movies',
          image: require('~/assets/images/it-clown.jpg?resize'),
          color: 'rgba(48, 19, 1, 0.85)',
          href: '/entertainment/movies',
          isDarkText: false,
        },
        {
          title: 'TV',
          subtitle: 'Catch up on the best English and Hindi Web Shows',
          image: require('~/assets/images/how-i-met-your-mother.jpg?resize'),
          color: 'rgba(255, 230, 0, 0.85)',
          href: '/entertainment/tv',
          isDarkText: true,
        },
        {
          title: 'Music',
          subtitle: 'Tune in and flow with these beats',
          image: require('~/assets/images/girls-like-you.jpg?resize'),
          color: 'rgba(60, 77, 105, 0.85)',
          href: '/entertainment/music',
          isDarkText: false,
        },
        {
          title: 'Jokes',
          subtitle: '',
          image: require('~/assets/images/clown.jpg?resize'),
          color: 'rgba(140, 119, 140, 0.85)',
          href: '/entertainment/jokes',
          isDarkText: false,
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
