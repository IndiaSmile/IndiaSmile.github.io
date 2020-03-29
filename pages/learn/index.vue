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
      title: 'Learn Something New Quickly',

      image: require('~/assets/images/person-using-mobile.jpg'),

      list: [
        {
          title: 'Recipes',
          subtitle: '',
          image: require('~/assets/images/recipes.jpg'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/learn/recipes',
          isDarkText: true,
        },
        {
          title: 'Skills',
          subtitle: '',
          image: require('~/assets/images/person-using-laptop.jpg'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/learn/skills',
          isDarkText: true,
        },
        {
          title: 'Languages',
          subtitle: '',
          image: require('~/assets/images/languages.jpg'),
          color: 'rgba(255, 149, 135, 0.85)',
          href: '/learn/languages',
          isDarkText: true,
        },
        {
          title: 'Must Read Books',
          subtitle: '',
          image: require('~/assets/images/books.jpg'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/learn/must-read-books',
          isDarkText: true,
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
