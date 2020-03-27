<template lang="pug">
  div.main
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}

      .content__section
        p.content__text
          | Bollywood Horror has come a long way, initial years failed to deliver good content, but slowly the quality of movies have become better! Unexpected plots have become observable! People have started to appreciate mysterious content churned out by Indian directors and the trend looks good so far! This list has some really interesting mentions you should check out!👇

      .content__section
        h5.content__heading
          | 1920

        p.content__text
          | Arjun falls in love with Lisa and abandons his family as well as faith for her. They move to a bungalow, but when Lisa gets possessed by a demonic spirit, Arjun tries his best to save her. Second half of the movie is intense and the movie comprises of some truly artistic scenes!


      .content__section
        h5.content__heading
          | Bhoot

        p.content__text
          | A bereaved shipping officer must save a girl he believes is real, on a stranded, unmanned haunted ship!
          |While the film’s runtime is short, scenes are made as such so as to leave you waiting for the big reveal.

      .content__section
        h5.content__heading
          | Raaz

        p.content__text
          | Sanjana and Aditya go to Ooty for a holiday to save their unsteady marriage. However, Sanjana is haunted by a spirit who reveals some dark secrets about Aditya and his past. Raaz is an interesting mixture of thriller and romance. A good watch!

      .content__section
        h5.content__heading
          | Darna Mana Hai

        p.content__text
          | Six friends narrate spooky tales to one another while stranded on a highway. Each story turns out to be scarier than the next one but the biggest horror strikes when some of the friends go missing. Darna Mana Hai is a ghost movie having 6 stories in one story. Some of the stories are really scary and the plot seems to have an overall compelling effect of fear.

      .content__section
        h5.content__heading
          | Raat

        p.content__text
          | When a family moves into their new house in the city, they start experiencing strange incidents around the house. Soon, they seek the help of a priest when their daughter gets possessed. The movie establishes an aura and is intense at several places. Revathi is brilliant and truly convincing in her efforts.

      .content__section
        h5.content__heading
          | 13B: Fear Has a New Address,

        p.content__text
          | Manohar, along with his family, moves into a new apartment on the 13th floor. However, their peace is disturbed by a spirit that uses the TV as a medium to communicate with them. Watch '13B' for some smart cinematography, a stylised monochrome tint and some unique editing.


      .content__section
        h5.content__heading
          | Stree

        p.content__text
          | The people of a village live under a constant fear of Stree, the spirit of a woman, who attacks men at night during the festivals. Vicky, along with his friends, decides to solve the mystery. Stree is an entertaining film. An experimental comedy, that creates an eerie atmosphere and it manages to be funny and scary at the same.


      .content__section
        h5.content__heading
          | Tumbbad

        p.content__text
          | When a family builds a shrine for Hastar, a monster who is never to be worshipped, and attempts to get their hands on his cursed wealth, they face catastrophic consequences. Tumbbad is a moody and a unique masterpiece. This one is genuinely scary.


      .content__section
        h5.content__heading
          | Pari

        p.content__text
          | A kind-hearted man tries to help a chained woman in a hut who is probably a victim of abuse. However, he soon realises that things are not as they appear to be. Pari manages to frighten you purely with its superlative performances and spine-chilling visuals.


      .content__section
        h5.content__heading
          | Bhool Bhulaiyaa

        p.content__text
          | An NRI and his wife decide to stay in his ancestral home, paying no heed to the warnings about ghosts. Soon, inexplicable occurrences cause him to call a psychiatrist to help solve the mystery. One Excellent masterpiece. This is one of the rare movies where the story can be interpreted in multiple ways! A must watch, the film is hilarious and you can simply confuse it for a hardcore comedy in the start.

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
      image: require('~/assets/images/hindi-horror.png'),
      title: 'Best Bollywood Horros',
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
