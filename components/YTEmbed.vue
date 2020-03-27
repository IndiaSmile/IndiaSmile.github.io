<template lang="pug">
  div
    iframe(width="420" height="315" :src="src")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="stylus"></style>
