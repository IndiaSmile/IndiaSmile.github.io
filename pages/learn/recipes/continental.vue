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
      title: 'Continental',
      image: require('~/assets/images/recipe-continental.jpg'),
      article: [
        {
          text: `A range of continental recipes that are simple and easy to make at home with available ingredients.`,
        },
        {
          heading: 'Egg based dishes',
          text: `Egg recipes in 9 different ways, suited to Indian flavour. Eggs are beneficial in making a number of dishes, do try to stock them if you are an egg lover. `,
          youtube: 'https://www.youtube.com/watch?v=Nd2SUKWcBDM',
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Roasted Vegetable salad',
          text: `Apart from the exotic ingredients, this delicious roasted salad recipe is great to follow with your own available vegetables! `,
          youtube: 'https://www.youtube.com/watch?v=U3CBz6_Q618',
        },
        {
          heading: 'Paneer Sandwich',
          text: `Smoked paneer sandwiches, you can try different stuffings, according to availability.`,
          youtube: 'https://www.youtube.com/watch?v=ITs1KGEqb1w',
        },
        {
          heading: 'Cheese onion rings',
          text: `Tasty onion rings dipped in cheese, makes a perfect appetiser.`,
          youtube: 'https://www.youtube.com/watch?v=ke-Mu3Lv_ug',
        },
        {
          heading: 'French Fries with homemade cheese sauce.',
          text: `We all love French fries, try it with a twist with this delicious homemade cheese sauce!`,
          youtube: 'https://www.youtube.com/watch?v=ZaXRdRDJd7U',
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
