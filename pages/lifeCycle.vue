<template>
  <div>
      nuxtServerInit
      global_middleware
      layout_middleware
      page_middleware
    <br />
    <button @click="show=!show">toggle component</button>
    <LifeCycle v-if="show"/>
  </div>
</template>

<script>
  import LifeCycle from '../components/LifeCycle.vue';
// eslint-disable-next-line promise/param-names
const getData = (t) =>
  new Promise((resovle) => {
    setTimeout(() => {
      resovle({ name: new Date()});
    }, t);
  });
export default {
  name: "IndexPage",
  layout: "defaultLayout",
  async asyncData() {
    const data = await getData(5000);
    console.log("page_asyncData" + new Date());
    return { asyncData: data };
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
      show:true,
      fetchData: {},
      createdData: {},
      mountedData: {},
    };
  },
  async fetch() {
    console.log("page_start_fetch" + new Date());
    this.fetchData = await getData(5000);
    // eslint-disable-next-line no-console
    console.log("page_fetch" + new Date());
    // 有keep alive且共用layout就不會進到fetch
  },
  beforeCreate (){
    console.log("page_beforeCreate" + new Date());
  },
  async created() {
    console.log("page_start_created" + new Date());
    this.createdData = await getData(5000);
    // eslint-disable-next-line no-console
    console.log("page_created" + new Date());
  },
  beforeMount(){
    console.log("page_beforeMount");
  },
  async mounted (){
    console.log("page_start_mounted" + new Date());
    this.mountedData = await getData(5000);
    console.log("page_mounted"+ new Date());
  },
  components:{
    LifeCycle
  }
};
</script>
