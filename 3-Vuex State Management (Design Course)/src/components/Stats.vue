<template>
  <div>
    <h1>A different component</h1>
    <p>There are currently {{ countLinks }} links</p>
    <button @click="removeAllLinks()">Remove all links</button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Stats",
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    ...mapGetters(["countLinks"])
  },
  methods: {
    ...mapMutations(["REMOVE_ALL"]),
    ...mapActions(["removeAll"]),
    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = "All links have been deleted";
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
