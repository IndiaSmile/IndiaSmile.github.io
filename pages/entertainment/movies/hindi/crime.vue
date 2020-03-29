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
      image: require('~/assets/images/hindi-crime.jpg'),
      title: 'Best Bollywood Crimes',

      article: [
        {
          text: `Bollywood has had a history of portraying criminal character psychology really well. 🙏 The use of suspenseful plots and the ruthlessness of India’s underworld has made us witness some great performances and mind bending twists. Let’s go through some of the best crime movies which you can choose from, to enjoy at home!`,
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Kahaani',
          text: `A pregnant woman travels to Kolkata from London to search for her missing husband. When all clues lead to a dead end, she realises that there is more than what meets the eye. The story totally grips you and leaves you at a dramatic high. Vidya Balan is amazing as always!`,
          rating: 8.1,
          image: require('~/assets/images/crime-kahani.jpg'),
        },
        {
          heading: 'A Wednesday',
          text: `A retired police commissioner recounts the most memorable case of his career wherein he was informed about a bomb scare in Mumbai by an ordinary commoner. Now this movie comes as a complete surprise and an extremely pleasant surprise I must say! Newer stories are slowly finding their way into cinema. A Wednesday is an intelligent diatribe against terrorism and a must watch!`,
          rating: 8.1,
          image: require('~/assets/images/crime-a-wednesday.jpg'),
        },
        {
          heading: 'Drishyam',
          text: `When the disappearance of a policewoman's son threatens to ruin Vijay’s family, he leaves no stone unturned in order to shield his family. A suspenseful drama with a nail-biting finish, it holds the viewer by the eyeballs till its' engaging climax.`,
          rating: 8.2,
          image: require('~/assets/images/crime-drishyam.jpg'),
        },
        {
          heading: 'Special 26',
          text: `A team of tricksters pose as CBI officers and conduct raids to rob politicians and businessmen of their black money. With the real CBI on their trail, they decide to pull off their biggest robbery. The film grips, excites and climaxes too! Catch it for a pure cinematic journey.`,
          rating: 8.0,
          image: require('~/assets/images/crime-special-26.jpg'),
        },
        {
          heading: 'Omkara',
          text: `Langda dreams of becoming Omkara's successor after the latter wins the election. But when Omkara appoints Kesu as his lieutenant, Langda feels betrayed and plots revenge. An extraordinary movie! The Actors were praised for their performances and still today, is an interesting watch.`,
          rating: 8.1,
          image: require('~/assets/images/crime-omkara.jpg'),
        },
        {
          heading: 'Raees',
          text: `Threat lurks over Raees Alam and his illicit business after the ACP decides to get the better of him. In order to survive and keep his trade thriving, Raees must overcome this. Shah Rukh Khan has never looked better, he is full of fury and for once, isn’t spreading his arms, but breaking others!`,
          rating: 6.8,
          image: require('~/assets/images/crime-raees.jpg'),
        },
        {
          heading: 'Satya',
          text: `Durga's brother is murdered in a gang war, turning him into a revenge-seeking man. Now, his ex-girlfriends cop husband is behind him. This movie has achieved a cult status, and is cited as one of the best Indian gangster films for its realistic portrayal of violence.`,
          rating: 8.2,
          image: require('~/assets/images/crime-satya.jpg'),
        },
        {
          heading: 'Sarkar',
          text: `When a powerful gangster is framed for murder, his son steps up to protect his legacy. A gripping tale, this is Ram Gopal Varma at his finest!`,
          rating: 7.6,
          image: require('~/assets/images/crime-sarkar.jpg'),
        },
        {
          heading: 'Ab Tak Chhappan',
          text: `Sadhu, an encounter specialist, is armed with a personal vendetta to hunt and kill the gang responsible for his wife's death. Have to say, excellent camera work and great direction!`,
          rating: 7.9,
          image: require('~/assets/images/crime-ab-tak-chhappan.jpg'),
        },
        {
          heading: 'Shootout at Lokhandwala',
          text: `An experienced policeman, Khan, sets out for a shoot-out of gangsters in a residential locality of Mumbai.Little does he know that this will lead to his own integrity being questioned. Based on a true story, Shootout at Lokhandwala is a fantastic movie that is full of violence and naughty action.`,
          rating: 7.1,
          image: require('~/assets/images/crime-shootout-at-lokhandwala.jpg'),
        },
        {
          heading: 'Paan Singh Tomar',
          text: `Paan Singh Tomar, an athlete, is a gold medallist at the Indian National Games seven times in a row. He is forced to become a dacoit when his mother is murdered and the police don't take any action. The movie works because Irfan makes Paan Singh Tomar come alive as an athlete, as a husband and as a dacoit. This is a flawless performance.`,
          rating: 8.2,
          image: require('~/assets/images/crime-paan-singh-tomar.jpg'),
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
