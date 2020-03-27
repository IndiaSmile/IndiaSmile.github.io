<template lang="pug">
  div.main
    ArticleHero(:image="image")

    section.section.content
      h2.content__title Entertainment

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
