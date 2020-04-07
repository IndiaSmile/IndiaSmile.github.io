<template lang="pug">
.stats
  .stats__item.stats__item--confirmed(v-show="showTotal")
    .stats__item__text Total 😷
    .stats__item__number {{ data.total_cases }}
  .stats__item.stats__item--active(v-show="!showTotal")
    .stats__item__text Active 😷
    .stats__item__number {{ data.active_cases }}
  .stats__item.stats__item--recovered
    .stats__item__text Recovered 👩‍⚕️
    .stats__item__number {{ data.total_recovered }}
  .stats__item.stats__item--deceased
    .stats__item__text Deceased 💀
    .stats__item__number {{ data.total_deaths }}
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

    &--confirmed
      .stats__item__text
        color rgba(255,7,58,.6)
      .stats__item__number
        color #ff073a

    &--active
      .stats__item__text
        color rgba(0,123,255,.6)
      .stats__item__number
        color #70a1ff

    &--recovered
      .stats__item__text
        color rgba(40,167,69,.6)
      .stats__item__number
        color #2ecc71

    &--deceased
      .stats__item__text
        color rgba(108,117,125,.6)
      .stats__item__number
        color #7f8c8d
</style>
