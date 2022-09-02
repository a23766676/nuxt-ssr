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
  //無法取得 window
  created() {
    console.log(window)
  },
};
</script>
