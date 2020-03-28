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
      title: 'Recipes',

      image: require('~/assets/images/recipes.png'),

      list: [
        {
          title: 'Indian',
          subtitle: '',
          image: require('~/assets/images/recipe-indian.png'),
          color: 'rgba(86, 68, 58, 0.85)',
          href: '/learn/recipes/indian',
          isDarkText: false,
        },
        {
          title: 'Italian',
          subtitle: '',
          image: require('~/assets/images/recipe-italian.png'),
          color: 'rgba(193, 120, 78, 0.85)',
          href: '/learn/recipes/italian',
          isDarkText: false,
        },
        {
          title: 'Chinese',
          subtitle: '',
          image: require('~/assets/images/recipe-chinese.png'),
          color: 'rgba(151, 122, 93, 0.85)',
          href: '/learn/recipes/chinese',
          isDarkText: false,
        },
        {
          title: 'Continental',
          subtitle: '',
          image: require('~/assets/images/recipe-continental.png'),
          color: 'rgba(186, 134, 77, 0.85)',
          href: '/learn/recipes/continental',
          isDarkText: false,
        },
        {
          title: 'Snacks',
          subtitle: '',
          image: require('~/assets/images/recipe-snacks.png'),
          color: 'rgba(127, 147, 103, 0.85)',
          href: '/learn/recipes/snacks',
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
