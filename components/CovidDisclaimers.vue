<template lang="pug">
  div
    .disclaimer__footer
      p.disclaimer__footer__text Statistical information provided by our friends at
      a.disclaimer__footer__link(href="https://api.covid19india.org" target="_blank" rel="nofollow") covid19india.org
        b-icon(icon="open-in-new" size="is-small")

    b-message.disclaimer__message(type="is-warning is-small") * This information is sourced from crowdsource data and can be inaccurate. Do not panic & wait for government sources to verify this data. #[u.has-text-info.is-size-7(@click='showInfoModal = true') How it works?]

    b-modal.modal--custom(:active.sync='showInfoModal' has-modal-card trap-focus aria-role='dialog' aria-modal)
      .card
        .card-content
          p IndiaSmile is a non-profit NGO that uses publicly available data from news & government sources to show information of infected cases all around the world. For privacy reasons, we do not store the exact location of an infected case but have to approximate it to the nearest district's location. We then use the location information you provide to calculate a distance to the nearest patient.
          p This information comes from a public #[a(href='http://patientdb.covid19india.org/' target='_blank') database maintained by volunteers]. Any information we collect from you contains no identifiable IDs and is deleted when you leave the webpage
</template>

<script>
export default {
  name: '',

  data() {
    return {
      showInfoModal: false,
    }
  },
}
</script>

<style lang="stylus" scoped>
.disclaimer__footer
  margin-top 0.5rem
  text-align center

  &__text
    font-size 0.625rem
    margin-bottom 0!important

  &__link
    color #1C5BFF
    padding 0.5rem 1rem
    background-color rgba(28, 91, 255, 0.1)
    text-decoration underline
    margin 0.5rem 0
    display inline-block
    font-size 0.875rem
    border-radius 0.25rem

.disclaimer__message
    margin-top 1rem

.modal--custom
  z-index 1000

  .card
    max-width 20rem
    margin 0 auto
    border-radius 0.5rem
</style>
