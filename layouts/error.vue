<template lang="pug">
  .article
    Header

    .content(v-if="error.statusCode === 404")
      h2.content__title Content Not Available! 😳

      p.content__text
        | We adding content as fast as possible! Please check again in a few hours to access this.

      nuxt-link(to="/").content__heading Return to Home ↩️

      b-message.message
        | If you would like to help making this available faster, join our team! Email us at #[a(href="mailto:hi@indiasmile.org") hi@indiasmile.org] 🤓
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
