<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      StreamGuide

      .content__section(v-for="(data, index) in article" :key="index")
        Sharer(v-if="data.custom === 'Sharer'" :title="title")

        .content__header
          h5.content__heading(v-if="!!data.heading") {{ data.heading }}
          .content__rating(v-if="data.rating")
            b-icon(icon="star" size="is-small")
            | {{ data.rating }}

        p.content__text(v-if="typeof data.text === 'string'" v-html="data.text")
        div(v-else-if="typeof data.text === 'object'")
          p.content__text(v-for="(text, idx) in data.text" :key="idx" v-html="text")

      Sharer(:title="title")
</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import StreamGuide from '~/components/StreamGuide'

export default {
  name: 'HomePage',
  components: {
    ArticleHero,
    StreamGuide,
  },

  data() {
    return {
      image: require('~/assets/images/kuchh-rang-pyaar-ke.jpg?resize'),
      title: 'Hindi TV Shows',

      article: [
        {
          text: `We have been lucky enough to see some amazing works of creativity and passion in the last few years. Indian writers are coming up with beautiful stories and plots which are winning hearts all over the world 💞 .With all this free time, we recommend our readers to try these highly rated Hindi TV shows. With breathtaking tales of emotion, dangerous aura of crime and the thrill of love, indulge into these with your loved ones.`,
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'The Family Man',
          text: `Srikant Tiwari is a middle-class man who also is a world-class spy. He tries to balance his family time with the demands of the highly secretive Intelligence Agency that he is working for 🕵️‍♂️. A binge worthy gripping thriller. The plot and execution is so perfect that countless fans watched this entire series in one go.`,
          rating: 8.6,
          buttons: [
            {
              type: 'Prime',
              link:
                'https://www.primevideo.com/detail/0S3QYI59BAEI5KVLHCKSR91YGD/?ref_=dvm_pds_gen_in_as_s_gt_familymantrailer&ext_vrnc=hi%7Cc_396601753380_m_-dc_s_&gclid=Cj0KCQjwsYb0BRCOARIsAHbLPhHOb086wDbnxY9fHLvjYafFJwdMC0nh4b8aduaE0QdjwC2SfxhKnrMaAs9REALw_wcB',
            },
          ],
        },
        {
          heading: 'Sacred Games',
          text: `Criminal overlord Ganesh Gaitonde has arrived. Amidst the chaos he creates, a corrupt underworld is revealed. Simply brilliant content worthy of a binge. Stellar performances supplemented with a phenomenal score & beautiful writing. One of the best TV shows we definitely recommend to watch.💖`,
          rating: 8.8,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/80115328',
            },
          ],
        },
        {
          heading: 'Breathe',
          text: `Ordinary men facing extraordinary circumstances. Crime Branch officer Kabir tries to solve the mystery of unconnected deaths of organ donors which leads him to an unlikely suspect. Kabir becomes determined to do whatever it takes to crack the case and deliver justice for the victims' loved ones ✊. Breathtaking, engaging and thrilling. Not enough words to describe this amazing series.`,
          rating: 8.4,
          buttons: [
            {
              type: 'Prime',
              link: 'https://www.amazon.com/Breathe-Season-1/dp/B078RNQHCV',
            },
          ],
        },
        {
          heading: 'She',
          text: `An undercover assignment makes an ordinary policewoman realise her true potential. You will love this series. It gives us a glimpse into the life of a woman constable and her journey to unlock her true potential 💪. A perfectly acted series that surprisingly is never a women dominated. The cast have done a great job in bringing the story to life!`,
          rating: 6.8,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/81183494',
            },
          ],
        },
        {
          heading: 'Delhi Crime',
          text: `Based on an incident that shook the entire nation, this crime drama follows the Delhi Police investigation into the finding of the men who perpetrated the crime on Nirbhaya.
            Brilliantly executed and extremely well directed. 'Delhi Crime' is dark and sends chills down the spine. Shows us how humanity can easily qualify as monstrous. 😨`,
          rating: 8.5,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/81076756',
            },
          ],
        },
        {
          heading: 'Made in Heaven',
          text: `Tara and Karan are Delhi-based dynamic wedding planners who navigate the world of Big Fat Indian Weddings 🎉. We can't thank the creators of the show enough for this beautiful piece of Indian drama 🙌. Affairs, homosexuality, dowry, old baseless traditions, friendship, love, hurt and betrayal portrayed wonderfully. This show has it all. A winning combination of ideas perfectly executed.`,
          rating: 8.3,
          buttons: [
            {
              type: 'Prime',
              link:
                'https://www.amazon.com/Made-In-Heaven-Season-1/dp/B07P67NJCC',
            },
          ],
        },
        {
          heading: 'Mirzapur',
          text: `Akhandanand Tripathi is the mafia boss of Mirzapur 🔪🔪.  His son is unworthy and power-hungry. A brilliantly scripted series where it makes you fall in love with each and every character. This show is dark, witty and an overall exciting watch!`,
          rating: 8.5,
          buttons: [
            {
              type: 'Prime',
              link:
                'https://www.primevideo.com/detail/0PDOKMV9CRLOMO5EUKNCUJLG4Q/?ref_=dvm_pds_gen_in_as_s_gt_mirzapurlaunch&ext_vrnc=hi%7Cc_312259800717_m_QuzO4xju-dc_s_&gclid=Cj0KCQjwsYb0BRCOARIsAHbLPhFWxUFNgjXIgOlDYr1PJHaXXmvebKODB-Egs6L4XX4iAVurUt6rCUAaApn2EALw_wcB',
            },
          ],
        },
        {
          heading: 'Yeh Meri Family',
          text: `In the summer of 1998, Harshu balanced school, family, friendship and other challenges of growing up. One of the most real shows you will ever watch. For the kids of the 90’s this one is a beautiful trip down the memory lane😇. In the digital era where we are losing perspective of reality, this show reminds you of the true notion of life.`,
          rating: 9.2,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/81020576',
            },
          ],
        },
        {
          heading: 'Little Things',
          text: `A young couple’s journey through the bustling city of Mumbai, how they manage to endeavour on their journey battling society and cultural norms on the way. Dhruv and Mithila are perfect, they compliment each other and bring the show to life😍. This urban and sophisticated series brings some content into the life of robust citizens that work hard everyday to make ends meet`,
          rating: 8.3,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/81011159',
            },
          ],
        },
        {
          heading: 'Pitchers',
          text: `TVF Pitchers is a web series created by Arunabh Kumar, which follows the journey of 4 friends who quit their jobs to begin their own startup. It is filled with both joys & complexity of life as an entrepreneur, and is a must watch! 🙌`,
          rating: 9.2,
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
