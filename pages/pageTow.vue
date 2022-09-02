<template>
  <div v-if="$fetchState.pending">loading...</div>
   <div v-else>
    nextPage
    <br />
    asyncData:{{ asyncData.name }}
    <br />
    fetchData:{{ fetchData.name }}
    <br />
    createdData:{{ createdData.name }}
    <br />
    <br />
    <div>
      <span>a標籤:</span>
      <a href="/">上一頁</a>
    </div>
    <div>
      <span>nuxt-link:</span>
      <nuxt-link to="/">上一頁</nuxt-link>
    </div>
    <div>
      <span>router-link:</span>
      <router-link to="/">上一頁</router-link>
    </div>
  </div>
</template>

<script>
  import defaultLayout from '../layouts/default.vue';
// eslint-disable-next-line promise/param-names
const getData = (t) =>
  new Promise((resovle) => {
    setTimeout(() => {
      resovle({ name: "tina" });
    }, t);
  });
export default {
  name: "pageTow",
  layout: 'defaultLayout',
  async asyncData() {
    const data = await getData(5000);
    console.log("pageTwo_asyncData" + new Date());
    return { asyncData: data };
  },
  data() {
    return {
      fetchData: {},
      createdData: {},
    };
  },
  async fetch() {
    this.fetchData = await getData(5000);
    // eslint-disable-next-line no-console
    console.log("pageTow_fetch");
    // 有keep alive且共用layout就不會進到fetch
  },
  async created() {
    this.createdData = await getData(5000);
    // eslint-disable-next-line no-console
    console.log("pageTow_created");
  },
};
</script>

<style lang="scss" scoped>
</style>