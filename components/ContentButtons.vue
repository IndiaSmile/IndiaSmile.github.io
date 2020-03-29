<template lang="pug">
  .content__buttons(v-if="!!buttons")
    Button.content__buttons__item(
      v-for="(button, idx) in buttons"
      :key="idx"
      :text="button.text || ''"
      :type="button.type.toLowerCase() || ''"
      :href="button.link"
    )
</template>

<script>
import Button from '~/components/Button'

export default {
  name: 'ContentButtons',
  components: {
    Button,
  },
  props: {
    buttons: {
      type: Array,
      required: true,
    },
  },
}
</script>
