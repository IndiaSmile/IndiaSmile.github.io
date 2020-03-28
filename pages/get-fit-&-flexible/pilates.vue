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
      title: 'Pilates',
      image: require('~/assets/images/girl-pilates.png'),
      article: [
        {
          text: `Pilates is a form of low-impact exercises that aims to strengthen muscles while improving the postural alignment and flexibility of your body! A flexible body will make you feel comfortable in your skin and a strong core will help you mobilize faster. As we endure this quarantine phase, it is essential we aim to optimise our body with a mix of dire strength, explosive speed and flexibility! Pilates moves tend to target the core, although the exercises work other areas of your body as well. You can do Pilates without any equipment. You shall expect the moves to involve slow, precise movements and voluntary breath control.`,
        },
        {
          heading: 'Learn the basics',
          text: `Pilates can be a great addition to your workout. The innovation it brings is that you can very specifically focus on toning your muscles! Focusing all your strength and power to contract and perform rhythmic movements! Athletes of the highest calibre include it in their workouts! You can feel the burn in your muscles as they get worked in order to provide brute strength and flexibility, to your body!`,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=EJUkHoJMTEk',
          text:
            'Many of our readers aren’t aware about Pilates! This is a small video tour into what is is! what it signifies, the core areas of impact and how it changes lives!',
        },
        {
          youtube: 'https://www.youtube.com/watch?v=bgzPkvRQnro',
          text:
            'Essential sets and exercises of Pilates that shall get you going! Adapt and add these to your workout, many find these exercises really beneficial once they get the hang of it! ',
        },
        {
          heading: 'Short workouts',
          text: `Start at your own pace, initially these exercises will render your effort, you have to keep at it, till it becomes your favourite set of moves!
          Myths-
          1. Pilates is only for serious athletes or professional dancers!
          2. Pilates requires specialised equipment.`,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=03PFoL6JvQg',
          text:
            'This Pilates home workout will help you tone your whole body! Sculpt abs, tone tight legs, and shape slim arms with this efficient 10 min workout plan!',
        },
        {
          youtube: 'https://www.youtube.com/watch?v=qyeB2Wdh3cc',
          text:
            'A great 10 min Pilates demonstration by a top level athlete! See how her movements are supplemented with synchronised breathing!',
        },
        {
          heading: 'Challenge yourself!',
          text: `Each new day is a new opportunity to improve ourselves. Let’s take it and make the most of it! We wish to inspire you to put more effort day by day, as we tackle these days of peril in front of us! These Pilates workout challenges are selected by us keeping in mind your workout!`,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=eiMCGut5ZeY',
          text:
            'A 7 day Pilates workout plan, a week of this workout into your schedule will provide you enough results to make a decision as to how you want to inculcate Pilates further into your life!',
        },
        {
          youtube:
            'https://www.youtube.com/watch?v=ABtlapq7Qww&list=PLZZBp71NETYGOqFDxoZc5T7GEn_svNXB1',
          text:
            'This is the ultimate 30 day Pilates challenge beautifully executed by Robin Long! With each day she logs her journey and shares insightful tips along the way!',
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
