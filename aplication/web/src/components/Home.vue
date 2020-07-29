<template>
  <div class="user">
    <img :src="user.avatar">
    <h1>{{ user.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    user: []
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{
  font-family: 'Courier New', Courier, monospace;
}
</style>
