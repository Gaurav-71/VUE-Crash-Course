import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "ToDo List",
    todos: [],
  },
  mutations: {
    ADD_TODO(state, newTodo) {
      state.todos.push(newTodo);
    },
    DELETE_TODO(state, index) {
      state.todos.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
