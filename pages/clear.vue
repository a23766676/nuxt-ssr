<template>
  <div>
    <LifeCycle />
  </div>
</template>

<script>
import LifeCycle from "../components/LifeCycle.vue";
export default {
  name: "clear",
  components: {
    LifeCycle,
  },
  //控制fetch是否為SSR
  fetchOnServer:false,
  //無法取得 window
  fetch() {
    console.log(window)
  },
  created() {
    console.log(window)
  },
};
</script>
