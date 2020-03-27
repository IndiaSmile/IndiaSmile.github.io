<template lang="pug">
  div
    .hero
      .hero__header
        img.hero__header__logo(src="/logo.png")
        span.hero__header__text India Smile

      .hero__background
        .hero__text
          .hero__text__title Getting bored at home?
          .hero__text__subtitle Click on the content you are interested in to start exploring.
        .hero__background__gradient

    section.section.content
      .container
        .columns.is-multiline
          .column.is-one-third(
            v-for="(item, index) in list"
            :key="index"
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
import Card from '~/components/Card'

export default {
  name: 'HomePage',
  components: {
    Card,
  },

  data() {
    return {
      list: [
        {
          title: 'Meet new people',
          subtitle: 'Discussion groups',
          image: require('~/assets/images/whatsapp-alt.png'),
          color: '#1ebfa5',
          href: '/meet-new-people',
          isDarkText: false,
        },
        {
          title: 'Survival pack',
          subtitle: 'Essential supplies',
          image: require('~/assets/images/ration.png'),
          color: 'rgba(247, 235, 205, 0.85)',
          href: '/survival-pack',
          isDarkText: true,
        },
        {
          title: 'Beat anxiety',
          subtitle: 'Gain a peaceful calm',
          image: require('~/assets/images/woman-meditating.png'),
          color: 'rgba(75, 82, 60, 0.85)',
          href: '/beat-anxiety',
          isDarkText: false,
        },
        {
          title: 'Entertainment',
          subtitle: 'Best TV and movies',
          image: require('~/assets/images/amitabh-bachchan.png'),
          color: 'rgba(128, 150, 140, 0.85)',
          href: '/entertainment',
          isDarkText: false,
        },
        {
          title: 'Get fit & flexible',
          subtitle: 'Yoga and fitness',
          image: require('~/assets/images/woman-meditating.png'),
          color: 'rgba(57, 95, 54, 0.85)',
          href: '/get-fit-and-flexible',
          isDarkText: false,
        },
        {
          title: 'Learn new things',
          subtitle: 'Video for new skills',
          image: require('~/assets/images/person-using-mobile.png'),
          color: 'rgba(42, 94, 92, 0.85)',
          href: '/learn-new-things',
          isDarkText: false,
        },
        {
          title: 'Safety Guidelines',
          subtitle: 'In Hindi and English',
          image: require('~/assets/images/doctor.png'),
          color: 'rgba(210, 223, 234, 0.85)',
          href: '/safety-guidelines',
          isDarkText: true,
        },
        {
          title: 'Stay updated',
          subtitle: 'Curated news',
          image: require('~/assets/images/newspapers-stack.png'),
          color: 'rgba(235, 235, 236, 0.95)',
          href: '/stay-updated',
          isDarkText: true,
        },
      ],
    }
  },
}
</script>

<style scoped lang="stylus">
.hero
  position relative
  width 100%
  max-width 26em
  margin 0 auto

  &__header
    position absolute
    left 1.25em
    top 1em
    display flex
    align-items center

    &__logo
      width 1.5em
      height 1.5em

    &__text
      font-size 1.5em
      font-weight bold
      color #19175B
      margin-left 0.25em

  &__background
    width 100%
    height 0
    background url(/images/hero-bg.png) center/contain no-repeat
    padding-top 72%

    &__gradient
      position absolute
      width 100%
      height 12.5em
      left 0
      bottom 0
      z-index 1
      background linear-gradient(179.21deg, #FFFFFF 22.71%, rgba(255, 255, 255, 0) 87.36%)
      transform matrix(-1, 0, 0, -1, 0, 0)

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
      color #000
      font-size 1.25em
      font-weight bold
      line-height 1.5em

    &__subtitle
      color rgba(25, 23, 91, 0.65)
      font-size 0.875em
      line-height 1em

.content
  padding 0.75em
  position relative
  z-index 5
  margin-top -3.5em
</style>
