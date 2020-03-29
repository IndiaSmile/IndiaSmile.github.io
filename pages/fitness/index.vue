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
      title: 'Get Fit and Flexible at Home',

      image: require('~/assets/images/healthy-man.jpg'),

      list: [
        {
          title: 'Yoga',
          subtitle: 'Introduce yourself to a flexible lifestyle 🧘‍♂️',
          image: require('~/assets/images/girl-yoga.jpg'),
          color: 'rgba(82, 72, 61, 0.85)',
          href: '/fitness/yoga',
          isDarkText: false,
        },
        {
          title: 'Strength Training',
          subtitle: 'Get ripped with these workouts 💪',
          image: require('~/assets/images/person-weightlifting.jpg'),
          color: 'rgba(0, 0, 0, 0.85)',
          href: '/fitness/strength-training',
          isDarkText: false,
        },
        {
          title: 'Pilates',
          subtitle: 'Improve posture and strengthen muscles',
          image: require('~/assets/images/girl-pilates.jpg'),
          color: 'rgba(184, 179, 159, 0.85)',
          href: '/fitness/pilates',
          isDarkText: true,
        },
        {
          title: 'Cardio',
          subtitle: 'Give your endurance a boost 🏃‍♀️',
          image: require('~/assets/images/girl-running.jpg'),
          color: 'rgba(34, 38, 41, 0.85)',
          href: '/fitness/cardio',
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
