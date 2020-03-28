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
      title: 'Snacks',
      image: require('~/assets/images/recipe-snacks.png'),
      article: [
        {
          heading: 'Tadka Maggi',
          text: `Our favourite Maggi masala noodles given a unique tadka twist. Irresistible and something new to try out!`,
          youtube: 'https://www.youtube.com/watch?v=iRGXfgIfnds',
        },
        {
          heading: 'Bread Rolls',
          text: `Crispy and delicious bread rolls, a simple yet exciting treat for an evening snack.`,
          youtube: 'https://www.youtube.com/watch?v=8PZmFjX30Vc',
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Bread Poha',
          text: `A unique touch given to the traditional Poha, it is delicious!`,
          youtube: 'https://www.youtube.com/watch?v=y2HbAf3shAs',
        },
        {
          heading: 'Paneer Tikka Popcorns',
          text: `A crispy and delicious paneer snack to enjoy!`,
          youtube: 'https://www.youtube.com/watch?v=iYwpGKoYlEE',
        },
        {
          heading: 'Vegetable cutlets',
          text: `Fresh tasty cutlets with a rich blend of masala and simple ingredients.`,
          youtube: 'https://www.youtube.com/watch?v=KPDDFlZ7v2',
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

<style scoped lang="stylus"></style>
