<template lang="pug">
.breadcrumb-container
  ul.crumbs
    li.crumb(
      v-for="(item, index) in items"
      v-if="item.length > 1"
      :key="index"
      :class="{ 'is-active': items.length === index + 1 }"
    )
      nuxt-link(
        :to="path(index)"
      ).crumb__link {{ prettyCrumb(item) }}
</template>

<script>
export default {
  data() {
    return {
      items: [],
    }
  },

  created() {
    const crumbs = this.$route.path.split('/')
    crumbs[0] = 'home'

    this.items = crumbs
  },

  methods: {
    path(index) {
      if (index === 0) {
        return '/'
      } else {
        const items = [...this.items]
        items.shift()
        return (
          '/' +
          items
            .slice(0, index)
            .join('/')
            .toLowerCase()
        )
      }
    },

    prettyCrumb(crumb) {
      return (crumb.charAt(0).toUpperCase() + crumb.substr(1)).replace(
        /-/g,
        ' '
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.breadcrumb-container
  position absolute
  padding 0.75em
  bottom 0
  left 0
  width 100%
  margin-left -.75em

  .crumbs
    padding 0
    list-style-type none

  .crumb
    background #fff
    height 2em
    display inline-flex
    justify-content center
    align-items center
    position relative
    margin .5em 0 0 .75em

    &:not(:last-child):after
      content ' '
      border 1em solid transparent
      border-left .5em solid white
      height 1em
      position absolute
      right -1.5em
      z-index 9999

    &__link
      color #19175B
      font-size 0.875em
      font-weight bold
      padding .5rem .375rem .5rem .5rem
</style>
