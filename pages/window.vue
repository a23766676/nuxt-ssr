<template>
  <div>
      WindowPage
  </div>
</template>

<script>
export default {
  name: "WindowPage",
  layout: "none",
  asyncData() {
    console.log(window)
  },
  middleware(context) {
    console.log(window)
  },

  // 參數的有效性
  validate(context) {
    console.log(window)
    return true;
  },
  fetch() {
    console.log(window)
  },
  created() {
    console.log(window);
  },
  mounted (){
    console.log(window);
  },
};
</script>
