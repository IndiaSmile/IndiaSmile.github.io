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
      title: 'TV',

      image: require('~/assets/images/how-i-met-your-mother.jpg?resize'),

      list: [
        {
          title: 'English',
          subtitle: '',
          image: require('~/assets/images/how-i-met-your-mother.jpg?resize'),
          color: 'rgba(255, 230, 0, 0.85)',
          href: '/entertainment/tv/english',
          isDarkText: true,
        },
        {
          title: 'Hindi',
          subtitle: '',
          image: require('~/assets/images/kuchh-rang-pyaar-ke.jpg?resize'),
          color: 'rgba(217, 219, 225, 0.85)',
          href: '/entertainment/tv/hindi',
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
