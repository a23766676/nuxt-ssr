<template>
  <p v-if="$fetchState.pending">
    Fetching mountains...
  </p>
  <div v-else>
    首頁
    <br>
    <!-- asyncData:{{ asyncData.name }}
    <br> -->
    fetchData:{{ fetchData.name }}
    <br>
    createdData:{{ createdData.name }}
  </div>
</template>

<script>
// eslint-disable-next-line promise/param-names
const getData = t => new Promise((resovle) => {
  setTimeout(() => { resovle({ name: 'tina' }) }, t)
})
export default {
  name: 'IndexPage',
  layout: 'frontEnd',
  // async asyncData () {
  //   const data = await getData(3000)
  //   console.log('index_asyncData' + new Date())
  //   return { asyncData: data }
  // },
  data () {
    return {
      fetchData: {},
      createdData: {}
    }
  },
  fetch () {
    // this.fetchData = await getData(3000)
    // eslint-disable-next-line no-console
    console.log('index_fetch' + new Date())
    // 有keep alive且共用layout就不會進到fetch
  },
  async created () {
    this.createdData = await getData(3000)
    // eslint-disable-next-line no-console
    // console.log('index_created' + new Date())
    // console.log(this.createdData)
  }
}
</script>
