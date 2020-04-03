<template lang="pug">
	b-table(:data="data.statewise" :columns="columns" mobile-cards striped sticky-header height="600")
</template>

<script>
export default {
  data() {
    return {
      data: [],

      columns: [
        {
          field: 'state',
          label: 'State',
          searchable: true,
        },
        {
          field: 'confirmed',
          label: 'Confirmed',
        },
        {
          field: 'active',
          label: 'Active',
        },
        {
          field: 'recovered',
          label: 'Recovered',
        },
        {
          field: 'deaths',
          label: 'Deaths',
          cellClass: 'has-text-danger',
        },
      ],
    }
  },

  async created() {
    const response = await this.$axios('https://api.covid19india.org/data.json')

    this.data = response.data
  },
}
</script>

<style scoped lang="stylus"></style>
