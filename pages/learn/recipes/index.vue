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
      title: 'Recipes',

      image: require('~/assets/images/recipes.jpg?resize'),

      list: [
        {
          title: 'Indian',
          subtitle: '',
          image: require('~/assets/images/recipe-indian.jpg?resize'),
          color: 'rgba(86, 68, 58, 0.85)',
          href: '/learn/recipes/indian',
          isDarkText: false,
        },
        {
          title: 'Italian',
          subtitle: '',
          image: require('~/assets/images/recipe-italian.jpg?resize'),
          color: 'rgba(193, 120, 78, 0.85)',
          href: '/learn/recipes/italian',
          isDarkText: false,
        },
        {
          title: 'Chinese',
          subtitle: '',
          image: require('~/assets/images/recipe-chinese.jpg?resize'),
          color: 'rgba(151, 122, 93, 0.85)',
          href: '/learn/recipes/chinese',
          isDarkText: false,
        },
        {
          title: 'Continental',
          subtitle: '',
          image: require('~/assets/images/recipe-continental.jpg?resize'),
          color: 'rgba(186, 134, 77, 0.85)',
          href: '/learn/recipes/continental',
          isDarkText: false,
        },
        {
          title: 'Snacks',
          subtitle: '',
          image: require('~/assets/images/recipe-snacks.jpg?resize'),
          color: 'rgba(127, 147, 103, 0.85)',
          href: '/learn/recipes/snacks',
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
