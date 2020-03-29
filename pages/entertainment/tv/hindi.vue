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
      image: require('~/assets/images/kuchh-rang-pyaar-ke.jpg'),
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
        },
        {
          heading: 'Sacred Games',
          text: `Criminal overlord Ganesh Gaitonde has arrived. Amidst the chaos he creates, a corrupt underworld is revealed. Simply brilliant content worthy of a binge. Stellar performances supplemented with a phenomenal score & beautiful writing. One of the best TV shows we definitely recommend to watch.💖`,
        },
        {
          heading: 'Breathe',
          text: `Ordinary men facing extraordinary circumstances. Crime Branch officer Kabir tries to solve the mystery of unconnected deaths of organ donors which leads him to an unlikely suspect. Kabir becomes determined to do whatever it takes to crack the case and deliver justice for the victims' loved ones ✊. Breathtaking, engaging and thrilling. Not enough words to describe this amazing series.`,
        },
        {
          heading: 'She',
          text: `An undercover assignment makes an ordinary policewoman realise her true potential. You will love this series. It gives us a glimpse into the life of a woman constable and her journey to unlock her true potential 💪. A perfectly acted series that surprisingly is never a women dominated. The cast have done a great job in bringing the story to life!`,
        },
        {
          heading: 'Delhi Crime',
          text: `Based on an incident that shook the entire nation, this crime drama follows the Delhi Police investigation into the finding of the men who perpetrated the crime on Nirbhaya.
            Brilliantly executed and extremely well directed. 'Delhi Crime' is dark and sends chills down the spine. Shows us how humanity can easily qualify as monstrous. 😨`,
        },
        {
          heading: 'Made in Heaven',
          text: `Tara and Karan are Delhi-based dynamic wedding planners who navigate the world of Big Fat Indian Weddings 🎉. We can't thank the creators of the show enough for this beautiful piece of Indian drama 🙌. Affairs, homosexuality, dowry, old baseless traditions, friendship, love, hurt and betrayal portrayed wonderfully. This show has it all. A winning combination of ideas perfectly executed.`,
        },
        {
          heading: 'Mirzapur',
          text: `Akhandanand Tripathi is the mafia boss of Mirzapur 🔪🔪.  His son is unworthy and power-hungry. A brilliantly scripted series where it makes you fall in love with each and every character. This show is dark, witty and an overall exciting watch!`,
        },
        {
          heading: 'Yeh Meri Family',
          text: `In the summer of 1998, Harshu balanced school, family, friendship and other challenges of growing up. One of the most real shows you will ever watch. For the kids of the 90’s this one is a beautiful trip down the memory lane😇. In the digital era where we are losing perspective of reality, this show reminds you of the true notion of life.`,
        },
        {
          heading: 'Little Things',
          text: `A young couple’s journey through the bustling city of Mumbai, how they manage to endeavour on their journey battling society and cultural norms on the way. Dhruv and Mithila are perfect, they compliment each other and bring the show to life😍. This urban and sophisticated series brings some content into the life of robust citizens that work hard everyday to make ends meet`,
        },
        {
          heading: 'Pitchers',
          text: `TVF Pitchers is a web series created by Arunabh Kumar, which follows the journey of 4 friends who quit their jobs to begin their own startup. It is filled with both joys & complexity of life as an entrepreneur, and is a must watch! 🙌`,
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
