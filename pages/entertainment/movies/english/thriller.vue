<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      StreamGuide
      .content__section(v-for="(data, index) in article" :key="index")
        Sharer(v-if="data.custom === 'Sharer'" :title="title")

        template(v-if="!data.custom")
          .content__header
            h5.content__heading(v-if="!!data.heading") {{ data.heading }}
            .content__rating(v-if="data.rating")
              b-icon(icon="star" size="is-small")
              | {{ data.rating }}

          img.content__image(v-if="!!data.image" :src="data.image")

          p.content__text(v-if="typeof data.text === 'string'" v-html="data.text")

          ContentButtons(v-if="data.buttons" :buttons="data.buttons")
</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import ContentButtons from '~/components/ContentButtons'
import StreamGuide from '~/components/StreamGuide'

export default {
  name: 'HomePage',
  components: {
    ArticleHero,
    ContentButtons,
    StreamGuide,
  },

  data() {
    return {
      image: require('~/assets/images/english-thriller.jpg'),
      title: 'Best Hollywood Thrillers',
      article: [
        {
          text: `We would like to present our readers with the best suspenseful movies that will heighten your feelings of thrill and excitement! This quarantine period, delve into the foreshadow of dreadful secrets, unsettled issues, buried traumas and shocking revelations. Indulge into the world of unexpected turns, mishappenings and unexplainable moments!`,
        },
        {
          heading: 'The Silence Of The Lambs',
          text: `An FBI agent seeks help from a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims. Psychological supplemented with a gripping tale which inspires suspense amongst its watchers. One of the best suspense thrillers of this decade!`,
          rating: 8.6,
          image: require('~/assets/images/thriller-silence-of-the-lambs.jpg'),
          buttons: [
            {
              type: 'Google',
              link:
                'https://play.google.com/store/movies/details/The_Silence_of_the_Lambs?id=sHqrhjNCmTo&hl=en',
            },
          ],
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Seven',
          text: `A dark and gripping thriller which saves its most shocking revelations for the final moments of the movie! Based on two detectives, who try to run down a gruesome serial killer who bases his murders on the seven deadly sins. Will surely get your heart pumping!`,
          rating: 8.6,
          image: require('~/assets/images/thriller-seven.jpg'),
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/950149',
            },
          ],
        },
        {
          heading: 'A Simple Favor',
          text: `A stylish post-modern film noir directed by Paul Feig, based around Stephanie who seeks to uncover the truth behind her best friend’s sudden disappearance from their small town. It is a thriller, carries suspense and is packed with an uneasy but mild humour at its core!`,
          rating: 6.8,
          image: require('~/assets/images/thriller-a-simple-favor.jpg'),
          buttons: [
            {
              type: 'Google',
              link:
                'https://play.google.com/store/movies/details/A_Simple_Favor?id=7A59F3987EFA280AMV&hl=en',
            },
          ],
        },
        {
          heading: 'Shutter Island',
          text: `Two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place. Oh what can we say about this classic! The film's primary effect is on the senses. Everything is brought together into a disturbing pool of secrets.`,
          rating: 8.1,
          image: require('~/assets/images/thriller-shutter-island.jpg'),
          buttons: [
            {
              type: 'Netflix',
              link: 'https://foo.com',
            },
            {
              type: 'Prime',
              link: 'https://baz.com',
            },
          ],
        },
        {
          heading: 'No Country for Old Men',
          text: `A hunter's life takes a drastic turn when he is pursued by a psychopathic killer who wants the money he acquired! Powerful and moving performances from the cast, having won an Oscar for the best film!`,
          rating: 8.1,
          image: require('~/assets/images/thriller-no-country.jpg'),
          buttons: [
            {
              type: 'Netflix',
              link: 'https://foo.com',
            },
            {
              type: 'Prime',
              link: 'https://baz.com',
            },
          ],
        },
        {
          heading: 'Oldboy (2003, Korean)',
          text: `A man, held captive for no apparent reason for years, is given a cell phone, money and expensive clothes and released. Unless he finds out the identity of his captor, an even worse fate awaits him. This one is for the strong hearted and can be considered a real mind bender!`,
          rating: 8.4,
          image: require('~/assets/images/thriller-oldboy.jpg'),
          buttons: [
            {
              type: 'Netflix',
              link: 'https://foo.com',
            },
            {
              type: 'Prime',
              link: 'https://baz.com',
            },
          ],
        },
        {
          heading: 'Mystic River',
          text: `After the death of a girl, a police officer, investigates her murder which leads him to a crime that took place twenty-five years ago. A back in time thriller with an unprecedented set of events that turn your mind topsy turvy in search for the truth!`,
          rating: 7.9,
          image: require('~/assets/images/thriller-mystic-river.jpg'),
          buttons: [
            {
              type: 'Netflix',
              link: 'https://foo.com',
            },
            {
              type: 'Prime',
              link: 'https://baz.com',
            },
          ],
        },
        {
          heading: 'Gone Girl',
          text: `Nick discovers that the entire media focus has shifted on him when his wife disappears on the day of their fifth wedding anniversary. This is a sick film, and also brilliant.`,
          rating: 8.1,
          image: require('~/assets/images/thriller-gone-girl.jpg'),
          buttons: [
            {
              type: 'Netflix',
              link: 'https://foo.com',
            },
            {
              type: 'Prime',
              link: 'https://baz.com',
            },
          ],
        },
        {
          heading: 'Memento',
          text: `An insurance investigator suffers from anterograde amnesia and uses notes and tattoos to hunt for the man he thinks killed his wife, which is the last thing he remembers! One of the most original and unique thrillers that Hollywood has seen in its prime!`,
          rating: 8.4,
          image: require('~/assets/images/thriller-momento.jpg'),
          buttons: [
            {
              type: 'Netflix',
              link: 'https://foo.com',
            },
            {
              type: 'Prime',
              link: 'https://baz.com',
            },
          ],
        },
        {
          heading: 'The Gift',
          text: `A married couple run into an old acquaintance. Things take a turn when he begins to drop in unannounced at their house and inundates them with mysterious gifts. This resourceful and edgy thriller marks another string in the talented director Joel Edgerton’s palette.`,
          rating: 7,
          image: require('~/assets/images/thriller-the-gift.jpg'),
          buttons: [
            {
              type: 'Netflix',
              link: 'https://foo.com',
            },
            {
              type: 'Prime',
              link: 'https://baz.com',
            },
          ],
        },
        {
          heading: 'Bird Box',
          text: `When a mysterious force decimates the world, only one thing is certain, if you see it, you die. Facing the unknown, Malorie finds love, hope and a new beginning and must flee with her two children down a treacherous river to the one place left that may offer sanctuary. Sandra Bullock stars and finds praise for her performance in this thrilling contest of life.`,
          rating: 6.6,
          image: require('~/assets/images/thriller-bird-box.jpg'),
          buttons: [
            {
              type: 'Netflix',
              link: 'https://foo.com',
            },
            {
              type: 'Prime',
              link: 'https://baz.com',
            },
          ],
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
