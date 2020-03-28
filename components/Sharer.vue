<template lang="pug">
  b-message.sharer(type="is-warning") Know someone who&rsquo;d find this list useful? <a href="#" @click.prevent="share">Share this and let them know you're thinking of them 💕</a>
</template>

<script>
import sharer from '~/services/sharer'

export default {
  name: 'Sharer',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    fullTitle() {
      const topicTitleMap = {
        '/entertainment': `I found an awesome list of ${this.title} :) Check these out!`,
        '/fitness': `I found the best ${this.title} exercises to do at home :) Check these out!`,
        // @TODO add others
      }
      for (const topic of Object.keys(topicTitleMap)) {
        if (window.location.pathname.indexOf(topic) === 0) {
          return topicTitleMap[topic]
        }
      }
      return ''
    },
  },
  methods: {
    share() {
      sharer(this.fullTitle, window.location.href)
    },
  },
}
</script>

<style lang="stylus" scoped>
.sharer
  font-size .875em
  margin 1.5rem 0
</style>
