<template lang="pug">
	div.breadcrumb-container
		ul.crumbs
			li.crumbs__item(v-for="(item, index) in items" :key="index" :class="{'is-active': items.length === index + 1}")
				nuxt-link(:to="path(index)").crumbs__item__link {{ item }}

</template>

<script>
export default {
  data() {
    return {
      items: [],
    }
  },

  computed: {},

  created() {
    const crumbs = this.$route.path.split('/')
    crumbs[0] = 'home'

    for (const crumb of crumbs) {
      this.items.push(crumb.charAt(0).toUpperCase() + crumb.substr(1))
    }
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

  .crumbs
    padding 0
    list-style-type none

    &__item
      background #fff
      height 1.875em
      display inline-flex
      justify-content center
      align-items center
      padding 0.375em
      margin 0.5em 0 0 0.5em

      &__link
        color #19175B
        font-size 0.875em
        font-weight bold
</style>
