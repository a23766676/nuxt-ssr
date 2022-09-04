<template>
  <div>
    只要是SSR的時期的方法都無法取得 window，
    fetch可用fetchOnServer控制
  </div>  
</template>

<script>
export default {
  name: "clear",
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    // console.log(window)
  },
  layout:'none',
  //無法取得 window
  //除非控制fetch為非SSR
  fetchOnServer:false,
  fetch() {
    console.log(window)
  },
  created() {
    // console.log(window)
    console.log('created')
  },
};
</script>
