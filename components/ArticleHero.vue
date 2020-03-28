<template lang="pug">
  .hero
    Header

    .hero__background
      img.hero__background__image(v-if="!!image" :src="image")
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
    &__image
      width 100%
      height 100%
</style>
