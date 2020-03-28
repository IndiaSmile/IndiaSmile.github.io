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
      Sharer(:title="title")
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
      title: 'Survival Starter Pack',

      image: require('~/assets/images/ration.png'),

      list: [
        {
          title: 'Soaps',
          subtitle: 'Discussion groups',
          image: require('~/assets/images/soaps.png'),
          color: 'rgba(234, 230, 219, 0.85)',
          href: '/survive/soaps',
          isDarkText: true,
        },
        {
          title: 'Sanitisers',
          subtitle: 'Get fit at home',
          image: require('~/assets/images/sanitizers.png'),
          color: 'rgba(230, 226, 225, 0.85)',
          href: '/survive/sanitisers',
          isDarkText: true,
        },
        {
          title: 'Vegetables',
          subtitle: 'Discussion groups',
          image: require('~/assets/images/vegetables.png'),
          color: 'rgba(124, 98, 58, 0.85)',
          href: '/survive/vegetables',
          isDarkText: false,
        },
        {
          title: 'Grocery essentials',
          subtitle: 'Discussion groups',
          image: require('~/assets/images/grocery.png'),
          color: 'rgba(108, 101, 84, 0.85)',
          href: '/survive/grocery-essentials',
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

<style scoped lang="stylus"></style>
