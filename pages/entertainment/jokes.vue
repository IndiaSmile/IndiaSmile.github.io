<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")

        Sharer(v-if="data.custom === 'Sharer'" :title="title")

        h5.content__heading(v-if="!!data.heading") {{ data.heading }}

        YTEmbed(v-if="!!data.youtube" :src="data.youtube")

        p.content__text(v-if="!!data.text" v-html="data.text")

      Sharer(:title="title")
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
      title: 'Jokes',
      image: require('~/assets/images/clown.jpg'),
      article: [
        {
          text: `Till someone makes the medicine for coronavirus, the best medicine we can use to fight it is laughter 🤣 We have prepared a list of some great comedy and joke clips themed around Coronavirus, join along and laugh your heart out 😆`,
        },
        {
          heading: '1. Zakir Khan - Coronavirus ka Sach',
          text: `A popular and tasty street food recipe prepared with cauliflower & basic sauces.`,
          youtube: 'https://www.youtube.com/watch?v=1CPVEFvYL8Y',
        },
        {
          custom: 'Sharer',
        },
        {
          heading: '2. Vir Das - Brightside of Coronavirus',
          text: `Vir Das comes back to the stage with some of his highly intelligent and witty comedy. He explains the ‘Bright Side’ of Coronavirus in the most hilarious (and slightly dark) way ever!😝`,
          youtube: 'https://www.youtube.com/watch?v=aNZGtkjAyA4',
        },
        {
          heading: '3. Karunesh Talwar - Random Jokes',
          text: `Hahahah! Here is your favourite Karunesh Talwar with some of his unreleased random jokes💪!Known for his cynical comedy, he touches some really interesting topics here.`,
          youtube: 'https://www.youtube.com/watch?v=NATcyqYtsBA',
        },
        {
          heading: '4. Shridhar Venkataramana - Coronavirus, CAA, NRC',
          text: `What kind of comedy will you expect from an IIM graduate? Multiply that by a 100 and comes Shridhar Venkataramana. His intelligent jabs at political issues and take on the virus is outrageously funny.😂`,
          youtube: 'https://www.youtube.com/watch?v=YqyaDa6I-uo',
        },
        {
          heading: '5. Parenting TIps - Amit Tandon',
          text: `‘Don't Treat your daughter as a Princess. First Treat your wife like a queen’🙏. The married guy of the stand-up comedy circuit is at it with his powerful punchlines and witty comedy. A clip from his Netflix special, Family Tandoncies, a must-watch.`,
          youtube: 'https://www.youtube.com/watch?v=QZYcTySliOY',
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
