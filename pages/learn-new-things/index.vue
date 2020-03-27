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
      title: 'Learn Something New Quickly',

      image: require('~/assets/images/person-using-mobile.png'),

      list: [
        {
          title: 'Recipes',
          subtitle: '',
          image: require('~/assets/images/recipes.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/learn-new-things/recipes',
          isDarkText: true,
        },
        {
          title: 'Skills',
          subtitle: '',
          image: require('~/assets/images/person-using-laptop.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/learn-new-things/skills',
          isDarkText: true,
        },
        {
          title: 'Languages',
          subtitle: '',
          image: require('~/assets/images/languages.png'),
          color: 'rgba(255, 149, 135, 0.85)',
          href: '/learn-new-things/languages',
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
