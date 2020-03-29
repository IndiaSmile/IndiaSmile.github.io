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
      image: require('~/assets/images/hindi-horror.jpg'),
      title: 'Best Bollywood Horros',
      article: [
        {
          text: `Bollywood Horror has come a long way, initial years failed to deliver good content, but slowly the quality of movies have become better! Unexpected plots have become observable! People have started to appreciate mysterious content churned out by Indian directors and the trend looks good so far! This list has some really interesting mentions you should check out!👇`,
        },
        {
          heading: '1920',
          text: `Arjun falls in love with Lisa and abandons his family as well as faith for her. They move to a bungalow, but when Lisa gets possessed by a demonic spirit, Arjun tries his best to save her. Second half of the movie is intense and the movie comprises of some truly artistic scenes!`,
          image: require('~/assets/images/horror-1920.jpg'),
          rating: 6.4,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/70117674',
            },
          ],
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Bhoot',
          text: `A bereaved shipping officer must save a girl he believes is real, on a stranded, unmanned haunted ship! While the film’s runtime is short, scenes are made as such so as to leave you waiting for the big reveal.`,
          image: require('~/assets/images/horror-bhoot.jpg'),
          rating: 6.2,
          message: 'Available on Indian streaming platforms',
        },
        {
          heading: 'Raaz',
          text: `Sanjana and Aditya go to Ooty for a holiday to save their unsteady marriage. However, Sanjana is haunted by a spirit who reveals some dark secrets about Aditya and his past. Raaz is an interesting mixture of thriller and romance. A good watch!`,
          image: require('~/assets/images/horror-raaz.jpg'),
          rating: 6.5,
          buttons: [
            {
              type: 'Prime Video',
              link: 'https://www.amazon.com/Raaz-Dino-Morea/dp/B06WW3LPD8',
            },
          ],
        },
        {
          heading: 'Darna Mana Hai',
          text: `Six friends narrate spooky tales to one another while stranded on a highway. Each story turns out to be scarier than the next one but the biggest horror strikes when some of the friends go missing. Darna Mana Hai is a ghost movie having 6 stories in one story. Some of the stories are really scary and the plot seems to have an overall compelling effect of fear.`,
          image: require('~/assets/images/horror-darna-mana-hai.jpg'),
          rating: 6.3,
          buttons: [
            {
              type: 'Prime Video',
              link:
                'https://www.primevideo.com/detail/amzn1.dv.gti.b8b4041b-edd6-49f6-9a02-19c550f9deea/?ref_=dvm_pds_gen_in_as_s_gt_dtites1690B3|c_413926075644_m_XxHIU7ZL-dc_s_',
            },
          ],
        },
        {
          heading: 'Raat',
          text: `When a family moves into their new house in the city, they start experiencing strange incidents around the house. Soon, they seek the help of a priest when their daughter gets possessed. The movie establishes an aura and is intense at several places. Revathi is brilliant and truly convincing in her efforts.`,
          image: require('~/assets/images/horror-raat.jpg'),
          rating: 7.1,
          message: 'Available on Indian streaming platforms',
        },
        {
          heading: '13B: Fear Has a New Address',
          text: `Manohar, along with his family, moves into a new apartment on the 13th floor. However, their peace is disturbed by a spirit that uses the TV as a medium to communicate with them. Watch '13B' for some smart cinematography, a stylised monochrome tint and some unique editing.`,
          image: require('~/assets/images/horror-13-b.jpg'),
          rating: 6.3,
          buttons: [
            {
              type: 'hotstar',
              link: 'https://www.hotstar.com/in/movies/13b/1000214941',
            },
          ],
        },
        {
          heading: 'Stree',
          text: `The people of a village live under a constant fear of Stree, the spirit of a woman, who attacks men at night during the festivals. Vicky, along with his friends, decides to solve the mystery. Stree is an entertaining film. An experimental comedy, that creates an eerie atmosphere and it manages to be funny and scary at the same.`,
          image: require('~/assets/images/horror-stree.jpg'),
          rating: 7.6,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/81113921',
            },
          ],
        },
        {
          heading: 'Tumbbad',
          text: `When a family builds a shrine for Hastar, a monster who is never to be worshipped, and attempts to get their hands on his cursed wealth, they face catastrophic consequences. Tumbbad is a moody and a unique masterpiece. This one is genuinely scary.`,
          image: require('~/assets/images/horror-tumbbad.jpg'),
          rating: 8.3,
          buttons: [
            {
              type: 'Prime Video',
              link:
                'https://www.primevideo.com/detail/Tumbbad/0JP2YUWYYUI1Q2NN73XBXXXC2T?ext_vrnc=hi&ref_=dvm_pds_gen_in_as_s_gt_dsastandardadgroups',
            },
          ],
        },
        {
          heading: 'Pari',
          text: `A kind-hearted man tries to help a chained woman in a hut who is probably a victim of abuse. However, he soon realises that things are not as they appear to be. Pari manages to frighten you purely with its superlative performances and spine-chilling visuals.`,
          image: require('~/assets/images/horror-pari.jpg'),
          rating: 6.6,
          buttons: [
            {
              type: 'Prime Video',
              link:
                'https://www.primevideo.com/detail/0IV864SLW83K2KCA2LWGBULRC6/?ref_=dvm_pds_gen_in_as_s_gt_gobig98desktop&ext_vrnc=hi|c_362587654941_m_qOZ8LHIi-dc_s_',
            },
          ],
        },
        {
          heading: 'Bhool Bhulaiyaa',
          text: `An NRI and his wife decide to stay in his ancestral home, paying no heed to the warnings about ghosts. Soon, inexplicable occurrences cause him to call a psychiatrist to help solve the mystery. One Excellent masterpiece. This is one of the rare movies where the story can be interpreted in multiple ways! A must watch, the film is hilarious and you can simply confuse it for a hardcore comedy in the start.`,
          image: require('~/assets/images/horror-bhool-bhulaiya.jpg'),
          rating: 7.3,
          buttons: [
            {
              type: 'Netflix',
              link:
                'https://www.primevideo.com/region/eu/detail/0N4MPYB5ZMT5FTXJWWKQU4KRDZ/ref_=dvm_pds_gen_in_as_s_gt_top1000dsad412?ext_vrnc=hi%7Cc_414533225917_m_pAec9xcy-dc_s_',
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
