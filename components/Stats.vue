<template lang="pug">
  .stats(v-if="!isHidden")
    h3.stats__title COVID Stats

    .stats__item(v-for="(item, idx) in data" :key="idx")
      h4.stats__item__title {{ item.state }}
      .stats__item__content
        .stats__item__content__name Confirmed
        .stats__item__content__value {{ item.confirmed }}
      .stats__item__content
        .stats__item__content__name Active
        .stats__item__content__value {{ item.active }}
      .stats__item__content
        .stats__item__content__name Recovered
        .stats__item__content__value {{ item.recovered }}
      .stats__item__content
        .stats__item__content__name.has-text-danger Deaths
        .stats__item__content__value.has-text-danger {{ item.deaths }}

</template>

<script>
export default {
  data() {
    return {
      isHidden: true,
      data: {
        total: {},
        state: {},
      },

      stateCode: '',
    }
  },

  mounted() {
    window.geoip2.city(async (res) => {
      this.stateCode = res.subdivisions[0].iso_code

      const response = await this.$axios(
        'https://api.covid19india.org/data.json'
      )

      this.data.total = response.data.statewise[0]

      this.data.state = response.data.statewise.filter(
        (item) => item.statecode === this.stateCode
      )[0]
    })
  },
}
</script>

<style scoped lang="stylus">
.stats
  width 100%

  &__item
    margin-bottom 1rem

    &__title
      margin-bottom 0.5rem

    &__content
      display flex
      justify-content space-between

      &__name
        font-weight bold
</style>
