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
      title: 'Yoga',
      image: require('~/assets/images/girl-yoga.png'),
      article: [
        {
          text: `Yoga is one of mankind’s most divine practices to attain peace of mind. Indulging in unwanted thoughts and negative emotions is the last thing we want as of now! An extremely beneficial practice to inculcate into your daily routine!`,
        },
        {
          heading: 'Get Started',
          text: `Yoga is the mixture of breath controlling exercises, simple meditation techniques, and the adoption of specific bodily postures. We learn to calm the mind by focusing on our breathing. Specific asana and body postures help induce flexibility and a divine sense of aura within. Our aim is to keep ourselves mentally alert and be physically strong in such times of self isolation! Yoga is one of those practices which promote physical and emotional well-being and have amassed a massive following in the western culture due to its benefits.`,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=gNcx8H7pcMg',
          text:
            'Detailed insight into what Yoga means and its cultural and physical significance. Explore the types of Yoga and the different ways it helps reach a higher level of spirituality.',
        },
        {
          youtube: 'https://www.youtube.com/watch?v=CU3HuPNsyG4',
          text:
            'Explore the benefits of Yoga and how the western culture has been more proactive in adopting a Hindu originated practice.',
        },
        {
          heading: 'Short routines',
          text: `Yoga is a way of life. We do not need to feel disappointed or frustrated considering our limitations with regard to physical health, shape and size of the body, lack of time, lack of space or unavailability of a teacher. Yoga, in fact, is the means to overcome all these problems. Yoga includes every aspect of life! These quick video tutorials shall help you understand in a more constructive way as to what you need, to start off your journey!`,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=VaoV1PrYft4',
          text:
            'This shall give you a good idea as to how easily and efficiently you can adopt these techniques at home!',
        },
        {
          youtube: 'https://www.youtube.com/watch?v=4pKly2JojMw',
          text:
            'This 10 minute morning yoga full body stretch for beginners is an informative guide to kickstart your Yoga journey',
        },
        {
          heading: 'Yoga progression challenges 🙌',
          text: `They say that it takes a minimum of 21 days of a particular routine to build a true habit! As we have that amount of time in our lives currently, let’s set specific goals and achieve some real targets that help us step out into life with a deeper sense of calmness and a superior state of physical and mental health. We have selected some video courses that challenge you to be better! `,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=zzonBs06mX8',
          text:
            'This is a great 30 day Yoga challenge that will align your body and breathing perfectly! With focused exercises as you work together with the creator to achieve your targets!',
        },
        {
          youtube:
            'https://www.youtube.com/watch?v=RdFoBMTI6gA&list=PLrhFJ6LxdcZ8JXPqH8Ypqgom7Vjly3whc',
          text:
            'Explore this 21 day Yoga challenge with Heather, the calmness and soothing tone of the complete video course will definitely make you want to indulge and have a positive impact on your life!',
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
