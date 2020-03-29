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
    StreamGuide,
    ContentButtons,
  },

  data() {
    return {
      image: require('~/assets/images/hindi-comedy.jpg'),
      title: 'Best Bollywood Comedies',
      article: [
        {
          text: `Every year bollywood churns out hundreds of Masala movies, kind of India’s term for comedy movies! They are based on opposite sex interactions, old age hilarity, and foolishness of the youth! Don’t think twice, just pick a movie from the list and laugh your days of isolation off! 🤣`,
        },
        {
          heading: 'Hera Pheri',
          text: `Two tenants and a landlord in desperate need of money, chance upon a ransom call via a cross connection. They develop a plan to claim the ransom for themselves. One of the best movies ever! It's simply hilarious. Everything about the movie is perfect! Specially recommended :p`,
          image: require('~/assets/images/comedy-hera-pheri.jpg'),
          rating: 8.2,
          buttons: [
            {
              type: 'Prime',
              link:
                'https://www.primevideo.com/detail/amzn1.dv.gti.ccb4bb1e-3252-0cbc-c0ac-f1dcc5ad0ff1/?ref_=dvm_pds_gen_in_as_s_gt_dtites367E3|c_413280971469_m_QLFZNXY9-dc_s_',
            },
          ],
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Dhamaal',
          text: `Four lazy friends, embark on a race to find a hidden treasure in Goa, unaware that their plans will soon be foiled by the local Inspector. The highpoint of the film isn’t the script which is a foregone tale. Rather, it is the chemistry between the bunch of foolish boys! Hilarious!`,
          image: require('~/assets/images/comedy-dhamaal.jpg'),
          rating: 7.3,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/watch/81213888?source=35',
            },
          ],
        },
        {
          heading: '3 Idiots',
          text: `In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive. Well, what can we say, a beautiful mix of humour, love, kindness, and excellence! One of Bollywood’s best movies.`,
          image: require('~/assets/images/comedy-3-idiots.jpg'),
          rating: 8.4,
          buttons: [
            {
              type: 'Prime',
              link:
                'https://www.primevideo.com/detail/amzn1.dv.gti.6ab5ef5d-dd32-c5ab-3a8f-0aff6123c065/?ref_=dvm_pds_gen_in_as_s_gt_dtites275B2|c_413993736164_m_ZkKj4sbV-dc_s_',
            },
          ],
        },
        {
          heading: 'Munna Bhai MBBS',
          text: `Munna is a goon who sets out to fulfil his father's dream of becoming a doctor. With some help from his ally, Circuit, he enrols himself in a medical college and drives Dr Asthana up the wall. Amazing plot, beautiful direction and superb acting performances! Sanjay Dutt made this movie entirely his own!`,
          image: require('~/assets/images/comedy-munnabhai.jpg'),
          rating: 8.1,
          buttons: [
            {
              type: 'Prime',
              link:
                'https://www.primevideo.com/detail/amzn1.dv.gti.0eb620e0-09e4-053f-0dbe-9e498c8a1017/?ref_=dvm_pds_gen_in_as_s_gt_dtites693B1|c_413940616033_m_zbF6YGwQ-dc_s_',
            },
          ],
        },
        {
          heading: 'Welcome',
          text: `Two thugs, Uday and Majnu, meet Rajeev, who belongs to a respectable family, and want to get their sister married to him. A series of funny situations occur when Rajeev's uncle opposes the marriage. We love this film! Hands on, one of the best comedy film you'll ever watch. Also, you can’t get tired of watching this movie!`,
          image: require('~/assets/images/comedy-welcome.jpg'),
          rating: 6.8,
          message: 'Available on Indian streaming platforms',
        },
        {
          heading: 'Delhi Belly',
          text: `Three strugglers who are also roommates, unknowingly become the target of a powerful gangster when they misplace his expensive diamonds. As a comedy, Delhi Belly is such a refreshing change from the run-of-the-mill Hindi comedy.`,
          image: require('~/assets/images/comedy-delhi-belly.jpg'),
          rating: 7.5,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/70152959',
            },
          ],
        },
        {
          heading: 'Andaaz Apna Apna',
          text: `Amar and Prem, who belong to middle-class families, compete to win over Raveena, a millionaire's daughter. Along the way, they run into a local gangster who turns their lives upside down. Andaz Apna Apna is a superb entertainer. For a comedy film, it could not have been better. Watch it with your family and you'll love it to bits.`,
          image: require('~/assets/images/comdey-andaaz-apna-apna.jpg'),
          rating: 8.2,
          buttons: [
            {
              type: 'Prime',
              link:
                'https://www.primevideo.com/detail/amzn1.dv.gti.f8b3c8ac-b2ec-6b0a-74f0-6732031303a4/?ref_=dvm_pds_gen_in_as_s_gt_dtites177B1|c_413994272633_m_3SyTimrH-dc_s_',
            },
          ],
        },
        {
          heading: 'Garam Masala',
          text: `Shyam and Makarand, two photographer friends, like to flirt with women constantly. After a trip abroad, Shyam decides to disrupt Makarand's life when he sees him enjoying the company of three ladies. Garam Masala rests on a thin plot, but it works because the gags and punches in the enterprise are truly funny.`,
          image: require('~/assets/images/comedy-garam-masala.jpg'),
          rating: 6.7,
          buttons: [
            {
              type: 'Hotstar',
              link: 'https://www.hotstar.com/in/movies/garam-masala/1000100257',
            },
          ],
        },
        {
          heading: 'Hungama',
          text: `A millionaire businessman living in a village decides to move to the city with his wife. They soon get into a case of mistaken identity that results in comical situations. Akshaye Khanna does a very good job in this movie! They provide quite a few scenes with hard laughs, but the best one is Paresh Rawal of course. He delivers another brilliant role just like in Hera Pheri.`,
          image: require('~/assets/images/comedy-hangama.jpg'),
          rating: 7.5,
          buttons: [
            {
              type: 'Hotstar',
              link: 'https://www.hotstar.com/in/movies/hungama/1000050766',
            },
          ],
        },
        {
          heading: 'Bheja Fry',
          text: `Ranjeet invites trouble when he welcomes Bharat, an aspiring singer, to his house. However, Bharat realises the mess he has created and tries to amend things for Ranjeet, but causes more damage. Bheja Fry is a movie that will irritate you from laughing too much unnecessarily.`,
          image: require('~/assets/images/comedy-bheja-fry.jpg'),
          rating: 7.6,
          message: 'Available on Indian streaming platforms',
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
