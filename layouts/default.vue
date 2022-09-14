<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "default",
  // middleware:'auth',
  middleware() {
    console.log("layout_middleware");
  },
};
</script>
