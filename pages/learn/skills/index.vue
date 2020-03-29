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

      image: require('~/assets/images/person-using-laptop.jpg'),

      list: [
        {
          title: 'Financial Planning',
          subtitle: '',
          image: require('~/assets/images/money-cash.jpg'),
          color: 'rgba(69, 75, 61, 0.85)',
          href: '/learn-new-things/skills/financial-planning',
          isDarkText: false,
        },
        {
          title: 'Must Read Books',
          subtitle: '',
          image: require('~/assets/images/books.jpg'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/learn-new-things/skills/must-read-books',
          isDarkText: true,
        },
        {
          title: 'Introduction to Programming',
          subtitle: '',
          image: require('~/assets/images/code.jpg'),
          color: 'rgba(37, 48, 66, 0.85)',
          href: '/learn-new-things/skills/programming',
          isDarkText: false,
        },
        {
          title: 'Digital India 2020 - Word/Excel/PPT',
          subtitle: '',
          image: require('~/assets/images/digital-india.jpg'),
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
