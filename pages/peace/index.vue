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
      title: 'Beat Anxiety & Gain a Peaceful Calm ',

      image: require('~/assets/images/woman-meditating.jpg?resize'),

      list: [
        {
          title: 'Best Meditation Apps',
          subtitle: 'Get back control of your life ☮',
          image: require('~/assets/images/meditating-app.jpg?resize'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/peace/meditation-apps',
          isDarkText: true,
        },
        {
          title: 'Breathing Techniques',
          subtitle: 'Learn the basics of Pranayam',
          image: require('~/assets/images/ramdev-yoga.jpg?resize'),
          color: 'rgba(160, 173, 190, 0.85)',
          href: '/peace/breathing-techniques',
          isDarkText: false,
        },
        {
          title: 'Manage coronavirus anxiety',
          subtitle: 'Tips to stay calm during the pandemic',
          image: require('~/assets/images/vegetables.jpg?resize'),
          color: 'rgba(124, 98, 58, 0.85)',
          href: '/peace/manage-coronavirus-anxiety',
          isDarkText: false,
        },
        // {
        //   title: 'Live meditation sessions',
        //   subtitle: '',
        //   image: require('~/assets/images/women-yoga.jpg?resize'),
        //   color: 'rgba(194, 192, 206, 0.85)',
        //   href: '/peace/meditation-sessions',
        //   isDarkText: true,
        // },
        // {
        //   title: 'Pages to follow',
        //   subtitle: '',
        //   image: require('~/assets/images/ration.jpg?resize'),
        //   color: 'rgba(247, 235, 205, 0.85)',
        //   href: '/peace/pages-to-follow',
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
