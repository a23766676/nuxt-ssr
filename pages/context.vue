<template>
  <div>
    <br />
    asyncData:{{ asyncData.name }}
    <br />
    fetchData:{{ fetchData.name }}
    <br />
  </div>
</template>
<script>
export default {
  name: "IndexPage",
  layout: 'none',
  async asyncData(context) {
   context.app.asyncData='context.app.asyncData';
  },
  data() {
    return {
      show: true,
      asyncData:{},
      fetchData: {},
      createdData: {},
      mountedData: {},
    };
  },
  async fetch(context) {
   context.app.fetchData='context.app.fetchData';
  },
};
</script>
