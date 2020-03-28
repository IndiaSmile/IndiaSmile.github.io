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
      title: 'Music',

      image: require('~/assets/images/girls-like-you.png'),

      list: [
        {
          title: 'Old Hindi Songs',
          subtitle: '',
          image: require('~/assets/images/old-man.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/music/old-songs',
          isDarkText: true,
        },
        {
          title: 'New Hindi Songs',
          subtitle: '',
          image: require('~/assets/images/kriti-sanon.png'),
          color: 'rgba(118, 9, 27, 0.85)',
          href: '/entertainment/music/new-songs',
          isDarkText: false,
        },
        {
          title: 'Punjabi Music',
          subtitle: '',
          image: require('~/assets/images/happy-person.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/entertainment/music/punjabi',
          isDarkText: true,
        },
        {
          title: 'Hindi Rap',
          subtitle: '',
          image: require('~/assets/images/kyij.png'),
          color: ' rgba(34, 34, 34, 0.85)',
          href: '/entertainment/music/hindi-rap',
          isDarkText: false,
        },
        {
          title: 'Rap',
          subtitle: '',
          image: require('~/assets/images/rap.png'),
          color: 'rgba(3, 17, 45, 0.85)',
          href: '/entertainment/music/rap',
          isDarkText: false,
        },
        {
          title: 'Pop',
          subtitle: '',
          image: require('~/assets/images/girls-like-you.png'),
          color: 'rgba(60, 77, 105, 0.85)',
          href: '/entertainment/music/pop',
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
