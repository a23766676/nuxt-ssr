<template>
  <div>
    生命週期2
    <nuxt-link to="/lifeCycle">lifeCycle</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "defaultLayout",
  async asyncData() {
    console.log("page_asyncData");
    return { };
  },
  middleware:'auth',
  // middleware(context) {
  //   console.log("page_middleware");
  // },

  // 參數的有效性
  validate(context) {
    // context.params
    // context.query
    //校驗參數的有效性
    console.log("page_validate");
    return true;
    // return false;
  },
  data() {
    return {
      message:'this',
      fetchData: {},
      createdData: {},
      mountedData: {},
    };
  },
  async fetch() {
    // console.log('print:'+this.message);
    console.log("page_fetch");
  },
  beforeCreate (){
    console.log("page_beforeCreate");
  },
  async created() {
    // console.log('print:'+this.message);
    console.log("page_created");
  },
  beforeMount(){
    console.log("page_beforeMount");
  },
  async mounted (){
    console.log("page_mounted");
  },
};
</script>
