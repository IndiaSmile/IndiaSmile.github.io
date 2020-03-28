<template lang="pug">
  div.main
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        h5.content__heading(v-if="!!data.heading") {{ data.heading }}
        p.content__text {{ data.text }}
        .content__buttons(v-if="!!data.buttons")
          Button.content__buttons__item(v-for="(button, idx) in data.buttons" :key="idx" :text="button.text" :href="button.link")
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
      title: 'Meditation Apps',
      image: require('~/assets/images/meditating-app.png'),
      article: [
        {
          text: `Being locked inside your home has been a surreal experience so far. It has been observed that social distancing increases levels of anxiety and stress in many cases! Well, staring at the wall in front of you will only generate more unnecessary and often negative thoughts 😝. `,
        },
        {
          text: `This is real. Many in our country don’t acknowledge it, but are victims! Meditation is the practice of focusing on your breath. It is a proven way to stop wavering thoughts, unwanted emotions. We weren’t given any warning in advance to be mentally ready for this pandemic, but it is never too late! Here is a list of meditation apps that make your experience truly unique!`,
        },
        {
          heading: 'Insight Timer',
          text: `The best free meditation app with the world's largest library of more than 30,000 guided meditations and over 5,000 teachers. We would encourage all our readers to give it a try!`,
          buttons: [
            {
              text: 'Android',
              link:
                'https://play.google.com/store/apps/details?id=com.spotlightsix.zentimerlite2&hl=en_IN',
            },
            {
              text: 'iOS',
              link:
                'https://apps.apple.com/us/app/insight-timer-meditation-app/id337472899',
            },
          ],
        },
        {
          heading: 'Calm',
          text: `Just as the name suggests. ‘Calm’, the most popular paid app on meditation, surpassed 50 million downloads last month! With regular body scans, meditation masterclasses, and sleep stories, this app offers an amazing user experience. Many people find value enough to purchase their paid plans. `,
          buttons: [
            {
              text: 'Android',
              link: 'https://apps.apple.com/us/app/calm/id571800810',
            },
            {
              text: 'iOS',
              link:
                'https://play.google.com/store/apps/details?id=com.calm.android&hl=en_IN',
            },
          ],
        },
        {
          heading: 'Headspace',
          text: `‘Gym membership for the mind’. The tagline says it all! Headspace is an industry leader, the guided courses and quick meditations help achieve a great first experience! It is a paid meditation platform.`,
          buttons: [
            {
              text: 'Android',
              link:
                'https://play.google.com/store/apps/details?id=com.getsomeheadspace.android&hl=en_IN',
            },
            {
              text: 'iOS',
              link:
                'https://apps.apple.com/us/app/headspace-meditation-sleep/id493145008',
            },
          ],
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

    &__buttons
      margin-bottom 1.5em

      &__item
        margin-right 0.5em
</style>
