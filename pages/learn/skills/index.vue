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
      title: 'Skills',

      image: require('~/assets/images/person-using-laptop.jpg?resize'),

      list: [
        // {
        //   title: 'Financial Planning',
        //   subtitle: '',
        //   image: require('~/assets/images/money-cash.jpg?resize'),
        //   color: 'rgba(69, 75, 61, 0.85)',
        //   href: '/learn/skills/financial-planning',
        //   isDarkText: false,
        // },
        {
          title: 'Introduction to Programming',
          subtitle: '',
          image: require('~/assets/images/code.jpg?resize'),
          color: 'rgba(37, 48, 66, 0.85)',
          href: '/learn/skills/programming',
          isDarkText: false,
        },
        // {
        //   title: 'Digital India 2020 - Word/Excel/PPT',
        //   subtitle: '',
        //   image: require('~/assets/images/digital-india.jpg?resize'),
        //   color: 'rgba(177, 177, 177, 0.85)',
        //   href: '/learn/skills/digital-india',
        //   isDarkText: true,
        // },
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
