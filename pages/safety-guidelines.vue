<template lang="pug">
  div.main
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        h5.content__heading(v-if="!!data.heading") {{ data.heading }}
        p.content__text {{ data.text }}
</template>

<script>
import ArticleHero from '~/components/ArticleHero'

export default {
  name: 'HomePage',
  components: {
    ArticleHero,
  },

  data() {
    return {
      title: 'Safety Guidelines',
      image: require('~/assets/images/doctor.png'),
      article: [
        {
          heading: '1. Washing Hands',
          text: `Washing hands with soap, rinsing thoroughly between the fingers and cleaning the entire surface of the hand are essential! Let the soap stay on for 20 seconds to wipe out germs and stop any infection from entering your body.
            Sanitize yourself every few hours and remind your family members to do so as well. Remember to use an alcohol based sanitizer, and be wary of the fake products being sold in the market to dupe customers.`,
        },
        {
          heading: '2. Cough into Elbows',
          text: `Coughing, especially if near other people, should be done into the elbows as germs and particles won’t be able to transmit. Make a habit of this, it will help prevent diseases in the future as well. `,
        },
        {
          heading: '3. Don’t touch your face',
          text: `The infection can get inside your body by entering through the eyes, nose and mouth. Yes! Completely avoiding touching your face is essential and a need of the hour. To adopt these safety measures properly, we must start building more health conscious habits`,
        },
        {
          heading: '4. Self isolate at home.',
          text: `Despite being under lockdown, many people are being seen out of their homes, this is ridiculous! We urge all our readers to remain home, we can only win through a collective effort. Even when acquiring essentials, take all safety precautions.  `,
        },
        {
          heading: '5. Common Myths',
          text: `Don’t believe in superstitions and orthodox opinions. Even the most experienced doctors are facing this virus for the very first time! Assuming we have such non approved cures will lead to tragedy and more loss of lives. These are a few of the common myths we are hearing these days! Mainly circulating on Whatsapp.`,
        },
        {
          text: `a) Summer heat will stop the virus.
            b) Cow urine can cure coronavirus.
            c) Taking hot baths can prevent coronavirus.`,
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
