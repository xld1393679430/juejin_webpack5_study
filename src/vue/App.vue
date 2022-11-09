<template>
  <div class="vue-container">
    <h2>我是vue</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "Hello World" };
  },
};
</script>

<style>
.vue-container {
  color: red;
}
</style>
