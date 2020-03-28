<template lang="pug">
  .main
    ArticleHero(:image="image")

    section.section.content
      h2.content__title {{ title }}

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
      image: require('~/assets/images/whatsapp-alt.png'),
      title: 'Whatsapp communities',
    }
  },

  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style scoped lang="stylus"></style>
