<template lang="pug">
  .statewise
    .statewise__section
      .statewise__text
        .wrapper__title 🌆 Statewise Statistics
        .wrapper__subtitle How is each state doing?
      .statewise__icon(@click="share")
        .statewise__icon__cover
          b-icon.statewise__icon__element(icon="share-variant")
        .statewise__icon__text Share

    b-table.statewise__table(:data='states' :columns="columns" sticky-header :mobile-cards="false")
</template>

<script>
import sharer from '~/services/sharer'
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      columns: [
        {
          field: 'state',
          label: 'State',
        },
        {
          field: 'confirmed',
          label: 'CONFIRMED',
          cellClass: 'text--confirmed',
        },
        {
          field: 'active',
          label: 'ACTIVE',
          cellClass: 'text--active',
        },
        {
          field: 'recovered',
          label: 'RECOVERED',
          cellClass: 'text--recovered',
        },
        {
          field: 'deaths',
          label: 'DECEASED',
          cellClass: 'text--deceased',
        },
      ],
    }
  },

  computed: {
    states() {
      return this.data ? this.data.slice(1) : []
    },
  },

  methods: {
    share() {
      sharer(
        `Know how each state is doing in this COVID-19 epidemic: https://indiasmile.org/covid 🦠

Stay Indoors & Stay Safe 🇮🇳`,
        ''
      )
    },
  },
}
</script>
<style lang="stylus">
.statewise
  &__section
    display flex
    justify-content space-between
    padding-bottom 0.75rem
    border-bottom 1px solid rgba(169, 194, 232, 0.5)

  &__icon
    display inline-flex
    flex-direction column
    justify-content center
    align-items center

    &__cover
      width 2.5rem
      height 2.5rem
      border-radius 100%
      background #E8EFFF
      display inline-flex
      justify-content center
      align-items center

    &__element
      color #1C5BFF
      font-size 1.25rem

    &__text
      font-size 0.75rem
      color #1C5BFF
      font-weight 500

  &__text
    &__title
      color #000
      font-size 0.875rem
      font-weight bold

    &__subtitle
      font-size .875em
      color rgba(25, 23, 91, 0.65)

  &__table.b-table
    .table-wrapper
      height 10.2rem

    .table
      overflow hidden auto
      th
        border 0
        .th-wrap
          text-align left
          font-size 0.5rem!important


        &:nth-child(2)
          color rgba(255,7,58,.6)

        &:nth-child(3)
          color rgba(0,123,255,.6)

        &:nth-child(4)
          color rgba(40,167,69,.6)

        &:nth-child(5)
          color rgba(108,117,125,.6)

      td
        border 0
        font-weight bold
        font-size .6875rem
</style>
