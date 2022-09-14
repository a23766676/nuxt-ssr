<template>
<div v-if=$fetchState.error>error</div>
  <div v-else>
    <br />
    asyncData:{{ asyncData.name }}
    <br />
    fetchData:{{ fetchData.name }}
    <br />
    createdData:{{ createdData.name }}
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
    console.log("startasyncData_"+ new Date());
    // const data = await getData(2000);
    // const data = await getError(10);
    console.log("asyncData_" + new Date());
    // return { asyncData: data} ;
    return { };
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
    // const data = await getError(10);
    this.fetchData = await getData(3000);
    console.log("endfetch_" + new Date());
  },
  async created() {
    console.log("startcreated_"+ new Date());
    this.createdData = await getData(3000);
    console.log("endcreated_" + new Date());
  },
};
</script>
