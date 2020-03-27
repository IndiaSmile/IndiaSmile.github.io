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
      title: 'Get Fit and Flexible at Home',

      image: require('~/assets/images/woman-meditating.png'),

      list: [
        {
          title: 'Yoga',
          subtitle: '',
          image: require('~/assets/images/girl-yoga.png'),
          color: 'rgba(82, 72, 61, 0.85)',
          href: '/get-fit-&-flexible/yoga',
          isDarkText: false,
        },
        {
          title: 'Strength Training',
          subtitle: '',
          image: require('~/assets/images/person-weightlifting.png'),
          color: 'rgba(0, 0, 0, 0.85)',
          href: '/get-fit-&-flexible/strength-training',
          isDarkText: false,
        },
        {
          title: 'Pilates',
          subtitle: '',
          image: require('~/assets/images/girl-pilates.png'),
          color: 'rgba(184, 179, 159, 0.85)',
          href: '/get-fit-&-flexible/pilates',
          isDarkText: true,
        },
        {
          title: 'Cardio',
          subtitle: '',
          image: require('~/assets/images/girl-running.png'),
          color: 'rgba(34, 38, 41, 0.85)',
          href: '/get-fit-&-flexible/cardio',
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

<style scoped lang="stylus">
.content
  padding 1.25em

  &__title
    color #19175B
    font-size 1.5em
    font-weight bold
    padding-left 0.42em
</style>
