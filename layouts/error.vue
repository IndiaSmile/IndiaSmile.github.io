<template lang="pug">
  .article
    Header

    .content(v-if="error.statusCode === 404")
      h2.content__title Content Not Available! 😳

      p.content__text
        | We are adding content as fast as possible! Please check again in a few hours to access this.

      nuxt-link(to="/").content__heading Return to Home ↩️
      .margin-top.has-text-centered
        nuxt-link(to='/covid')
          b-button(type='is-primary' size='is-medium') &#x1F9A0; COVID-19 Tracker and Stats

      b-message.message
        | If you would like to help making this available faster, join our team! Email us at #[u hi@indiasmile.org] 🤓
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },

  head() {
    return {
      title: 'Content Not Available',
    }
  },
}
</script>

<style lang="stylus" scoped>
.content
  margin-top 4rem

.message
  margin-top 1rem
</style>
