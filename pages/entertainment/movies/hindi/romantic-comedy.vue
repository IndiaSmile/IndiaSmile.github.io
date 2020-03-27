<template lang="pug">
  div.main
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}

      .content__section
        p.content__text
          | Hindi romantic comedies have given us some evergreen movies that will last a long time! The latest movies focus on breaking stereotypes and challenging society norms have gained popularity. We are seeing a culture where love literally knows no boundaries. 💖So, grab a snack and start watching from one of our top picks for Hindi Romantic comedies.

      .content__section
        h5.content__heading
          | Hum Tum

        p.content__text
          | Karan and Rhea meet on a flight and end up hating each other. Things change between them when they continue to bump into each other.Hum Tum is an extremely modern and lighthearted romantic comedy. It is very well directed, beautifully shot, and is entertaining!

      .content__section
        h5.content__heading
          | 2 States

        p.content__text
          | Coming from two very different cultures, Krish and Ananya try to convince their parents to bless their relationship before marriage.
          | 2 States is a riveting tale of journey from love to marriage. Of laughter and tears, love and longing.

      .content__section
        h5.content__heading
          | Pyaar ke Side Effects

        p.content__text
          | Sid, a commitment fearer, agrees to marry his girlfriend, Trisha. However, while negotiating other problems, they face a major hurdle when Trisha's father dislikes Sid. Rahul Bose can even pull off stupidity in an intelligent manner. Mallika Sherawat is good. An interesting watch!

      .content__section
        h5.content__heading
          | Jab We Met

        p.content__text
          | Aditya, a heartbroken business tycoon, aimlessly boards a train to escape his depressing life. He meets Geet, a bubbly Punjabi girl, and gets pulled into her crazy life.
          | Fresher than any romantic comedy you've seen , Jab We Met works because it delivers what it promises – a snug, heart-warming and relatable love story.

      .content__section
        h5.content__heading
          | Wake Up Sid

        p.content__text
          | Siddharth Mehra, a spoilt and selfish college student, learns the meaning of life and the importance of responsibility from an aspiring writer from Kolkata. Refreshing and heart-warming, Wake Up Sid will put you in the mood for love.

      .content__section
        h5.content__heading
          | Tanu Weds Manu

        p.content__text
          | Manu, an NRI doctor, comes to India in search of a bride and falls in love with Tanu. But Tanu, a fun-loving girl, has absolutely no plans of marrying him.
          | A feel-good, light-hearted entertainer with the right dose of humour, drama and romance! Some really nice music just an additional topping.

      .content__section
        h5.content__heading
          | Socha Na Tha

        p.content__text
          | Viren and Aditi reject each other when their families propose marriage. However, later they develop a bond of friendship, only to realise that they are in love.
          | Literally, who ever thought that the first outing of love specialist Imtiaz Ali is an underrated and lesser known fantastic piece of cinema.

      .content__section
        h5.content__heading
          | Masaan

        p.content__text
          | In Varanasi, Devi struggles to shake off the social stigma of pre-marital sexual relations. Masaan is arguably one of the finest Bollywood films. Belonging to the elite cadre, the film bestows upon its viewers the varied satisfaction that meaningful cinema has to offer.

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
      image: '/images/hindi-rom-com.png',
      title: 'Best Bollywood Romantic Comedies',
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
