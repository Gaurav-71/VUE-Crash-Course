<template>
  <div id="app">
    <Heading msg="Calculator App" />
    <Calculator />
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import Heading from "./components/Heading.vue";

export default {
  name: "App",
  components: {
    Calculator,
    Heading
  }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 80%;
}

body {
  margin-top: 7em;
  background-color: black;
}
</style>
