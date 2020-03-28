<template lang="pug">
  div.main
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        h5.content__heading(v-if="!!data.heading") {{ data.heading }}
        p.content__text(v-if="typeof data.text === 'string'") {{ data.text }}

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
      image: require('~/assets/images/english-rom-com.png'),
      title: 'Best Hollywood Romantic Comedies',

      article: [
        {
          text: `There is no other feeling that literally gives you butterflies. Love is sacred and complex. Many embrace it, many lose it, many find it and many don’t believe in it! The important thing is that we need love and kindness. In such times, we need to be supportive and kind, especially to the doctors and nurses that are fighting for our safety.💖 These are a list of comedy movies, with romance at its core, that you can cozy up and watch with your loved ones!`,
        },
        {
          heading: 'Annie Hall',
          text: `A divorced Jewish comedian, reflects on his relationship with ex-lover Annie Hall, an aspiring nightclub singer, which ended abruptly just like his previous marriages. The movie is a brilliant meditation on the beauty, conflict and bittersweetness of romance. An evergreen tale of love and humour as well.`,
        },
        {
          heading: 'You’ve Got Mail',
          text: `The owner of a bookstore chain meets the owner of a quaint little bookshop online and they fall in love with each other. However, they are unaware that they are actually business rivals. You shouldn’t be surprised if this love story touches your heart. The vulnerability and pride in her mother, Joe's sensitivity and devious behaviour are a treat to witness!`,
        },
        {
          heading: 'Groundhog Day',
          text: `Phil, a self-centred weatherman, goes to the town of Punxsutawney for an assignment. He is later shocked when he wakes up the next morning and realises that he is reliving the same day over and over again. Bill Murray shines in this good-natured comedy that delivers lots of laughs and some honest sentiment.`,
        },
        {
          heading: 'Notting Hill',
          text: `William, a British bookseller, meets and falls in love with Anna, a high-profile American actress. However, their relationship goes through many problems due to their different social statuses. While this romantic comedy doesn't expose the dirty underbelly of our celebrity-crazed culture, it's definitely funny and a beautiful romantic comedy!`,
        },
        {
          heading: 'Down With Love',
          text: `A journalist, vows to seduce a writer, Barbara Novak, who preaches that women do not need men to make them happy. However, he starts falling for her while carrying out his ploy. An amusing script and a neat pay-off are enough to entertain women in particular. Down With Love sticks to romance without ever actually becoming a part of it.`,
        },
        {
          heading: 'Amelie (French)',
          text: `Despite being caught in her imaginative world, Amelie, a young waitress, decides to help people find happiness. Her quest to spread joy leads her on a journey where she finds true love. A beautiful and heartwarming story that will grip you and take you on a ride of joy and true love!`,
        },
        {
          heading: 'Always Be My Maybe',
          text: `Childhood sweethearts have a falling out and don't speak for 15 years, only reconnecting as adults when they run into each other. Although the old sparks are still there, the couple live in different worlds. The movie did a fantastic job of depicting Asians in an American upbringing while retaining the nuanced cultural aspects of growing up in an Asian family household.`,
        },
        {
          heading: 'Punch-Drunk Love',
          text: `A frustrated Barry Egan calls a phone-sex line to curb his loneliness. Little does he know that he will land in huge trouble and will also jeopardise his relationship with Lena. Definitely worth a viewing, Adam Sandler, in the best performance of his career, is a disturbed repressed fellow about to explode!`,
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

<style scoped lang="stylus">
.main
  display flex
  flex-direction column
  align-items center

  .content
    width 100%
    max-width 26em
    padding 1.5em 1.875em

    &__title
      color #19175B
      font-size 1.5em
      font-weight bold

    &__heading
      color #19175B
      font-size 1em
      font-weight bold

    &__text
      color #000
      font-size 0.875em
      margin-bottom 1.5em
</style>
