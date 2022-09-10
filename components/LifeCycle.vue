<template>
  <div>
    元件
    <br />
    <!-- asyncData:{{asyncData.name}} -->
    <br />
    fetchData:{{ fetchData.name }}
    <br />
    createdData:{{ createdData.name }}
  </div>
</template>

<script>
const getData = (t) =>
  new Promise((resovle) => {
    setTimeout(() => {
      resovle({ name: "component" });
    }, t);
  });
export default {
  name: "LifeCycle",
  // 只能放在頁面組件上
  async asyncData() {
    const data = await getData(5000);
    console.log("component_asyncData" + new Date());
    return { asyncData: data };
  },
  middleware() {
    console.log("component_middleware");
  },
  validate() {
    console.log("component_validate");
    return true;
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
    console.log("component_fetch" + new Date());
    // 有keep alive且共用layout就不會進到fetch
  },
  beforeCreate() {
    console.log("component_beforeCreate" + new Date());
  },
  async created() {
    console.log("component_created" + new Date());
    this.createdData = await getData(5000);
    // eslint-disable-next-line no-console
    console.log("component_created" + new Date());
  },
  beforeMount() {
    console.log("component_beforeMount");
  },
  mounted() {
    console.log("component_mounted");
  },
};
</script>

<style lang="scss" scoped>
</style>