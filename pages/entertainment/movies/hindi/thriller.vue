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
      image: require('~/assets/images/hindi-thriller.jpg'),
      title: 'Best Bollywood Thrillers',

      article: [
        {
          text: `<span class="js--h">Here are Bollywood’s best suspense thrillers that you can watch! Filled with power packed performances ensuring that the viewers stay glued to the screen anticipating the next move!</span>`,
        },
        {
          heading: 'Madras Cafe',
          text: `An Indian intelligence agent who visits Sri Lanka on a secret mission, finds himself in the middle of a civil war and amidst a conspiracy to kill the former prime minister of India. A beautiful and brilliantly executed movie! It might simply be John Abraham's best work. Excellent direction and screenplay.`,
          image: require('~/assets/images/thriller-madras-cafe.jpg'),
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Baby',
          text: `An elite team of the Indian intelligence system perpetually strives to detect and eliminate terrorists and their plots. Officer Ajay leads a team to destroy one such potentially lethal operation. It is an action packed movie made very skilfully. The acting department is very astute in essence and ability. The direction is superb with good music.`,
          image: require('~/assets/images/thriller-baby.jpg'),
        },
        {
          heading: 'Ghajini',
          text: `A successful industrialist suffering from acute short-term memory loss, is unable to remember anything after fifteen minutes. With a bunch of polaroids and tattoos on his body, he sets out to find his lover's killer. You are purely heartless if you don't cry watching this movie.`,
          image: require('~/assets/images/thriller-ghajini.jpg'),
        },
        {
          heading: 'Andhadhun',
          text: `Akash, a piano player pretending to be blind, unwittingly becomes involved in a number of problems as he witnesses the murder of a former film actor. For the better part of the film, you'll be glued to the screen, reluctant to so much as peek at your phone for fear of missing a crucial moment. A fresh edge to Bollywood’s list of thrillers.`,
          image: require('~/assets/images/thriller-andhadun.jpg'),
        },
        {
          heading: 'Race',
          text: `Two stepbrothers own a huge farm and horse racing business. When they learn that they have a common love interest, one of them tries to kill the other and inherit the insurance. The movie digs deep into the darker side of the human psyche and come up with another thrilling study of wickedness and thrill.`,
          image: require('~/assets/images/thriller-race.jpg'),
        },
        {
          heading: 'Te3n',
          text: `A 70-year-old man, seeks help from a priest and a police officer in his quest to find the people who kidnapped and killed his granddaughter. This medium paced suspense film which starts off with a strong plot, balances itself to deliver strong performances and are able to get their message across well.`,
          image: require('~/assets/images/thriller-te3n.jpg'),
        },
        {
          heading: 'Badlapur',
          text: `Raghu loses his wife and son after they become victims of a bank robbery conducted. He decides to take revenge for the murder of his family. It's a different kind of concept, not the kind you would expect from a regular Bollywood film. It does keep you on the edge, as to what would happen next! It also teaches us that revenge can be a very powerful force that can consume an individual wholly!`,
          image: require('~/assets/images/thriller-badlapur.jpg'),
        },
        {
          heading: 'Gangs of Wasseypur',
          text: `A gangster clashes with the ruthless, coal-mining kingpin who killed his father. The famous gliding camera moves, brutal action and dizzying revenge plotting, is just thrilling and makes you want it to never end!`,
          image: require('~/assets/images/thriller-gangs-of-wasseypur.jpg'),
        },
        {
          heading: 'No Smoking',
          text: `A chain-smoker visits a rehabilitation centre to quit smoking. He is released after he signs a cheque for 21 lakh rupees and is warned that his family will be killed if he dares to smoke again. No Smoking is not your traditional movie. In the truest of sense, there could not have been any better addiction movie than No Smoking.`,
          image: require('~/assets/images/thriller-no-smoking.jpg'),
        },
        {
          heading: 'Wazir',
          text: `When his daughter is killed by the terrorist he is chasing, Daanish, a cop, swears to seek revenge. He finds a confidante in Pandit, an unassuming grand master, also mourning the loss of his daughter. Wazir is more enjoyable because of the chemistry between the two male leads than anything else.`,
          image: require('~/assets/images/thriller-wazir.jpg'),
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
