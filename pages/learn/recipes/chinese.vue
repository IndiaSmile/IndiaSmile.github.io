<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")

        Sharer(v-if="data.custom === 'Sharer'" :title="title")

        h5.content__heading(v-if="!!data.heading") {{ data.heading }}
        p.content__text(v-if="!!data.text" v-html="data.text")

        YTEmbed(v-if="!!data.youtube" :src="data.youtube")
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
      title: 'Chinese',
      image: require('~/assets/images/recipe-chinese.jpg?resize'),
      article: [
        {
          text: `Delicious Indo- Chinese recipes suitable to make with the least amount of ingredients.`,
        },
        {
          heading: 'Gobi manchurian ',
          text: `A popular and tasty street food recipe prepared with cauliflower & basic sauces.`,
          youtube: 'https://www.youtube.com/watch?v=juJExyqr5W4',
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Honey chilli potato',
          text: `Made from crisp and deep fried potato wedges or potato fries. it is crispy, sweet and spicy coated with honey.`,
          youtube: 'https://www.youtube.com/watch?v=sw3dd-H9OOk',
        },
        {
          heading: 'Chilli Bread',
          text: `An interesting and spicy Chinese snack recipe made with leftover bread and basic chinese sauces.`,
          youtube: 'https://www.youtube.com/watch?v=ZKWOyogsO84',
        },
        {
          heading: 'Veg fried rice  ',
          text: `Popular recipe made with cooked rice, finely chopped veggies and seasoning ingredients.`,
          youtube: 'https://www.youtube.com/watch?v=hoZccEa0Pqo',
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
