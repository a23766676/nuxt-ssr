<template>
  <div>
    <br />
    asyncData:{{ asyncData }}
    <br />
    fetchData:{{ fetchData }}
    <br />
  </div>
</template>
<script>
export default {
  name: "IndexPage",
  layout: 'none',
  asyncData(context) {
   console.log(context)
  },
  data() {
    return {
      show: true,
      asyncData:'default',
      fetchData: '',
      createdData: {},
      mountedData: {},
    };
  },
  async fetch(context) {
   console.log(context)
  },
};
</script>
