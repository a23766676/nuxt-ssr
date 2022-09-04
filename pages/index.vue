<template>
  <div>
    <br />
    asyncData:{{ asyncData.name }}
    <br />
    fetchData:{{ fetchData.name }}
    <br />
    createdData:{{ createdData.name }}
    <br />
    mountedData:{{ mountedData.name }}
    <br />
    <div>
      <span>a標籤:</span>
      <a href="../pageTow">下一頁</a>
    </div>
    <div>
      <span>nuxt-link:</span>
      <nuxt-link to="../pageTow">下一頁</nuxt-link>
    </div>
    <div>
      <span>router-link:</span>
      <router-link to="../pageTow">下一頁</router-link>
    </div>
    <button @click="show = !show">toggle component</button>
    <ViewSsr v-if="show" />
  </div>
</template>

<script>
import ViewSsr from "../components/ViewSsr.vue";
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
    console.log("asyncData");
    const data = await getData(1);
    return { asyncData: data };
  },
  data() {
    return {
      show: true,
      fetchData: {},
      createdData: {},
      mountedData: {},
    };
  },
  async fetch() {
    console.log("fetch");
    this.fetchData = await getData(1);
  },
  async created() {
    console.log("created");
    this.createdData = await getData(1);
  },
  async mounted() {
    console.log("mounted");
    this.mountedData = await getData(3000);
  },
  components: {
    ViewSsr,
  },
};
</script>
