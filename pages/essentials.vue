<template lang="pug">
  div.main
    ArticleHero(:image="image")

    section.section.content
      h2.content__title {{ title }}

      .container
        .columns.is-multiline
          .column.is-one-third(
            v-for="(item, index) in list"
            :key="index"
          )
            card(
              v-if="!item.custom"
              :title="item.title"
              :subtitle="item.subtitle"
              :image="item.image"
              :color="item.color"
              :isDarkText="item.isDarkText"
              :list="item.links"
            )
            Sharer(
              v-else-if="item.custom === 'Sharer'"
              :title="title"
              textType="list"
            )
</template>

<script>
import Card from '~/components/Card'
import ArticleHero from '~/components/ArticleHero'
import IconGrofers from '~/assets/grofers.png'
import IconAmazonFresh from '~/assets/amazon-fresh.png'
import IconFrugivore from '~/assets/frugivore.png'
import IconBigBasket from '~/assets/big-basket.png'

export default {
  components: {
    Card,
    ArticleHero,
  },

  data() {
    return {
      title: 'Survival Starter Pack',

      image: require('~/assets/images/ration.jpg?resize'),

      list: [
        {
          title: 'Soaps',
          subtitle: 'Discussion groups',
          image: require('~/assets/images/soaps.jpg?resize'),
          color: 'rgba(234, 230, 219, 0.85)',
          isDarkText: true,
          links: [
            {
              name: 'Big Basket',
              text: 'Buy now',
              image: IconBigBasket,
              link: 'https://www.bigbasket.com/ps/?q=soap',
            },
            {
              name: 'Grofers',
              text: 'Buy now',
              image: IconGrofers,
              link:
                'https://grofers.com/s/?q=Soap&category_id=979&suggestion_type=1&t=1',
            },
          ],
        },
        {
          title: 'Sanitisers',
          subtitle: 'Get fit at home',
          image: require('~/assets/images/sanitizers.jpg?resize'),
          color: 'rgba(230, 226, 225, 0.85)',
          isDarkText: true,
          links: [
            {
              name: 'Big Basket',
              text: 'Buy now',
              image: IconBigBasket,
              link: 'https://www.bigbasket.com/ps/?q=sanitizer',
            },
          ],
        },
        {
          title: 'Vegetables',
          subtitle: 'Discussion groups',
          image: require('~/assets/images/vegetables.jpg?resize'),
          color: 'rgba(124, 98, 58, 0.85)',
          isDarkText: false,
          links: [
            {
              name: 'Big Basket',
              text: 'Buy now',
              image: IconBigBasket,
              link: 'https://www.bigbasket.com/cl/fruits-vegetables/?nc=nb',
            },
            {
              name: 'Frugivore',
              text: 'Buy now',
              image: IconFrugivore,
              link:
                'https://www.frugivore.in/product-listing-category/vegetables',
            },
            {
              name: 'Amazon Fresh',
              text: 'Buy now',
              image: IconAmazonFresh,
              link:
                'https://www.amazon.com/alm/category?almBrandId=QW1hem9uIEZyZXNo&node=6506977011&pf_rd_r=TP0Q49EDBD9BRRJG9K6X&pf_rd_p=a1eaf3f8-3995-44f2-af04-1f3d738af323&ref_=fs_dsk_sf_ai_sml_f3_sf_ais',
            },
          ],
        },
        {
          title: 'Grocery essentials',
          subtitle: 'Discussion groups',
          image: require('~/assets/images/grocery.jpg?resize'),
          color: 'rgba(108, 101, 84, 0.85)',
          isDarkText: false,
          links: [
            {
              name: 'Big Basket',
              text: 'Buy now',
              image: IconBigBasket,
              link: 'https://www.bigbasket.com/cl/foodgrains-oil-masala/?nc=nb',
            },
            {
              name: 'Frugivore',
              text: 'Buy now',
              image: IconFrugivore,
              link:
                'https://www.frugivore.in/product-listing-category/essentials',
            },
            {
              name: 'Amazon Fresh',
              text: 'Buy now',
              image: IconAmazonFresh,
              link:
                'https://www.amazon.com/alm/category?almBrandId=QW1hem9uIEZyZXNo&node=18787303011&redirect=rsp',
            },
            {
              name: 'Grofers',
              text: 'Buy now',
              image: IconGrofers,
              link: 'https://grofers.com/cn/grocery-staples/cid/16',
            },
          ],
        },
        {
          custom: 'Sharer',
        },
      ],
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'ogimage',
          property: 'og:image',
          content: this.image,
        },
      ],
    }
  },
}
</script>

<style scoped lang="stylus"></style>
