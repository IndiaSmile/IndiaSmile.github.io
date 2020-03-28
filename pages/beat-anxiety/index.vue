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
      title: 'Beat Anxiety & Gain a Peaceful Calm ',

      image: require('~/assets/images/woman-meditating.png'),

      list: [
        {
          title: 'Meditation apps',
          subtitle: '',
          image: require('~/assets/images/meditating-app.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/beat-anxiety/meditation-apps',
          isDarkText: true,
        },
        {
          title: 'Breathing techniques',
          subtitle: '',
          image: require('~/assets/images/ramdev-yoga.png'),
          color: 'rgba(160, 173, 190, 0.85)',
          href: '/beat-anxiety/breathing-techniques',
          isDarkText: false,
        },
        {
          title: 'Manage coronavirus anxiety',
          subtitle: '',
          image: require('~/assets/images/vegetables.png'),
          color: 'rgba(124, 98, 58, 0.85)',
          href: '/beat-anxiety/manage-coronavirus-anxiety',
          isDarkText: false,
        },
        {
          title: 'Meditation live sessions/groups',
          subtitle: '',
          image: require('~/assets/images/women-yoga.png'),
          color: 'rgba(194, 192, 206, 0.85)',
          href: '/beat-anxiety/meditation-sessions',
          isDarkText: true,
        },
        {
          title: 'Pages to follow',
          subtitle: '',
          image: require('~/assets/images/ration.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/beat-anxiety/pages-to-follow',
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
