<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      .content__section(v-for="(data, index) in article" :key="index")
        Sharer(v-if="data.custom === 'Sharer'" :title="title")

        h2.content__title(v-if="!!data.title") {{ data.title }}

        .content__user(v-if="!!data.date")
          .content__user__image
            img(src="~/assets/logo-square.png")
          .content__user__text
            .content__user__text__name IndiaSmile Team
            .content__user__text__date {{ data.date }}

        p.content__text(v-if="typeof data.text === 'string'" v-html="data.text")
        div(v-else-if="typeof data.text === 'object'")
          p.content__text(v-for="(text, idx) in data.text" :key="idx" v-html="text")

        nuxt-link(v-if="!!data.link" :to="data.link")
          b-button.content__button(type="is-primary" icon-right="chevron-right") Read more

</template>

<script>
import Button from '~/components/Button'
import ArticleHero from '~/components/ArticleHero'

export default {
  name: 'HomePage',
  components: {
    Button,
    ArticleHero,
  },

  data() {
    return {
      image: require('~/assets/images/newspapers-stack.jpg'),
      title: 'News',

      article: [
        {
          title: 'Yoga',
          text: [
            `They say that it takes a minimum of 21 days of a particular routine to build a true habit! As we have that amount of time in our lives currently, let’s set specific goals and achieve some real targets that help us step out into life with a deeper sense of calmness and a superior state of physical and mental health.`,
            `We have selected some video courses that challenge you to be better! `,
          ],
          date: '12 April 2020',
          link: '#read',
        },
        {
          custom: 'Sharer',
        },
        {
          title: 'Other news item',
          text: [
            `They say that it takes a minimum of 21 days of a particular routine to build a true habit! As we have that amount of time in our lives currently, let’s set specific goals and achieve some real targets that help us step out into life with a deeper sense of calmness and a superior state of physical and mental health.`,
            `We have selected some video courses that challenge you to be better! `,
          ],
          date: '12 April 2020',
          link: '#read',
        },
        {
          title: 'News item',
          text: [
            `They say that it takes a minimum of 21 days of a particular routine to build a true habit! As we have that amount of time in our lives currently, let’s set specific goals and achieve some real targets that help us step out into life with a deeper sense of calmness and a superior state of physical and mental health.`,
            `We have selected some video courses that challenge you to be better! `,
          ],
          date: '12 April 2020',
          link: '#read',
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
