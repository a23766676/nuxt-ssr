<template>
  <div>
      keepalive
  </div>
</template>

<script>
export default {
  name: "keepalive",
  layout: "keepalive",
  asyncData() {
    console.log('keepalive_asyncData')
  },
  middleware(context) {
    console.log('keepalive_middleware')
  },

  // 參數的有效性
  validate(context) {
    console.log('keepalive_validate')
    return true;
  },
  fetch() {
    console.log('keepalive_fetch')
  },
  created() {
    console.log('keepalive_created');
  },
  mounted (){
    console.log('keepalive_mounted');
  },
  activated(){
    console.log('keepalive_activated');
  },
  deactivated(){
    console.log('keepalive_deactivated');
  },
  destroyed(){
    console.log('keepalive_destroyed');
  }
};
</script>
