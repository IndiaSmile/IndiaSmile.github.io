<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        Sharer(v-if="data.custom === 'Sharer'" :title="title")

        iframe.content__embed(v-if="data.custom === 'Spotify'" :src="data.embed")

      Sharer(:title="title")
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
      image: require('~/assets/images/kyij.jpg'),
      title: 'Hindi Rap',
      article: [
        {
          custom: 'Sharer',
        },
        {
          custom: 'Spotify',
          embed:
            'https://open.spotify.com/embed/playlist/37i9dQZF1DX2RahGIyQXcJ?si=SbzztrnMT7euoTpf_o3DcA',
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
