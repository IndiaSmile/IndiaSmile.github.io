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
      image: require('~/assets/images/it-clown.jpg'),
      title: 'Best Hollywood Horrors',

      article: [
        {
          text: `Horror Films deal with our most primal nature and its fears: our nightmares, our vulnerability, our alienation, our revulsions, our terror of the unknown, our fear of death, loss of identity, and fear of sexuality. <span class="js--h">Human beings are fearing beings!💀 We fear what we can’t see, just like the widespread infection of this invisible virus that has caused fear in our lives! Let's dive in, to the best horror movies that you should definitely give a watch!👍</span>`,
        },
        {
          heading: 'Hereditary',
          text: `When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited. The movie gives a terrific and hypnotic performance as a harried mother facing down family evil in her stunning horror debut. Here is a haunted movie for the ages.`,
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Get Out',
          text: `Chris, an African-American man, decides to visit his Caucasian girlfriend's parents during a weekend getaway. Although they seem normal at first, he is not prepared to experience the horrors ahead.This movie is a skilful hybrid, blending genres into something terrifying.`,
        },
        {
          heading: 'The Cabin in The Woods',
          text: `When five college friends arrive at a remote forest cabin for a little vacation, little do they expect the horrors that await them. One by one, the youths fall victim to zombies, but there is another factor at play. Two scientists are manipulating the ghoulish goings-on, but even as the body count rises, there is yet more at work than meets the eye. Deconstructs the horror genre like never before!`,
        },
        {
          heading: 'A Quiet Place',
          text: `A family struggles for survival in a world where most humans have been killed by blind but noise-sensitive creatures. They are forced to communicate in sign language to keep the creatures at bay.This gripping, clever monster movie is one of those rare genre treats that works on a simple, unique idea and executes it perfectly that it becomes a masterpiece!`,
        },
        {
          heading: 'Midsommar',
          text: `A couple travel to Sweden to visit their friend's rural hometown for its fabled midsummer festival, but what begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult. The surest thing is that there’s nothing else like this at the movies.`,
        },
        {
          heading: 'Alien',
          text: `The crew of a spacecraft intercept a distress signal from a planet and set out to investigate it. However, to their horror, they are attacked by an alien which later invades their ship. What this movie is, is a masterpiece. It showcases the right balance of sci-fi and horror.`,
        },
        {
          heading: 'The Shining',
          text: `Jack and his family move into an isolated hotel with a violent past. Living in isolation, he begins to lose his sanity, which affects his family members. Dark, disturbing, and ever questioning, Stanley Kubrick's masterpiece, The Shining holds a special place in many hearts as their favourite horror film.`,
        },
        {
          heading: 'Suspiria!',
          text: `A young American dancer arrives in 1970s Berlin to audition for a world-renowned dance Competition. When she vaults to the role of lead dancer, the woman she replaces breaks down and accuses the company's female directors of witchcraft. This film comprises intense horror and is fostered by an uncanny goriness.`,
        },
        {
          heading: 'Gerald’s Game',
          text: `A woman accidentally kills her husband during a kinky game. Handcuffed to her bed with no hope of rescue, she begins hearing voices and seeing strange visions A truly artistic masterpiece that's thought provoking when it comes to expressing the daunting state of mental confusion, dementia and the various detrimental stages of human emotions.`,
        },
        {
          heading: 'Cube',
          text: `A group of strangers awaken to find themselves placed in a giant cube. Each one of them is gifted with a special skill and they must work together to escape an endless maze of deadly traps.This movie is great because it leaves so many questions unanswered and makes it feel like you are one of the characters. Worth a watch!`,
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
