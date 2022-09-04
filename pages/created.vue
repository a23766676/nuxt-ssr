<template>
   <div>
    nextPage
    <br />
    asyncData:{{ asyncData.name }}
    <br />
    fetchData:{{ fetchData.name }}
    <br />
    createdData:{{ createdData.name }}
    <br />
    <nuxt-link to="../fetchAsync">fetch與asyncData</nuxt-link>
  </div>
</template>

<script>
const getData = (t) =>
  new Promise((resovle) => {
    setTimeout(() => {
      resovle({ name:new Date() });
    }, t);
  });
export default {
  name: "pageTow",
  layout: 'none',
  async asyncData() {
    const data = await getData(5000);
    return { asyncData: data };
  },
  data() {
    return {
      fetchData: {},
      createdData: {},
    };
  },
  async fetch() {
    console.log("fetch" + new Date());
    this.fetchData = await getData(3000);
    // eslint-disable-next-line no-console
    console.log("fetchData" + this.fetchData.name );
    // 有keep alive且共用layout就不會進到fetch
  },
  async created() {
    console.log("start_created");
    this.createdData = await getData(1000);
    // eslint-disable-next-line no-console
    console.log("createdData"+this.createdData.name);
  },
};
</script>
