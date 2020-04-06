<template lang="pug">
  div
    TextHero(
      title="Getting bored at home?"
    )
      ul
        li 👇 <strong>Scroll down</strong> to see all content
        li 🎊 Choose Entertainment, Fitness, News, or anything you like!
        li 😍 Scroll and click on all photos to find best content
        li 🧠 Visit every day and add to homescreen to <strong>beat boredom</strong>
        li 👬 <strong>Share</strong> in friends & family groups to spread the love!

    LockdownCountdown

    section.section.content
      .container
        .columns.is-multiline
          .column.is-one-third(
            v-for="(item, index) in list"
            :key="index"
            v-if="(typeof item.isHidden === 'boolean') ? !item.isHidden : true"
          )
            card(
              v-if="!item.custom"
              :title="item.title"
              :subtitle="item.subtitle"
              :image="item.image"
              :color="item.color"
              :to="item.href"
              :isDarkText="item.isDarkText"
            )
            Sharer(
              v-else-if="item.custom === 'Sharer'"
              :title="title"
              textType="list"
            )
</template>

<script>
import Header from '~/components/Header'
import Card from '~/components/Card'
import TextHero from '~/components/TextHero'
import LockdownCountdown from '~/components/LockdownCountdown'

export default {
  name: 'HomePage',
  components: {
    Header,
    Card,
    TextHero,
    LockdownCountdown,
  },

  data() {
    return {
      title: 'IndiaSmile.org | Best things to do while stuck in quarantine',

      list: [
        {
          title: 'Like Minded WhatsApp Communities 👨‍👧‍👧',
          subtitle: 'Topic based community chats',
          image: require('~/assets/images/whatsapp-alt.jpg?resize'),
          color: '#1ebfa5',
          href: '/communities',
          isDarkText: false,
        },
        {
          title: 'Best Modern TV & Movies 📺',
          subtitle: 'Things to enjoy when bored',
          image: require('~/assets/images/amitabh-bachchan.jpg?resize'),
          color: 'rgba(128, 150, 140, 0.85)',
          href: '/entertainment',
          isDarkText: false,
        },
        {
          title: 'Get Fit and Flexible at Home 💪',
          subtitle: 'Yoga & Fitness',
          image: require('~/assets/images/healthy-man.jpg?resize'),
          color: 'rgba(78, 111, 140, 0.85)',
          href: '/fitness',
          isDarkText: false,
        },
        {
          title: 'Learn Something New Quickly 🧠',
          subtitle: 'Use the off-time to gain new skills ✍',
          image: require('~/assets/images/person-using-mobile.jpg?resize'),
          color: 'rgba(42, 94, 92, 0.85)',
          href: '/learn',
          isDarkText: false,
        },
        {
          title: 'Beat Anxiety & Gain a Peaceful Calm 🕊',
          subtitle: 'No to Negativity',
          image: require('~/assets/images/woman-meditating.jpg?resize'),
          color: 'rgba(75, 82, 60, 0.85)',
          href: '/peace',
          isDarkText: false,
        },
        {
          title: 'Survival Starter Pack 🧼',
          subtitle: 'Supplies and essentials to keep at home',
          image: require('~/assets/images/ration.jpg?resize'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/essentials',
          isDarkText: true,
        },
        // {
        //   title: 'Stay Updated (Curated News) 📰',
        //   subtitle: '',
        //   image: require('~/assets/images/newspapers-stack.jpg?resize'),
        //   color: 'rgba(235, 235, 236, 0.95)',
        //   href: '/news',
        //   isDarkText: true,
        // },
        {
          title: 'Safety Guidelines 👩‍⚕️',
          subtitle: 'Stay healthy physically and mentally',
          image: require('~/assets/images/doctor.jpg?resize'),
          color: 'rgba(210, 223, 234, 0.85)',
          href: '/safety-guidelines',
          isDarkText: true,
        },
        {
          title: 'COVID tracker',
          subtitle: 'Use this tool to find out how far is COVID-19 from you!',
          image: require('~/assets/images/tracker.jpg?resize'),
          color: 'rgba(0, 0, 0, 0.85)',
          href: '/covid',
          isDarkText: false,
        },
        {
          custom: 'Sharer',
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
          content: require('~/assets/images/meta-image.jpg?resize'),
        },
      ],
    }
  },
}
</script>

<style scoped lang="stylus">
.content
  padding 2em 1em 0
</style>
