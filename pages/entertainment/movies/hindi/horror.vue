<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        Sharer(v-if="data.custom === 'Sharer'" :title="title")
        .content__header
          h5.content__heading(v-if="!!data.heading") {{ data.heading }}
          .content__rating(v-if="data.rating")
            b-icon(icon="star" size="is-small")
            | {{ data.rating }}

        img.content__image(v-if="!!data.image" :src="data.image")

        p.content__text(v-if="typeof data.text === 'string'" v-html="data.text")

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
      image: require('~/assets/images/hindi-horror.jpg'),
      title: 'Best Bollywood Horros',
      article: [
        {
          text: `Bollywood Horror has come a long way, initial years failed to deliver good content, but slowly the quality of movies have become better! Unexpected plots have become observable! People have started to appreciate mysterious content churned out by Indian directors and the trend looks good so far! This list has some really interesting mentions you should check out!👇`,
        },
        {
          heading: '1920',
          text: `Arjun falls in love with Lisa and abandons his family as well as faith for her. They move to a bungalow, but when Lisa gets possessed by a demonic spirit, Arjun tries his best to save her. Second half of the movie is intense and the movie comprises of some truly artistic scenes!`,
          image: require('~/assets/images/horror-1920.jpg'),
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Bhoot',
          text: `A bereaved shipping officer must save a girl he believes is real, on a stranded, unmanned haunted ship! While the film’s runtime is short, scenes are made as such so as to leave you waiting for the big reveal.`,
          image: require('~/assets/images/horror-bhoot.jpg'),
        },
        {
          heading: 'Raaz',
          text: `Sanjana and Aditya go to Ooty for a holiday to save their unsteady marriage. However, Sanjana is haunted by a spirit who reveals some dark secrets about Aditya and his past. Raaz is an interesting mixture of thriller and romance. A good watch!`,
          image: require('~/assets/images/horror-raaz.jpg'),
        },
        {
          heading: 'Darna Mana Hai',
          text: `Six friends narrate spooky tales to one another while stranded on a highway. Each story turns out to be scarier than the next one but the biggest horror strikes when some of the friends go missing. Darna Mana Hai is a ghost movie having 6 stories in one story. Some of the stories are really scary and the plot seems to have an overall compelling effect of fear.`,
          image: require('~/assets/images/horror-darna-mana-hai.jpg'),
        },
        {
          heading: 'Raat',
          text: `When a family moves into their new house in the city, they start experiencing strange incidents around the house. Soon, they seek the help of a priest when their daughter gets possessed. The movie establishes an aura and is intense at several places. Revathi is brilliant and truly convincing in her efforts.`,
          image: require('~/assets/images/horror-raat.jpg'),
        },
        {
          heading: '13B: Fear Has a New Address',
          text: `Manohar, along with his family, moves into a new apartment on the 13th floor. However, their peace is disturbed by a spirit that uses the TV as a medium to communicate with them. Watch '13B' for some smart cinematography, a stylised monochrome tint and some unique editing.`,
          image: require('~/assets/images/horror-13-b.jpg'),
        },
        {
          heading: 'Stree',
          text: `The people of a village live under a constant fear of Stree, the spirit of a woman, who attacks men at night during the festivals. Vicky, along with his friends, decides to solve the mystery. Stree is an entertaining film. An experimental comedy, that creates an eerie atmosphere and it manages to be funny and scary at the same.`,
          image: require('~/assets/images/horror-stree.jpg'),
        },
        {
          heading: 'Tumbbad',
          text: `When a family builds a shrine for Hastar, a monster who is never to be worshipped, and attempts to get their hands on his cursed wealth, they face catastrophic consequences. Tumbbad is a moody and a unique masterpiece. This one is genuinely scary.`,
          image: require('~/assets/images/horror-tumbbad.jpg'),
        },
        {
          heading: 'Pari',
          text: `A kind-hearted man tries to help a chained woman in a hut who is probably a victim of abuse. However, he soon realises that things are not as they appear to be. Pari manages to frighten you purely with its superlative performances and spine-chilling visuals.`,
          image: require('~/assets/images/horror-pari.jpg'),
        },
        {
          heading: 'Bhool Bhulaiyaa',
          text: `An NRI and his wife decide to stay in his ancestral home, paying no heed to the warnings about ghosts. Soon, inexplicable occurrences cause him to call a psychiatrist to help solve the mystery. One Excellent masterpiece. This is one of the rare movies where the story can be interpreted in multiple ways! A must watch, the film is hilarious and you can simply confuse it for a hardcore comedy in the start.`,
          image: require('~/assets/images/horror-bhool-bhulaiya.jpg'),
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
