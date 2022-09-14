<template>
  <div>
  <!-- {{asyncData}} -->
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
    console.log("component_asyncData");
    return { asyncData:'aaa' };
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
    console.log("component_fetch");
  },
  beforeCreate() {
    console.log("component_beforeCreate" );
  },
  async created() {
    console.log("component_created" );
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