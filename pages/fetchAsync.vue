<template>
  <div>
    <br />
    asyncData:{{ asyncData.name }}
    <br />
    fetchData:{{ fetchData.name }}
    <br />
    <nuxt-link to="../fetchLoading">fetchLoading</nuxt-link>
  </div>
</template>
<script>
const getData = (t) =>
  new Promise((resovle) => {
    setTimeout(() => {
      resovle({ name:'Tina'});
    }, t);
  });
  const getError = (t) =>
  new Promise((resovle,reject) => {
    setTimeout(() => {
      reject('error');
    }, t);
  });
export default {
  name: "IndexPage",
  layout: 'none',
  async asyncData() {
    const data = await getData(2000);
    // const data = await getError(10);
    console.log("asyncData_" + new Date());
    return { asyncData: data };
  },
  data() {
    return {
      asyncData:{name:'default'},
      show: true,
      fetchData: {},
      createdData: {},
      mountedData: {},
    };
  },
  async fetch() {
    console.log("startfetch_"+ new Date());
    this.fetchData = await getData(3000);
    console.log("fetchData_" + new Date());
  },
};
</script>
