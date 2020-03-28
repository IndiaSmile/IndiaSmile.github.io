<template lang="pug">
  div
    .hero
      Header

      .hero__background
        .hero__text
          .hero__text__title Getting bored at home?
          .hero__text__subtitle Click on the content you are interested in to start exploring.
        .hero__background__gradient

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
              :title="item.title"
              :subtitle="item.subtitle"
              :image="item.image"
              :color="item.color"
              :to="item.href"
              :isDarkText="item.isDarkText"
            )
</template>

<script>
import Header from '~/components/Header'
import Card from '~/components/Card'
import LockdownCountdown from '~/components/LockdownCountdown'

export default {
  name: 'HomePage',
  components: {
    Header,
    Card,
    LockdownCountdown,
  },

  data() {
    return {
      title: 'IndiaSmile',

      list: [
        {
          title: 'Join Like Minded WhatsApp Communities',
          subtitle: 'Topic based community chats',
          image: require('~/assets/images/whatsapp-alt.png'),
          color: '#1ebfa5',
          href: '/communities',
          isDarkText: false,
        },
        {
          title: 'Best Modern TV & Movies ',
          subtitle: 'Things to enjoy when bored',
          image: require('~/assets/images/amitabh-bachchan.png'),
          color: 'rgba(128, 150, 140, 0.85)',
          href: '/entertainment',
          isDarkText: false,
        },
        {
          title: 'Get Fit and Flexible at Home',
          subtitle: 'Yoga & Fitness',
          image: require('~/assets/images/healthy-man.png'),
          color: 'rgba(78, 111, 140, 0.85)',
          href: '/fitness',
          isDarkText: false,
        },
        {
          title: 'Learn Something New',
          subtitle: 'Use the off-time to gain new skills ✍',
          image: require('~/assets/images/person-using-mobile.png'),
          color: 'rgba(42, 94, 92, 0.85)',
          href: '/learn',
          isDarkText: false,
        },
        {
          title: 'Beat Anxiety & Gain a Peaceful Calm',
          subtitle: '❌No to Negativity 🚫',
          image: require('~/assets/images/woman-meditating.png'),
          color: 'rgba(75, 82, 60, 0.85)',
          href: '/peace',
          isDarkText: false,
        },
        {
          title: 'Survival Starter Pack ',
          subtitle: '🧼Supplies and essentials to keep at home 🍞',
          image: require('~/assets/images/ration.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/survive',
          isDarkText: true,
        },
        {
          title: 'Stay Updated',
          subtitle: '📰 Curated news from verified sources',
          image: require('~/assets/images/newspapers-stack.png'),
          color: 'rgba(235, 235, 236, 0.95)',
          href: '/stay-updated',
          isDarkText: true,
        },
        {
          title: 'Safety Guidelines',
          subtitle: 'Stay healthy both physically and mentally 👩‍⚕️',
          image: require('~/assets/images/doctor.png'),
          color: 'rgba(210, 223, 234, 0.85)',
          href: '/safety-guidelines',
          isDarkText: true,
        },
      ],
    }
  },

  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style scoped lang="stylus">
.hero
  width 100%
  max-width 26em
  margin 0 auto

  &__background
    width 100%
    height 0
    background url('~@/assets/images/girl-using-phone.png') left/contain no-repeat
    padding-top 55%
    position relative

    &__gradient
      position absolute
      width 80%
      height 100%
      right 0
      top 0
      z-index 1
      background linear-gradient(272.06deg, #C3C0AF 2.66%, #B8B7B3 42.6%, rgba(57, 57, 57, 0) 83.86%)

  &__text
    margin-right 0.875em
    width 45%
    position absolute
    right 0
    top 0
    z-index 2
    display flex
    flex-direction column
    justify-content center
    height 100%

    &__title
      color #fff
      font-size 1.25em
      font-weight bold
      line-height 1.5em
      text-shadow  0px 1px 4px rgba(0, 0, 0, 0.25)
      margin-bottom 0.25em

    &__subtitle
      color rgba(255, 255, 255, 0.8)
      font-size 0.875em
      line-height 1em
      text-shadow 0px 1px 4px rgba(0, 0, 0, 0.25)

.content
  padding 2em 1em 1.25em
</style>
