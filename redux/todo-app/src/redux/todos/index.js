import { createSlice } from "@reduxjs/toolkit";
import { getTodoAsync, addTodoAsync, toggleTodoAsync, removeTodoItem } from './services';



export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    activeFilter:
      localStorage.getItem("activeFilter") != null
        ? localStorage.getItem("activeFilter")
        : "all",
    isLoading: false,
    error: "",
    addNewTodo: {
      isLoading: false,
      error: "",
    },
  },
  reducers: {
    /* toggle: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    }, */
    /*  destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    }, */
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filter = state.items.filter((item) => item.completed === false);
      state.items = filter;
    },
  },
  extraReducers: {
    //get todos
    [getTodoAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodoAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getTodoAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    //add todo
    [addTodoAsync.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.addNewTodo.isLoading = false;
    },
    [addTodoAsync.pending]: (state, action) => {
      state.addNewTodo.isLoading = true;
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.addNewTodo.isLoading = false;
      state.addNewTodo.error = action.error.message;
    },
    //toggletodo
    [toggleTodoAsync.fulfilled]: (state, action) => {
      const { id, completed } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items[index].completed = completed;
    },
    [removeTodoItem.fulfilled]: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items.splice(index, 1);
    },
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectActiveFilter = (state) => {
  return state.todos.activeFilter;
};
export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }

  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "active"
      ? todo.completed === false
      : todo.completed === true
  );
};
export const { changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
