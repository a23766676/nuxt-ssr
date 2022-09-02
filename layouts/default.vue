<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "default",
  middleware() {
    console.log("layout_middleware");
  },
};
</script>
