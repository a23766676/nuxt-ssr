<template>
  <div>
      <nuxt-link to="window">window</nuxt-link>
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
