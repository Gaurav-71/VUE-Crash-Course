<template>
  <div class="header">
    <div class="brand">Quiz App</div>
    <div class="score">Score : {{numCorrect}}/{{numTotal}}</div>
  </div>
</template>

<script>
export default {
  props: ["numCorrect", "numTotal"]
};
</script>

<style scoped>
.header {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 70% 30%;
  background-color: #262626;
  padding: 1.5em;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);
  border-bottom: 2px solid black;
}
.brand {
  font-size: 2em;
  text-transform: uppercase;
  color: #ff8700;
}
.score {
  text-align: right;
  padding-top: 0.2em;
  font-size: 1.5em;
}
</style>