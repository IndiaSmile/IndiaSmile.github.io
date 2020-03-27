<template lang="pug">
  .content--community
    section.hero
      .hero-body
        .container
          h1.title IndiaSmile Community 🙌
          h1.subtitle IndiaSmile powers a community of cultured and intelligent individuals. Scroll through to search for the different groups, and click to immediately join the Whatsapp chat.
    section.section
      h3.title.is-4 Entertainment 🎉
      .columns
        chat-card(
          title="TV & Movies"
          href="https://chat.whatsapp.com/CSEaQHFghRmKfoDBwM9ePP"
        ) TV, Movies, and Entertainment 📺
</template>

<script>
import ChatCard from '~/components/ChatCard'

export default {
  name: 'HomePage',
  components: {
    ChatCard,
  },
}
</script>
