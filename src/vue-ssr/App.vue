<template>
  <div class="vue-container">
    <h2>vue-ssr</h2>
    <p class="message">{{ message }}</p>
  </div>
</template>

<script lang="typescript">
// type message = String;

export default {
  data() {
    return { message: "Hello World" };
  },
};
</script>

<style lang="less">
.vue-container {
  color: red;
  .message {
    color: lightgreen;
  }
}
</style>
