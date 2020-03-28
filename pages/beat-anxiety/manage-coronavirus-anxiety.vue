<template lang="pug">
  div.main
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        h5.content__heading(v-if="!!data.heading") {{ data.heading }}
        p.content__text(v-if="typeof data.text === 'string'") {{ data.text }}
        div(v-else)
          p.content__text(v-for="(text, idx) in data.text" :key="idx") {{ text }}

        Button.content__button(v-if="data.button" :text="data.button.text" :href="data.button.href")

</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import Button from '~/components/Button'

export default {
  name: 'HomePage',
  components: {
    ArticleHero,
    Button,
  },

  data() {
    return {
      title: 'Coronavirus Stress Management',
      image: require('~/assets/images/vegetables.png'),
      article: [
        {
          heading: 'Healthy Lifestyle',
          text: [
            `It is important, whilst we unite and battle this pandemic, we give our best effort to maintain health and strength (both mental and physical!) Once this period ends, we need to get back to our daily hurdles of life and be victorious. Focus on including fresh fruits and raw vegetables in your diet 🍉. Food which is easy to prepare and accessible is the key here.`,
            `Avoid hoarding and instilling unnecessary panic amongst others, but do keep a minimum level of stock with you. It is also essential we focus on fitness! Staying still with no exercise for more than 20 days will cause extreme fatigue, do avoid it! Learn how Yoga 🧘‍♀️ transforms lives and explore the various home exercises that you can follow without any equipment, and achieve your dream body! `,
            `You have enough time to sleep, which might lead to oversleeping! Avoid this, as excessive sleep only leads to you feeling drowsy during the day! Do encourage your family and loved ones to participate along with you during workouts and diet plans,it can be a great way to spend time together.`,
          ],
        },
        {
          heading: 'Schedule/Entertainment Options',
          text: `“Staying still and doing nothing are two very different things”
              Just because we are isolated, doesn’t mean there isn’t anything to do. There are multiple things you can do at home. You can take online courses on skills you always wished to learn, also there are numerous inspirational and emotional movies as well as TV shows at your disposal. Or you can feed your brain by reading books 📚. You can see our selected picks for the best movies and books specially curated for this isolation period.`,
          button: {
            text: 'Explore Entertainment',
            href: '/entertainment',
          },
        },
        {
          heading: 'Stay in touch with friends and family',
          text: `It is essential we stay connected 🤙 and in touch with our loved ones! You can do your part in stopping the spread of misinformation as well. Tell your friends not to panic, try being productive and pass on the message ahead. Engage in fitness challenges with your friends to pass time and have fun in the process.`,
        },
        {
          heading: 'Stay informed and aware',
          text: `Take your information only from trusted government sources and newspapers. Keep yourself informed about the virus and the necessary precautions to take, avoid panic, and most importantly be alert and focused. It is very important for us to stop this virus from spreading, so ensure you follow the government instructions diligently.`,
        },
        {
          heading:
            'At the same time, limit consumption of media coverage of coronavirus to alleviate anxiety.',
          text: `Try not to be influenced by the news and avoid overthinking! Analyse the situation and try to overcome fear. We will get through it together, and emerge stronger on the other side. We will learn from our mistakes and further develop ourselves.`,
        },
        {
          heading: 'Meditate',
          text: `Meditation calms your mind and helps you avoid mind wavering thoughts. As you can’t go outside, go within! Explore true calmness and stop your wavering mind in order to focus.
          We have sorted out the best meditation apps available in the market that shall help you practice these methods.`,
        },
        {
          heading:
            'Children need extra care, talk to and reassure them, listen to their concerns and give attention',
          text: `Children perceive emotions very differently. Seeing you freak out might disturb your child. Grave threats, disturbances and tragedies can negatively impact children’s mental health. Talk to children to reassure them, and motivate them to be courageous and tackle this challenge head on.`,
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

    &__button
      margin-bottom 1.5em
</style>
