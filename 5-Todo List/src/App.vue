<template>
  <div id="app">
    <todo />
  </div>
</template>

<script>
// @ is an alias to /src
import todo from "@/components/todo.vue";

export default {
  name: "App",
  components: {
    todo
  }
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  display: flex;
  justify-content: center;
  background-color: rgb(15, 14, 14);
}
#app {
  width: 70%;
}
</style>
