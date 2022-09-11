<template>
  <div>
      keepalive2
  </div>
</template>

<script>
export default {
  name: "keepalive2",
  layout: "keepalive",
   asyncData() {
    console.log('keepalive2_asyncData')
  },
  middleware(context) {
    console.log('keepalive2_middleware')
  },

  // 參數的有效性
  validate(context) {
    console.log('keepalive2_validate')
    return true;
  },
  fetch() {
    console.log('keepalive2_fetch')
  },
  created() {
    console.log('keepalive2_created');
  },
  mounted (){
    console.log('keepalive2_mounted');
  },
  activated(){
    console.log('keepalive2_activated');
  },
  deactivated(){
    console.log('keepalive2_deactivated');
  },
  destroyed(){
    console.log('keepalive2_destroyed');
  }
};
</script>
