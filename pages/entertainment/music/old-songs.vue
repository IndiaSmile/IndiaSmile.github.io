<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        Sharer(v-if="data.custom === 'Sharer'" :title="title")

        iframe.content__embed(v-if="data.custom === 'Spotify'" :src="data.embed")

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
      image: require('~/assets/images/old-man.jpg'),
      title: 'Old Hindi Songs',
      article: [
        {
          custom: 'Sharer',
        },
        {
          custom: 'Spotify',
          embed:
            'https://open.spotify.com/embed/playlist/37i9dQZF1DWYRTlrhMB12D?si=Gdwq0W6WTp--nAEX1SD1GQ',
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
