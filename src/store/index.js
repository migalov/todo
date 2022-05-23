import { createStore } from "vuex";

export default createStore({
  state: {
    ftodos: [],
    todos: [
      { id: "1", title: "Complete online JavaScript course", status: true },
      { id: "2", title: "Jog around the park 3x", status: false },
      // { id: "3", title: "10 minutes meditation", status: false },
      // { id: "4", title: "Read for 1 hour", status: false },
      // { id: "5", title: "Pick up groceries", status: false },
      // { id: "6", title: "Complete Todo App on Frontend Mentor", status: false },
    ]
  },
  getters: {
    allTodos: (state) => state.todos,
    activeTodos: (state) => state.todos.map(todo => todo.status == false),
    completedTodos: (state) => state.todos.filter(todo => todo.status === true)
  },
  actions: {
    addTodo({commit}, todo) {
      commit("add_todo", todo)
    },
    removeTodo({commit}, id) {
      commit('remove_todo', id)
    }
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      console.log(state.todos);
      console.log(todo);
    },
    remove_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    }
  },
  modules: {

  }
})