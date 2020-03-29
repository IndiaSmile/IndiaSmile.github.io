<template lang="pug">
  div.main
    ArticleHero(:image="image")

    section.section.content
      h2.content__title {{ title }}

      .container
        .columns.is-multiline
          .column.is-one-third(
            v-for="(item, index) in list"
            :key="index"
          )
            card(
              :title="item.title"
              :subtitle="item.subtitle"
              :image="item.image"
              :color="item.color"
              :to="item.href"
              :isDarkText="item.isDarkText"
              :button="item.button"
            )
</template>

<script>
import Card from '~/components/Card'
import ArticleHero from '~/components/ArticleHero'

export default {
  components: {
    Card,
    ArticleHero,
  },

  data() {
    return {
      title: 'Whatsapp communities',

      image: require('~/assets/images/whatsapp-alt.jpg'),

      list: [
        {
          title: 'TV and Movies',
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          image: require('~/assets/images/family-tv.jpg'),
          color: 'rgb(247, 235, 205)',
          href: 'https://chat.whatsapp.com/CSEaQHFghRmKfoDBwM9ePP',
          isDarkText: true,
          button: 'Join on WhatsApp',
        },
        {
          title: 'Updates',
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          image: require('~/assets/images/friends.jpg'),
          color: 'rgb(255, 255, 242)',
          href: 'Jokes',
          isDarkText: true,
          button: 'Join on WhatsApp',
        },
        {
          title: 'Mood Support',
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          image: require('~/assets/images/modi.jpg'),
          color: 'rgb(161, 131, 175)',
          href: 'https://chat.whatsapp.com/F97AbnosfqeEC3gJObw6sU',
          isDarkText: false,
          button: 'Join on WhatsApp',
        },
        {
          title: 'Jokes',
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          image: require('~/assets/images/clown.jpg'),
          color: 'rgb(140, 119, 140)',
          href: 'https://chat.whatsapp.com/KrTMHQTJ8CcA1V58rYy9Mc',
          isDarkText: false,
          button: 'Join on WhatsApp',
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
