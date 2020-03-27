<template lang="pug">
  div.main
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}

      .content__section
        p.content__text
          | Every year bollywood churns out hundreds of Masala movies, kind of India’s term for comedy movies! They are based on opposite sex interactions, old age hilarity, and foolishness of the youth! Don’t think twice, just pick a movie from the list and laugh your days of isolation off!
          | 🤣

      .content__section
        h5.content__heading
          | Hera Pheri

        p.content__text
          | Two tenants and a landlord in desperate need of money, chance upon a ransom call via a cross connection. They develop a plan to claim the ransom for themselves. One of the best movies ever! It's simply hilarious. Everything about the movie is perfect! Specially recommended :p

      .content__section
        h5.content__heading
          | Dhamaal

        p.content__text
          | Four lazy friends, embark on a race to find a hidden treasure in Goa, unaware that their plans will soon be foiled by the local Inspector.
          | The highpoint of the film isn’t the script which is a foregone tale. Rather, it is the chemistry between the bunch of foolish boys! Hilarious!

      .content__section
        h5.content__heading
          | 3 Idiots

        p.content__text
          | In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive. Well, what can we say, a beautiful mix of humour, love, kindness, and excellence! One of Bollywood’s best movies.

      .content__section
        h5.content__heading
          | Munna Bhai MBBS

        p.content__text
          | Munna is a goon who sets out to fulfil his father's dream of becoming a doctor. With some help from his ally, Circuit, he enrols himself in a medical college and drives Dr Asthana up the wall. Amazing plot, beautiful direction and superb acting performances!  Sanjay Dutt made this movie entirely his own!

      .content__section
        h5.content__heading
          | Welcome

        p.content__text
          | Two thugs, Uday and Majnu, meet Rajeev, who belongs to a respectable family, and want to get their sister married to him. A series of funny situations occur when Rajeev's uncle opposes the marriage. We love this film! Hands on, one of the best comedy film you'll ever watch. Also, you can’t get tired of watching this movie!

      .content__section
        h5.content__heading
          | Delhi Belly

        p.content__text
          | Three strugglers who are also roommates, unknowingly become the target of a powerful gangster when they misplace his expensive diamonds. As a comedy, Delhi Belly is such a refreshing change from the run-of-the-mill Hindi comedy.

      .content__section
        h5.content__heading
          | Andaaz Apna Apna

        p.content__text
          | Amar and Prem, who belong to middle-class families, compete to win over Raveena, a millionaire's daughter. Along the way, they run into a local gangster who turns their lives upside down. Andaz Apna Apna is a superb entertainer. For a comedy film, it could not have been better. Watch it with your family and you'll love it to bits.

      .content__section
        h5.content__heading
          | Garam Masala

        p.content__text
          | Shyam and Makarand, two photographer friends, like to flirt with women constantly. After a trip abroad, Shyam decides to disrupt Makarand's life when he sees him enjoying the company of three ladies. Garam Masala rests on a thin plot, but it works because the gags and punches in the enterprise are truly funny.

      .content__section
        h5.content__heading
          | Hungama

        p.content__text
          | A millionaire businessman living in a village decides to move to the city with his wife. They soon get into a case of mistaken identity that results in comical situations. Akshaye Khanna does a very good job in this movie! They provide quite a few scenes with hard laughs, but the best one is Paresh Rawal of course. He delivers another brilliant role just like in Hera Pheri.

      .content__section
        h5.content__heading
          | Bheja Fry

        p.content__text
          | Ranjeet invites trouble when he welcomes Bharat, an aspiring singer, to his house. However, Bharat realises the mess he has created and tries to amend things for Ranjeet, but causes more damage. Bheja Fry is a movie that will irritate you from laughing too much unnecessarily.

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
      image: '/images/hindi-comedy.png',
      title: 'Best Bollywood Comedies',
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
