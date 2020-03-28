<template lang="pug">
  .wrapper
    nuxt
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.wrapper
  font-family 'DM Sans', sans-serif
</style>
