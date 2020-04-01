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
              v-if="!item.custom"
              :title="item.title"
              :subtitle="item.subtitle"
              :image="item.image"
              :color="item.color"
              :to="item.href"
              :isDarkText="item.isDarkText"
              :button="item.button"
            )
            Sharer(
              v-else-if="item.custom === 'Sharer'"
              :title="title"
              textType="list"
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

      image: require('~/assets/images/whatsapp-alt.jpg?resize'),

      list: [
        {
          title: 'Movies and TV',
          subtitle:
            'Discuss (and defend 😉) your favourite movies and TV shows. Also discover fresh recommendations from our users on this group 😋',
          image: require('~/assets/images/family-tv.jpg?resize'),
          color: 'rgb(247, 235, 205)',
          href: 'https://chat.whatsapp.com/CSEaQHFghRmKfoDBwM9ePP',
          isDarkText: true,
          button: 'Join on WhatsApp',
        },
        {
          title: 'Updates',
          subtitle:
            'Important information regarding Covid 19 from official sources. Stay updated 🤙',
          image: require('~/assets/images/modi.jpg?resize'),
          color: 'rgb(255, 255, 242)',
          href: 'https://chat.whatsapp.com/KGdpQoNwG7q4IsZy2n13dd',
          isDarkText: true,
          button: 'Join on WhatsApp',
        },
        {
          title: 'Mood Support',
          subtitle:
            'We’ll get through this together 👨‍👩‍👧‍👦💖! Share what’s troubling you and get help from our other users.',
          image: require('~/assets/images/friends.jpg?resize'),
          color: 'rgb(161, 131, 175)',
          href: 'https://chat.whatsapp.com/F97AbnosfqeEC3gJObw6sU',
          isDarkText: false,
          button: 'Join on WhatsApp',
        },
        {
          title: 'Jokes',
          subtitle:
            ' You laugh we win! The funniest memes and jokes to lighten you up. 😂 P.S - The best way to fight coronavirus? Stay home and make fun of it 😜',
          image: require('~/assets/images/clown.jpg?resize'),
          color: 'rgb(140, 119, 140)',
          href: 'https://chat.whatsapp.com/KrTMHQTJ8CcA1V58rYy9Mc',
          isDarkText: false,
          button: 'Join on WhatsApp',
        },
        {
          title: 'Books',
          subtitle:
            'Are you a book worm? then this is a perfect group for people like you.',
          image: require('~/assets/images/books.jpg?resize'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: 'https://chat.whatsapp.com/FdykzBBqtJ0CBXOJGHnXbA',
          isDarkText: true,
          button: 'Join on WhatsApp',
        },
        {
          custom: 'Sharer',
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
