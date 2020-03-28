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
      image: require('~/assets/images/english-comedy.png'),
      title: 'Best Hollywood Comedies',

      article: [
        {
          text: `Nothing better than to laugh yourself out till half the blood vessels of your face start popping out! Just kidding.😄 How can you not love comedy? It is the perfect stress buster for any situation especially during quarantine. <span class="js--h">Enjoy this list of fresh and heart lightening comedies that will help you pass your day with a smile, rather than utter boredom!</span>`,
        },
        {
          heading: 'Anchorman: The Legend of Ron Burgundy',
          text: `A chauvinistic host of a top-rated American news programme is threatened with the arrival of an ambitious female reporter which starts a battle of the sexes. Filled with inspired silliness and quotable lines, though Anchorman isn't the most consistent comedy in the world, it hosts a great lead performance from Will Ferrell and a talented ensemble cast.`,
        },
        {
          heading: 'Borat',
          text: `Borat, a Kazakh resident, travels to the USA to make a documentary on the country. While on his mission, he learns that the USA is the same as his own country in many ways. The brilliance of “Borat” is that its comedy is pitiless but simultaneously brainy. It seems absurd and is simultaneously outrageous as well as gross! One guarantee, you will laugh!`,
        },
        {
          heading: 'The Big Lebowski',
          text: `Two goons mistake Lebowski for a millionaire urinating on his rug. Trying to recompense his rug from the wealthy Lebowski, he gets involved in a kidnapping case. This masterpiece is sleek and sharp, with a slight dose of menace and mystery! Indulge into a wild and funny as hell ride through Los Angeles' underworld`,
        },
        {
          heading: 'Game Night',
          text: `Max and Annie set out to solve the mystery and find Brooks, Max's brother, who mysteriously disappeared during their game night. Game Night meshes together a twist-filled plot, outlandish gags and a clever fusion of visuals. Hosts awesome dialogues, outstanding camerawork as well as compelling direction. A must watch!`,
        },
        {
          heading: 'In Bruges',
          text: `Two hitmen get stuck in Bruges, after an unsuccessful mission. The situation becomes complicated when their boss asks one to kill the other. It's a smart and funny gangster film, with some high powered acting by Colin Farrell as the conscience-stricken, suicidal hitman who has killed a small boy on his first assignment`,
        },
        {
          heading: 'Burn After Reading',
          text: `Two gym employees chance upon a CD containing the memoirs of a CIA agent. They then decide to sell it back to him, failing which they plan to sell it to the Russian embassy.The self amusing comedy has a tricky plot, a set visual style and little heart. Wickedly funny and outrageous!`,
        },
        {
          heading: 'The Grand Budapest Hotel',
          text: `A concierge, is wrongly framed for murder at the Grand Budapest Hotel. In the process of proving his innocence, he befriends a lobby boy This movie makes a marvellous mockery of history, turning its horrors into a series of graceful jokes and hilarious instances!`,
        },
        {
          heading: 'Shaun of the Dead',
          text: `Shaun is a salesman whose life has no direction. However, his uneventful life takes a sudden turn when he has to single handedly deal with an entire community of zombies A cult favourite for sure! Shaun of the Dead cleverly balances scares and witty satire, making for a bloody good zombie movie with some good old fashioned comedy. The trilogy is an anthology series of films directed by Edgar Wright, consists of Shaun of the dead (2004), Hot Fuzz(2007), and The World’s End(2013). We suggest giving each one a look!`,
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
