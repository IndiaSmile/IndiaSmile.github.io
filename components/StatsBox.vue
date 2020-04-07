<template lang="pug">
.stats
  .stats__item(v-show="showTotal")
    .stats__item__text.text--confirmed--light Total 😷
    .stats__item__number.text--confirmed {{ data.total_cases }}
  .stats__item(v-show="!showTotal")
    .stats__item__text.text--active--light Active 😷
    .stats__item__number.text--active {{ data.active_cases }}
  .stats__item
    .stats__item__text.text--recovered--light Recovered 👩‍⚕️
    .stats__item__number.text--recovered {{ data.total_recovered }}
  .stats__item
    .stats__item__text.text--deceased--light Deceased 💀
    .stats__item__number.text--deceased {{ data.total_deaths }}
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    showTotal: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="stylus" scoped>
.stats
  display flex

  &__title
    font-weight bold

  &__item
    flex 1 0
    text-align left

    &__text
      font-weight 600
      font-size 0.75rem

    &__number
      font-size 1rem
      font-weight bold
</style>
