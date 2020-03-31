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

        ContentButtons(v-if="!!data.buttons" :buttons="data.buttons")

      Sharer(:title="title")
</template>

<script>
import ContentButtons from '~/components/ContentButtons'
import ArticleHero from '~/components/ArticleHero'
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
      image: require('~/assets/images/how-i-met-your-mother.jpg?resize'),
      title: 'English TV Shows',

      article: [
        {
          text: [
            `We are in the Peak TV era, where there are more excellent shows than we can finish. We have searched and compiled the best of these, and now’s the perfect time to watch them. Happy Binging 📺!`,
            `P.S-  For our readers who aren’t aware of the term ‘binge’ or ‘binging’, it implies indulging into an activity excessively, in this case finishing season after season without taking a break 😋`,
          ],
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'Mindhunters',
          text: `The journey of 2 FBI agents as they decide to decipher the inside of criminal minds to figure out what they think. They attempt to understand and catch serial killers by studying their damaged psyches. An absolutely fantastic work of direction, writing, production and acting 💪. In every sense, it comes out as a highly rated show to watch! All brought together with a compelling soundtrack.`,
          rating: 8.6,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/80114855',
            },
          ],
        },
        {
          heading: 'The Good Place',
          text: `Eleanor, a deceased saleswoman, living in a corrupt society finds herself in a heaven-like afterlife, she tries to hide her past in order to stay there. The Good Place is a rewarding show, an intriguing premise, light and substantial humour. The plot twists at the end of every season lure you to jump to the next. 👀`,
          rating: 8.2,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/80113701',
            },
          ],
        },
        {
          heading: 'The Man in the High Castle',
          text: `What the world might look like had the outcome of World War II turned out differently. A scenario where the United States is divided into three parts, an area controlled by the Japanese, a Nazi-controlled section, and a buffer zone between the two. A new hope emerges when films turn up that seem to show a different world. This is probably one of the best TV shows. The plot is complex, gripping and satisfyingly confusing.`,
          rating: 8.0,
        },
        {
          heading: 'Peaky Blinders',
          text: `A dangerous Tommy Shelby leads Peaky Blinders, a criminal gang based in Birmingham in 1919. Chief Inspector Chester Campbell decides to put an end to this gang.This is one of the best TV series for the people who love dark, serious and strategy based TV series. Peaky Blinders is all about hard work and correct strategy. How these can raise a person and its family from Ashes to an epitome of success. Warning! You will fall in 💖 with ’Tommy Shelby’.`,
          rating: 8.2,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/80002479',
            },
          ],
        },
        {
          heading: 'The English Game ⚽',
          text: `The English Game is a historical sports drama by Julian Fellowes about the origins of modern football in England. The Downton Abbey creator looks to the origins of the beautiful game, and the people behind the incident who battled it out in the 1879 FA Cup, in this dire Netflix series.`,
          rating: 8.2,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/80244928',
            },
          ],
        },
        {
          heading: 'Ozark',
          text: `A financial planner relocates his family from Chicago to a summer resort community in the Ozarks. With his wife and two kids, Marty is on the move after a fraud scheme goes wrong, forcing him to pay off a big debt to a Mexican drug lord in order to keep his family safe 🙈 The dire circumstances force the broken family to reconnect. This is one of the best written shows and is binge worthy.`,
          rating: 8.3,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/80117552',
            },
          ],
        },
        {
          heading: 'Altered Carbon',
          text: `More than 300 years in the future, society has been transformed by new technology, leading to human bodies being interchangeable and death no longer being permanent. Words can’t be enough to describe this show, it grips you and you will not want to stop watching! Clever twists with wonderful visuals. Make you hold your breath every step of the way✨`,
          rating: 8.1,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/80097140',
            },
          ],
        },
        {
          heading: 'Black Mirror',
          text: `An anthology series that revolves around how technology 📲 manipulates their behaviour?. A sublime science fiction drama. The entire production is superbly crafted with a sensational cast. The series is a tapestry of futuristic and modern-day stand alone tales that are deep, dark and full of satire.`,
          rating: 8.8,
          buttons: [
            {
              type: 'Netflix',
              link: 'https://www.netflix.com/title/70264888',
            },
          ],
        },
        {
          heading: 'Money Heist',
          text: `A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist 💸 in recorded history. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. As more time elapses, the robbers prepare for a showdown with the police.
            This show turned out to be surprisingly fantastic. A well thought out story with vast opportunities to explore and have fun with from various angles. The writers succeeded in doing a pretty good job with this one.`,
          rating: 8.5,
          buttons: [
            {
              type: 'Netflix',
              link:
                'https://www.netflix.com/search?q=Money%20Heist%20&jbv=80192098&jbp=0&jbr=0',
            },
          ],
        },
        {
          heading: 'Parks and Recreation',
          text: `A mid-level bureaucrat wishes to help a local nurse convert an unused construction site into a community park but deals with strict regulations and self-centred neighbours. A hilarious show from start to end. Really clever writing and deliveries that keep you hooked. 👏Praiseworthy performances by the cast as well.`,
          rating: 8.6,
          buttons: [
            {
              type: 'Prime',
              link:
                'https://www.primevideo.com/detail/amzn1.dv.gti.c2b03b3a-24de-42c1-d57f-462bfb3987b3/?ref_=dvm_pds_gen_in_as_s_gt_dtites1166B2%7Cc_413945600398_m_XiVIXtu9-dc_s_',
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
