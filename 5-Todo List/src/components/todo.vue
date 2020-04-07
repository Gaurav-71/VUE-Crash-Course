<template>
  <div class="todo">
    <h1>{{ title }}</h1>
    <form @submit.prevent="addTodo">
      <input type="text" placeholder="+ Enter a new todo" v-model="newTodo" />
    </form>
    <ul>
      <li v-for="(todo,index) in todos" :key="index">
        {{ todo }}
        <button @click="deleteTodo(index)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "todo",
  data() {
    return {
      newTodo: ""
    };
  },
  computed: {
    ...mapState(["title", "todos"])
  },
  methods: {
    ...mapMutations(["ADD_TODO", "DELETE_TODO"]),
    addTodo: function() {
      this.ADD_TODO(this.newTodo);
      this.newTodo = "";
    },
    deleteTodo: function(index) {
      this.DELETE_TODO(index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo {
  margin-top: 5em;
  border-radius: 1em;
  background-color: none;
  h1 {
    text-align: center;
    color: orangered;
  }
  form {
    width: 100%;
    input {
      width: calc(100% - 40px);
      border-radius: 1em;
      background-color: rgb(15, 14, 14);
      padding: 20px;
      font-size: 1.3em;
      border: 2px solid black;
      border-radius: 1em;
      box-shadow: 0 0 10px black;
      color: grey;
      outline: none;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    margin-top: 30px;
    list-style-type: none;
    color: orangered;
    border: 2px solid black;
    border-radius: 1em;
    box-shadow: 0 0 10px black;
    li {
      text-align: left;
      padding: 20px;
      font-size: 1.3em;
      border-bottom: 1px solid black;
      button {
        background-color: rgb(15, 14, 14);
        color: gainsboro;
        border: 2px solid black;
        float: right;
        cursor: pointer;
        width: 28px;
        height: 28px;
        border-radius: 50%;
      }
    }
  }
}
</style>
