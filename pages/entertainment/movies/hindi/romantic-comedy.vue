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
      image: require('~/assets/images/hindi-rom-com.jpg'),
      title: 'Best Bollywood Romantic Comedies',
      article: [
        {
          text: `Hindi romantic comedies have given us some evergreen movies that will last a long time! The latest movies focus on breaking stereotypes and challenging society norms have gained popularity. We are seeing a culture where love literally knows no boundaries. 💖So, grab a snack and start watching from one of our top picks for Hindi Romantic comedies.`,
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Hum Tum',
          text: `Karan and Rhea meet on a flight and end up hating each other. Things change between them when they continue to bump into each other.Hum Tum is an extremely modern and lighthearted romantic comedy. It is very well directed, beautifully shot, and is entertaining!`,
          image: require('~/assets/images/romcom-hum-tum.jpg'),
          rating: 7.0,
          buttons: [
            {
              type: 'Prime Video',
              link:
                'https://www.primevideo.com/detail/Hum-Tum/0N4MSOGAXQY3K2AO7O0K85PBS3?ext_vrnc=hi&ref_=dvm_pds_gen_in_as_s_gt_dsastandardadgroups',
            },
          ],
        },
        {
          heading: '2 States',
          text: `Coming from two very different cultures, Krish and Ananya try to convince their parents to bless their relationship before marriage. 2 States is a riveting tale of journey from love to marriage. Of laughter and tears, love and longing.`,
          image: require('~/assets/images/romcom-two-states.jpg'),
          rating: 6.9,
          buttons: [
            {
              type: 'Hotstar',
              link:
                'https://www.hotstar.com/in/movies/2-states/1000034502/watch?utm_source=gwa',
            },
          ],
        },
        {
          heading: 'Pyaar ke Side Effects',
          text: `Sid, a commitment fearer, agrees to marry his girlfriend, Trisha. However, while negotiating other problems, they face a major hurdle when Trisha's father dislikes Sid. Rahul Bose can even pull off stupidity in an intelligent manner. Mallika Sherawat is good. An interesting watch!`,
          image: require('~/assets/images/romcom-pyaar-ke-side-effects.jpg'),
          rating: 6.7,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/70056686',
            },
          ],
        },
        {
          heading: 'Jab We Met',
          text: `Aditya, a heartbroken business tycoon, aimlessly boards a train to escape his depressing life. He meets Geet, a bubbly Punjabi girl, and gets pulled into her crazy life. Fresher than any romantic comedy you've seen , Jab We Met works because it delivers what it promises – a snug, heart-warming and relatable love story.`,
          image: require('~/assets/images/romcom-jab-we-met.jpg'),
          rating: 7.9,
          buttons: [
            {
              type: 'Prime Video',
              link:
                'https://www.primevideo.com/detail/amzn1.dv.gti.40b44d0c-4760-3773-5e98-b63d0c79b7e2/?ref_=dvm_pds_gen_in_as_s_gt_dtites354B5|c_413991889364_m_Tsfge8he-dc_s_',
            },
          ],
        },
        {
          heading: 'Wake Up Sid',
          text: `Siddharth Mehra, a spoilt and selfish college student, learns the meaning of life and the importance of responsibility from an aspiring writer from Kolkata. Refreshing and heart-warming, Wake Up Sid will put you in the mood for love.`,
          image: require('~/assets/images/romcom-wake-up-sid.jpg'),
          rating: 7.6,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/70123119',
            },
          ],
        },
        {
          heading: 'Tanu Weds Manu',
          text: `Manu, an NRI doctor, comes to India in search of a bride and falls in love with Tanu. But Tanu, a fun-loving girl, has absolutely no plans of marrying him. A feel-good, light-hearted entertainer with the right dose of humour, drama and romance! Some really nice music just an additional topping.`,
          image: require('~/assets/images/romcom-tanu-weds-manu.jpg'),
          rating: 6.7,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/70176968',
            },
          ],
        },
        {
          heading: 'Socha Na Tha',
          text: `Viren and Aditi reject each other when their families propose marriage. However, later they develop a bond of friendship, only to realise that they are in love. Literally, who ever thought that the first outing of love specialist Imtiaz Ali is an underrated and lesser known fantastic piece of cinema.`,
          image: require('~/assets/images/romcom-socha-na-tha.jpg'),
          rating: 7.5,
          buttons: [
            {
              type: 'Prime Video',
              link:
                'https://www.primevideo.com/detail/0OBBOGV8P5V52OPEXPE43BYFDH/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07L7BMY63&qid=1585482359',
            },
          ],
        },
        {
          heading: 'Masaan',
          text: `In Varanasi, Devi struggles to shake off the social stigma of pre-marital sexual relations. Masaan is arguably one of the finest Bollywood films. Belonging to the elite cadre, the film bestows upon its viewers the varied satisfaction that meaningful cinema has to offer.`,
          image: require('~/assets/images/romcom-masaan.jpg'),
          rating: 8.1,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/80059331',
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
