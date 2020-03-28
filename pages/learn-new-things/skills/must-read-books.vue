<template lang="pug">
  div.main
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        h5.content__heading(v-if="!!data.heading") {{ data.heading }}

        p.content__text(v-if="typeof data.text === 'string'") {{ data.text }}
        div(v-else)
          p.content__text(v-for="(text, idx) in data.text" :key="idx") {{ text }}

</template>

<script>
import ArticleHero from '~/components/ArticleHero'

export default {
  name: 'HomePage',
  components: {
    ArticleHero,
  },

  data() {
    return {
      title: 'Must Read Books 📚',
      image: require('~/assets/images/books.png'),
      article: [
        {
          text: [
            `A reader lives a thousand lives before he dies.😇`,
            `This is just great! All this free time, and access to some amazing writing work! We cannot stress the importance of reading in one’s life.`,
            `We present our top picks you should add on your priority list ASAP. Open your mind to newer perspectives as you delve into the dreams of some extraordinary writers.`,
          ],
        },
        {
          heading: 'The Apology by Eve Ensler',
          text: `The author’s harrowing look inside the mind of an abuser, her father. Exquisite and excruciating. Her father, who died more than 30 years ago, sexually and physically brutalised her as a child, as he isn’t able to speak to her, she imagines a beautifully crafted apology believing that is what he must have internally wanted! A wonderful read! Just go ahead.`,
        },
        {
          heading: 'Quichotte by Salman Rushdie',
          text: `Rushdie’s 14th novel is certainly the work of a frisky and robust imagination. If it drives You nuts, that's fine, It is meant to. The witty and crazy are all there. It's a real magical fiction in the quest for love with all its pains and obstacles. A wonderfully perceived book by a famous author, brings in fresh perspective! `,
        },
        {
          heading: 'Think and Grow rich',
          text: `Think and Grow Rich was written by Napoleon Hill in ‘1937’. Everyone's got to read this book at least once before they leave earth. Period!`,
        },
        {
          heading: 'The Testaments by Margaret Atwood',
          text: `The Testaments is a 2019 novel by Margaret Atwood. It is a sequel to The Handmaid's Tale. The writing is brilliant, the subtle digs at American society are humorous and witty, the characters are magically brought to life. The depictions of life and culture are fascinating. This is a page turner, will keep you hooked on till the end!`,
        },
        {
          heading: 'The 48 laws of power',
          text: `The 48 Laws of Power is a non-fiction book by American author Robert Greene. The book is a bestseller. This is an amazing piece that will take you on a journey of power laws. How you can mould and reap it, the difference between money and authority. It is highly recommended for people who are interested in knowing the mindset of a human being.`,
        },
        {
          heading: 'The Anarchy by William Dalrymple',
          text: `Fantastic story that is well written and deeply researched. English colonial history of the 18th century, portrayed extremely well, this one is a treat! One of Barack Obama’s favourite books, it makes our list as one of the best reads.`,
        },
        {
          heading: 'Raavan- Enemy of Aryavarta by Amish Tripathi',
          text: `This book is a 2019 mythological fiction written by Amish Tripathi. The third book in the Ram Chandra series. Throughout it, Raavan’s suffering, after losing the only woman he loved, is deep-seated and disturbing. It eats him from within, while on the outside, he becomes the wealthy, powerful, cruel and ruthless. One of the renowned Author’s best works!`,
        },
        {
          heading: 'City Of Girls by Elizabeth Gilbert',
          text: `Gilbert’s third novel is another big work of historical fiction about an independent woman navigating the norms of cultural upheaval. From the author of Eat,Pray,Love comes yet another brilliant novel. Don’t be surprised if you finish it in a day!`,
        },
        {
          heading: 'Black Leopard, Red Wolf by Marlon James',
          text: `James's Dark trilogy finally comes to life! He’s a hunter, a mercenary, and it’s his journey in pursuit of that young boy that drives the viciousness. Set in precolonial Africa, it is gruesome, dark and fantastic at the same time. You shall forget society as you know it, as you reach its end!`,
        },
      ],
    }
  },

  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style scoped lang="stylus">
.main
  display flex
  flex-direction column
  align-items center

  .content
    width 100%
    max-width 26em
    padding 1.5em 1.875em

    &__title
      color #19175B
      font-size 1.5em
      font-weight bold

    &__heading
      color #19175B
      font-size 1em
      font-weight bold

    &__text
      color #000
      font-size 0.875em
      margin-bottom 1.5em
      white-space pre-line

    &__button
      margin-bottom 1.5em
</style>
