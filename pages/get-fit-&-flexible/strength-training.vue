<template lang="pug">
  div.main
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        h5.content__heading(v-if="!!data.heading") {{ data.heading }}
        YTEmbed(v-if="!!data.youtube" :src="data.youtube")
        p.content__text {{ data.text }}
</template>

<script>
import YTEmbed from '~/components/YTEmbed'
import ArticleHero from '~/components/ArticleHero'

export default {
  name: 'HomePage',
  components: {
    YTEmbed,
    ArticleHero,
  },

  data() {
    return {
      title: 'Strength Training',
      image: require('~/assets/images/person-weightlifting.png'),
      article: [
        {
          text: `The need of the hour is to be strong! In such times, when an epidemic worries the masses, we want to develop true strength and power! Not just to look good, but to feel powerful, so that we believe our body can overcome all diseases! Real strength comes with persistence and continuous effort into ourselves. We believe it is essential for you to understand, and achieve what you always wanted! No more excuses, only results!`,
        },
        {
          heading: 'Basics of resistance training',
          text: `‘Strength’ is a type of training for developing the power and size of skeletal muscles. It utilises the force of gravity in the form of weights, in order to oppose the force generated through rhythmic contraction! Basically, you have to work your muscles. Take them out of their comfort zone. The more tough it is to push or pull, the stronger your body becomes! The formula is simple and effective. We will focus on how you can achieve these targets in the comfort of your home, without any additional equipment!`,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=8_8M53Y5PvI',
          text:
            'This is a comprehensive workout routine 30 mins a day that specialises in strength training! Helps understand key body movement and positioning.',
        },
        {
          youtube: 'https://www.youtube.com/watch?v=UoC_O3HzsH0',
          text:
            'This is a compelling video guide on how you can use bodyweight to your best advantage, to achieve a chiselled and powerful upper Body!',
        },
        {
          heading: 'In a hurry?',
          text: `We want you to start simple, but start strong! These 10 min workouts should help you focus better on achieving your strength goals! You can easily incorporate these in your schedule and start seeing some results. The key here is persistence!`,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=WLx5q7M741k',
          text:
            'This is a guide that will help you burn that unwanted fat from your body and eventually convert them into muscle. Intensive strength workout from home, using no equipment! ',
        },
        {
          youtube: 'https://www.youtube.com/watch?v=3sEeVJEXTfY',
          text:
            'Highly reviewed intensive workout exercises you can follow, at your home, without any equipment.',
        },
        {
          heading: 'Challenge your body 🥇!',
          text: `Try our curated structured challenge tutorials, that can guide you day by day and transform you into a better version of yourself bit by bit! We have selected goal driven exercises so that you are clear with the target in mind. If you are able to adhere to this religiously, you will see yourself in a completely new limelight and it will be amazing.`,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=9VsDP584zyQ&t=173s',
          text:
            'This is the 22 day abs challenge, Core strength is fundamental, Just imagine yourself entering back into your regular life with a strong set of 6 pack abs.',
        },
        {
          youtube: 'https://www.youtube.com/watch?v=ua6bC-2QF4Y',
          text:
            'This is a transformational video of a man, who did 100 pushups a day for 30 days. The dedication, and results achieved are truly inspiring. Set yourself goals and start! And remember, no better time to start, then now!',
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
.main
  display flex
  flex-direction column
  align-items center

  .content
    width 100%
    max-width 26em
    padding 1.5em 1.875em

    &__title
      color #19175B
      font-size 1.5em
      font-weight bold

    &__heading
      color #19175B
      font-size 1em
      font-weight bold

    &__text
      color #000
      font-size 0.875em
      margin-bottom 1.5em
      white-space pre-line
</style>
