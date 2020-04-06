<script>
export default {
  title: 'Redirecting to COVID page',
  middleware({ redirect }) {
    return redirect('/covid')
  },
}
</script>
