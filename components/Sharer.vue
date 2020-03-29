<template lang="pug">
  a.sharer(@click.prevent="share")
    span(v-html="text")
    .sharer__icons
      b-icon(
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        size="is-medium"
        :class="`i--icon`"
      )
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
    textType: {
      type: String,
      default: 'article',
    },
  },
  data() {
    return {
      icons: ['whatsapp', 'facebook', 'instagram'],
    }
  },
  computed: {
    fullTitle() {
      const topicTitleMap = {
        '/entertainment': `I found an awesome list of ${this.title} :) Check these out!`,
        '/fitness': `I found the best ${this.title} exercises to do at home :) Check these out!`,
        '/learn/languages': `${this.title} at home! Check this out`,
        '/learn/recipes': `Interesting ${this.title} recipes here! Very easy to cook in this quarantine :) Check them out!`,
        '/peace': `Interesting ${this.title} here! Very easy and useful in this quarantine :) Check them out!`,
        default: `${this.title}! Check this out :)`,
      }
      for (const topic of Object.keys(topicTitleMap)) {
        if (window.location.pathname.indexOf(topic) === 0) {
          return topicTitleMap[topic] || topicTitleMap.default
        }
      }
      return ''
    },

    text() {
      const textMap = {
        article: `Your friends & family can find this list useful 💕 Share, <strong>spread the love</strong>, and <strong>#EnjoyKaroNa</strong> 😆`,
        list: `Any friend or family who would like this list? <strong>Share this & stay positive</strong> to beat corona 💪`,
      }
      return textMap[this.textType] || ''
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
.column > .sharer
  margin 0
  height 100%

.sharer
  display flex
  flex-direction column
  justify-content center
  background #3742fa
  background linear-gradient(#5352ed, #3742fa)
  text-align center
  color white
  padding 1em
  border-radius .25em
  margin 1.5rem 0
  text-shadow 0 1px 1px rgba(black, .5)
  color rgba(white, .85)

  /deep/ strong
    color white

  &__icons
    margin .75rem 0 0
    color white

    /deep/ span + span
      margin-left 1.5em
</style>
