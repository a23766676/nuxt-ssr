<template>
  <div>
      thisPage
  </div>
</template>

<script>
export default {
  name: "thisPage",
  layout: "none",
  data() {
    return {
        a: 'a'
    }
  },
   middleware(context) {
    console.log('middleware_'+this)
  },

  // 參數的有效性
  validate(context) {
    console.log('validate_'+this)
    // console.log(this)
    // console.log(this.data())
    return true;
  },
  asyncData() {
    console.log('asyncData_'+this)
  },
  fetch() {
    console.log('fetch_'+this)
    // console.log(this)
    // console.log(this.a)
  },
  beforeCreate() {
    console.log('beforeCreate_'+this);
  },
  created() {
    console.log('created_'+this);
  },
  mounted (){
    console.log('mounted_'+this);
  },
};
</script>
