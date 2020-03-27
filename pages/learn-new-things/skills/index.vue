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
      title: 'Skills',

      image: require('~/assets/images/person-using-laptop.png'),

      list: [
        {
          title: 'Financial Planning',
          subtitle: '',
          image: require('~/assets/images/money-cash.png'),
          color: 'rgba(69, 75, 61, 0.85)',
          href: '/learn-new-things/skills/financial-planning',
          isDarkText: false,
        },
        {
          title: 'Must Read Books',
          subtitle: '',
          image: require('~/assets/images/books.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/learn-new-things/skills/must-read-books',
          isDarkText: true,
        },
        {
          title: 'Introduction to Programming',
          subtitle: '',
          image: require('~/assets/images/code.png'),
          color: 'rgba(37, 48, 66, 0.85)',
          href: '/learn-new-things/skills/programming',
          isDarkText: false,
        },
        {
          title: 'Digital India 2020 - Word/Excel/PPT',
          subtitle: '',
          image: require('~/assets/images/digital-india.png'),
          color: 'rgba(177, 177, 177, 0.85)',
          href: '/learn-new-things/skills/digital-india',
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

<style scoped lang="stylus">
.content
  padding 1.25em

  &__title
    color #19175B
    font-size 1.5em
    font-weight bold
    padding-left 0.42em
</style>
