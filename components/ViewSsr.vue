<template>
  <div>
    元件
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
  data() {
    return {
      fetchData: {},
      createdData: {},
    };
  },
  async fetch() {
    this.fetchData = await getData(5000);
  },
  async created() {
    this.createdData = await getData(5000);
  },
};
</script>
