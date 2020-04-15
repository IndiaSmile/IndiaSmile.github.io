<script>
export default {
  middleware({ redirect }) {
    return redirect('/404')
  },
}
</script>

<!-- <template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h3 COVID-19 India Statistics

      IndiaStats(:data="indiaData")

      StateStats.margin-top(:data="statesData")

      Sharer(:title="title")

      Articles(:count="count")

      b-button(v-if="count !== 0" @click="count = 0" icon-left="chevron-down" type="is-primary") View more

      Sharer(:title="title")
</template>

<script>
import ArticleHero from '~/components/ArticleHero'
import IndiaStats from '~/components/IndiaStats'
import StateStats from '~/components/StateStats'
import Articles from '~/components/Articles'
// import indiaSmileLogo from '~/assets/logo-square.png'

export default {
  name: 'HomePage',
  components: {
    ArticleHero,
    Articles,
    IndiaStats,
    StateStats,
  },

  data() {
    return {
      image: require('~/assets/images/newspapers-stack.jpg?resize'),
      title: 'News',

      count: 3,
      statewise: {},
    }
  },

  computed: {
    indiaData() {
      return this.statewise.length ? this.statewise[0] : {}
    },

    statesData() {
      return this.statewise.length ? this.statewise : []
    },
  },

  async mounted() {
    const response = await this.$axios(
      '/cache/statewise.json'
    )
    this.statewise = response.data.statewise
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

<style scoped lang="stylus">
.stats
  margin-top 1.5rem

.content
  &__section
    margin-bottom 1rem
</style>
 -->
