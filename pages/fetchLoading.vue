<template>
  <div v-if="$fetchState.pending">loading...</div>
  <div v-else>
    <br />
    asyncData:{{ asyncData.name }}
    <br />
    fetchData:{{ fetchData.name }}
    <br />
    <nuxt-link to="../fetchOnServer">fetchOnServer</nuxt-link>
  </div>
</template>

<script>
const getData = (t) =>
  new Promise((resovle) => {
    setTimeout(() => {
      resovle({ name:'Tina'});
    }, t);
  });
export default {
  name: "IndexPage",
  layout: "none",
  async asyncData() {
    const data = await getData(2000);
    console.log("asyncData_" + new Date());
    return { asyncData: data };
  },
  data() {
    return {
      show: true,
      fetchData: {},
    };
  },
  async fetch() {
    console.log("fetch");
    this.fetchData = await getData(3000);
    console.log("fetchData_" + new Date());
  },
};
</script>
