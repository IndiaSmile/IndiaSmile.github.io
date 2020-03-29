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
      image: require('~/assets/images/english-crime.jpg'),
      title: 'Best Hollywood Crimes',

      article: [
        {
          text: `Who doesn’t love imagining a world without law and order? Kind of like imagining yourself on the streets at this time.👅 The deceit, the lies, the panic and the darkness! Crime movies are developed around the sinister actions of criminals, gangsters, underworld figures, or ruthless hoodlums who operate outside the law, stealing and violently murdering their way through life. Such movies take us deep into the minds of criminals, and how human nature is inclined to be ruthless without law and order.✊`,
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'GoodFellas',
          text: `Young Henry begins the climb from being a petty criminal to a gangster on the mean streets of New York. This classic tale of mob life in New York City is a stunning look at the ugliness of a culture that’s been glamorized and romanticised in countless other films`,
        },
        {
          heading: 'Pulp Fiction',
          text: `In the realm of the underworld, a series of incidents locks the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals. Brilliantly written and weirdly cool, this makes a good case for most quotable crime movie of all time`,
        },
        {
          heading: 'The Irishman',
          text: `In the 1950s, a truck driver gets involved with Russell Bufalino and his Pennsylvania crime family. As He climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa - a powerful man tied to organised crime. A magisterial film in his long and masterful career, Martin Scorsese's crime epic is a trip of the mind. It portrays both greatness and loss.`,
        },
        {
          heading: 'Kiss Kiss Bang Bang',
          text: `A thief, pretending to be an actor, gets involved in a murder investigation in Hollywood when he befriends a private eye. He soon draws in a struggling actress in the investigation. Bold and breathless, this trippy and hilarious know-it-all crime thriller will have you reliving its moments for days, but you’ll still be inclined to figure the actual story.`,
        },
        {
          heading: 'Zodiac',
          text: `A cartoonist by profession, finds himself obsessively thinking about the Zodiac killer. He uses his puzzle-solving abilities to get closer to revealing the identity of the killer. A quiet, dialogue-driven thriller that delivers gut-wrenching anxiety scene by scene!`,
        },
        {
          heading: 'Lock Stock and Two Smoking Barrel',
          text: `Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster and loses, after which he is given a week to pay back 500,000 pounds.This is an energetic, clever crime movie that looks into various little pockets of underworld life -- sex, gambling, drugs, and hired thugs -- and uses them all against one another.`,
        },
        {
          heading: 'Sicario',
          text: `During a dangerous mission to stop a drug cartel operating between the US and Mexico, an FBI agent, is exposed to some harsh realities. Sicario asks us questions of morality! How far is too far? To fight such monstrous evil, is it necessary to become evil ourselves?`,
        },
        {
          heading: 'Layer Cake',
          text: `A successful drug dealer's retirement plans come to a halt when he is forced to rescue the daughter of a trade magnate. At the same time, he must also retrieve ecstasy pills worth two million pounds. This movie is a brilliant product of its time, and while it is enjoyable, it stands out!`,
        },
        {
          heading: 'Nightcrawler',
          text: `Louis Bloom, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them. Dark, satirical and wildly thrilling, with a career-peak turn from Jake Gyllenhaal. It’s a powerhouse of thrill!`,
        },
        {
          heading: 'Baby Driver',
          text: `Baby is forced to partake in a heist, threatened to hurt his girlfriend if he refuses. The plan goes haywire when their arms dealers turn out to be undercover officers An awe-inspiring piece of filmmaking from Edgar Wright. Sweet, funny and utterly original, you probably won’t see a film like it anywhere else.`,
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
