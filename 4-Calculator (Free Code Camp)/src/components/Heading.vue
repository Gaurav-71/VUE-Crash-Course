<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    msg: Object
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 1em;
  color: white;
}
</style>