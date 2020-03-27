<template lang="pug">
  .column
    .card
      a(:href="href")
        header.card-header.has-text-centered
          p.card-header-title.has-text-centered
            | {{ title }}
        //- .card-content
          .content.has-text-centered
            b-icon(:icon='icon' size='is-large' type='is-primary')
        footer.card-footer
          .card-footer-item
            slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: false,
      default: '#',
    },
  },
}
</script>
