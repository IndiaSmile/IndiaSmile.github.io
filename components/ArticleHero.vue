<template lang="pug">
  .hero
    Header(:showBackButton="true")

    .hero__background
      img.hero__background__image(v-if="!!image" :src="image.src" :srcSet="image.srcSet")
      Breadcrumb
</template>

<script>
import Header from '~/components/Header'
import Breadcrumb from '~/components/Breadcrumb'

export default {
  components: {
    Header,
    Breadcrumb,
  },
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.hero
  position relative
  width 100%
  max-width 26em
  margin 0 auto

  &__background
    position relative
    padding-bottom 56.25%

    &__image
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      width 100%
      height 100%
</style>
