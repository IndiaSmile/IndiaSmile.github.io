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
            `It is important, whilst we unite and battle this pandemic, we give our best effort to maintain health and strength ( both mental and physical! ) Once this period ends, we need to get back to our daily hurdles of life and be victorious. Focus should be more on involving fresh fruits and raw vegetables to maintain a proper diet. Food which is easy to prepare and accessible, is key.`,
            `Maintain stock intelligently, no need to hoard and instil panic amongst others. It is also essential we indulge in fitness! Staying still with no exercise for more than 20 days will cause extreme fatigue, do avoid it! Learn how Yoga transforms lives and explore various home exercises that you can follow and achieve your dream body in the process. `,
            `You have enough time to sleep, which in majority of cases leads to oversleeping! Indulging in sleeping excessively will do the opposite of what sleep is meant to provide! Do encourage your family and loved ones to participate along with you during workouts and diet plans, it can be a great way to spend time together.`,
          ],
        },
        {
          heading: 'Schedule/Entertainment Options',
          text: `“Staying still and doing nothing are two very different things”
              Just because we are isolated, doesn’t mean we think as if there isn’t anything to do. Don’t stress about boredom, we have many ways to keep ourselves entertained. You can take online courses on skills you always wished to learn, also there are numerous inspirational and emotional movies as well as TV shows at your disposal. Read books and novels to explore more. You can see our selected picks for the best movies and books specially for this isolation period.`,
          button: {
            text: 'Best movies',
            href: '/entertainment/movies/english/comedy',
          },
        },
        {
          heading: 'Talking to people, friends and family',
          text: `It is essential we stay connected. In touch with our loved ones! You can do your part in stopping the spread of misinformation too, only if you are 100% sure.Tell your friends not to panic, try being productive and pass on the message ahead. Engage in fitness challenges with your friends to pass time and have fun.`,
        },
        {
          heading: 'Stay informed and aware',
          text: `Take your information only from trusted government sources and newspapers. Keep yourself informed about the virus, how fast it is spreading, necessary precautions, how to not panic, and most importantly to be alert and focused. It is very important for us to stop this virus from spreading, because it results in terrible consequences, especially because our large population cannot sustain it.`,
        },
        {
          heading:
            'At the same time, limit consumption of media coverage of coronavirus to alleviate anxiety.',
          text: `Try not to be influenced by the news and avoid overthinking! Analyse the situation and try to overcome fear. We will get through it, eventually India will become more hygienic and health cautious. We will learn from our mistakes and further develop ourselves.`,
        },
        {
          heading: 'Meditate',
          text: `We personally recommend meditation to avoid mind wavering thoughts. As you can’t go outside, go within! Explore true calmness and stop your wavering mind in order to focus.
            We have sorted out the best meditation apps available in the market that shall help you practice the methods.`,
        },
        {
          heading:
            'Children need extra care, talk to and reassure them, listen to their concerns and give attention',
          text: `Children perceive emotions very differently. Seeing you freak out might disturb your child. Grave threats, disturbances and tragedies can negatively impact children’s mental health. Remember yourself as a child, some memories you can revisit that always haunted you. Reassure children and give them hope, motivate them to be courageous and tackle life head on, no matter what situation.`,
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
