<template lang="pug">
  div.main
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}

      .content__section
        p.content__text
          | We would like to present our readers with the best suspenseful movies that will heighten your feelings of thrill and excitement! This quarantine period, delve into the foreshadow of dreadful secrets, unsettled issues, buried traumas and shocking revelations. Indulge into the world of unexpected turns, mishappenings and unexplainable moments!

      .content__section
        h5.content__heading
          | The Silence Of The Lambs

        p.content__text
          | An FBI agent seeks help from a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims. Psychological supplemented with a gripping tale which inspires suspense amongst its watchers. One of the best suspense thrillers of this decade!

      .content__section
        h5.content__heading
          | Seven

        p.content__text
          | A dark and gripping thriller which saves its most shocking revelations for the final moments of the movie! Based on two detectives, who try to run down a gruesome serial killer who bases his murders on the seven deadly sins. Will surely get your heart pumping!

      .content__section
        h5.content__heading
          | A Simple Favor

        p.content__text
          | A stylish post-modern film noir directed by Paul Feig, based around Stephanie who seeks to uncover the truth behind her best friend’s sudden disappearance from their small town. It is a thriller, carries suspense and is packed with an uneasy but mild humour at its core!

      .content__section
        h5.content__heading
          | Shutter Island

        p.content__text
          | Two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place. Oh what can we say about this classic! The film's primary effect is on the senses. Everything is brought together into a disturbing pool of secrets.

      .content__section
        h5.content__heading
          | No Country for Old Men

        p.content__text
          | A hunter's life takes a drastic turn when he is pursued by a psychopathic killer who wants the money he acquired! Powerful and moving performances from the cast, having won an Oscar for the best film!

      .content__section
        h5.content__heading
          | Oldboy (2003, Korean)

        p.content__text
          | A man, held captive for no apparent reason for years, is given a cell phone, money and expensive clothes and released. Unless he finds out the identity of his captor, an even worse fate awaits him. This one is for the strong hearted and can be considered a real mind bender!

      .content__section
        h5.content__heading
          | Mystic River

        p.content__text
          | After the death of a girl, a police officer, investigates her murder which leads him to a crime that took place twenty-five years ago. A back in time thriller with an unprecedented set of events that turn your mind topsy turvy in search for the truth!

      .content__section
        h5.content__heading
          | Gone Girl

        p.content__text
          | Nick discovers that the entire media focus has shifted on him when his wife disappears on the day of their fifth wedding anniversary. This is a sick film, and also brilliant.

      .content__section
        h5.content__heading
          | Memento

        p.content__text
          | An insurance investigator suffers from anterograde amnesia and uses notes and tattoos to hunt for the man he thinks killed his wife, which is the last thing he remembers! One of the most original and unique thrillers that Hollywood has seen in its prime!

      .content__section
        h5.content__heading
          | The Gift

        p.content__text
          | A married couple run into an old acquaintance. Things take a turn when he begins to drop in unannounced at their house and inundates them with mysterious gifts. This resourceful and edgy thriller marks another string in the talented director Joel Edgerton’s palette.

      .content__section
        h5.content__heading
          | Bird Box

        p.content__text
          | When a mysterious force decimates the world, only one thing is certain, if you see it, you die. Facing the unknown, Malorie finds love, hope and a new beginning and must flee with her two children down a treacherous river to the one place left that may offer sanctuary. Sandra Bullock stars and finds praise for her performance in this thrilling contest of life.

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
      image: '/images/english-thriller.png',
      title: 'Best Hollywood Thrillers',
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
</style>
