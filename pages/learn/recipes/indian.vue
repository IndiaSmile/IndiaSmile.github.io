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
      title: 'Indian',
      image: require('~/assets/images/recipe-indian.png'),
      article: [
        {
          text: [
            `A day with good food is a day well spent in isolation. The aroma of a delicious dish is a stress buster, don’t you agree? We suggest trying a new recipe everyday to keep things spicy in the household 😋`,
            `We would love to help our readers choose interesting recipes they can try at home. These are easy to make and require no additional equipment other than basic home ingredients. If any ingredient is unavailable, don’t worry, choose a dish from this variety of choices that suits your grocery shelf, as we know it is difficult to arrange essentials right now! `,
            `These are some unique Indian dishes that taste great and are easy to make!`,
          ],
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Kadi Pakoda',
          text: `A tangy curry mixed with delicious besan pakoda. A great add on to the usual Sabzi Roti!`,
          youtube: 'https://www.youtube.com/watch?v=Oa2s0dklrRo',
        },
        {
          heading: 'Paneer Masala',
          text: `Dhaba style authentic Paneer Masala. An original and authentic recipe of India, packed with spices and flavour!`,
          youtube: 'https://www.youtube.com/watch?v=kvq-jZwZRDE',
        },
        {
          heading: 'Lemon Rice',
          text: `A refreshing form of rice given a tangy lemon flavour which blends very well. Advised to try it out with pudina chutney or your favourite dip.`,
          youtube: 'https://www.youtube.com/watch?v=S582ox6c4l4',
        },
        {
          heading: 'Chicken Curry ',
          text: `This is not a traditional chicken curry recipe, it is easier and much faster to make! You can add more spices as per your preference.`,
          youtube: 'https://www.youtube.com/watch?v=WRYOVVexMhU',
        },
        {
          heading: 'Tawa Pulav',
          text: `A delightful change from the daily daal chawal, a recipe that is packed with vibrant flavours and is certainly a favourite among many youngsters.`,
          youtube: 'https://www.youtube.com/watch?v=SiGWhwvdyB4',
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
