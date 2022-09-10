<template>
  <div>
      thisPage
  </div>
</template>

<script>
export default {
  name: "thisPage",
  layout: "none",
  asyncData() {
    console.log(this)
  },
  fetch() {
    console.log(this)
  },
  created() {
    console.log(this);
  },
  mounted (){
    console.log(this);
  },
};
</script>
