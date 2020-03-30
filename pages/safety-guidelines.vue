<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        Sharer(v-if="data.custom === 'Sharer'" :title="title")
        h5.content__heading(v-if="!!data.heading") {{ data.heading }}
        p.content__text(v-if="!!data.text" v-html="data.text")
      Sharer(:title="title")
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
      image: require('~/assets/images/doctor.jpg'),
      article: [
        {
          heading: '1. Washing Hands 👏',
          text: `Washing hands with soap, rinsing thoroughly between the fingers and cleaning the entire surface of the hand are essential practice! Let the soap stay on for 20 seconds to wipe out germs and stop any infection from entering your body.
            Sanitize yourself every few hours and remind your family members to do so as well. Remember to use an alcohol-based sanitizer, and be wary of the fake products being sold in the market to dupe customers.`,
        },
        {
          custom: 'Sharer',
        },
        {
          heading: '2. Cough into Elbows 💪',
          text: `Coughing, especially if near other people, should be done into the elbows to ensure germs and particles don't transmit. This is a nice time to make this a habit, it will help you prevent diseases in the future as well. `,
        },
        {
          heading: '3. Don’t touch your face 🙈🚫',
          text: `The infection can get inside your body by entering through the eyes, nose and mouth. Yes! Try avoiding touching your face as much as possible. To adopt these safety measures properly, we must start building more health-conscious habits`,
        },
        {
          heading: '4. Self isolate at home 🏡.',
          text: `Follow government instructions properly and stay at home as required. We need to ensure this for both our own safety and others as well.  `,
        },
        {
          heading: '5. Stay wary of myths',
          text: `<span class="js--h">Don’t believe in superstitions and orthodox opinions. Even the most experienced doctors are facing this virus for the very first time! Trust only expert medical advice and news from verified sources during this period, not WhatsApp forwards.</span>`,
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
