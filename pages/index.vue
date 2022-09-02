<template>
  <div>
    Page
    <br />
    asyncData:{{ asyncData.name }}
    <br />
    fetchData:{{ fetchData.name }}
    <br />
    createdData:{{ createdData.name }}
    <br />
    mountedData:{{ mountedData.name }}
    <br />
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
    console.log("index_asyncData" + new Date());
    return { asyncData: data };
  },
  middleware() {
    console.log("index_middleware");
  },
  // 參數的有效性
  validate() {
    //校驗業務
    console.log("index_validate");
    return true;
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
    console.log("index_start_fetch" + new Date());
    this.fetchData = await getData(5000);
    // eslint-disable-next-line no-console
    console.log("index_fetch" + new Date());
    // 有keep alive且共用layout就不會進到fetch
  },
  beforeCreate (){
    console.log("index_beforeCreate" + new Date());
  },
  async created() {
    console.log("index_start_created" + new Date());
    this.createdData = await getData(5000);
    // eslint-disable-next-line no-console
    console.log("index_created" + new Date());
  },
  beforeMount(){
    console.log("index_beforeMount");
  },
  async mounted (){
    console.log("index_start_mounted" + new Date());
    this.mountedData = await getData(5000);
    console.log("index_mounted"+ new Date());
  },
  components:{
    LifeCycle
  }
};
</script>
