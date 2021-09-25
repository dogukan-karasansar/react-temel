import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodoAsync = createAsyncThunk(
  "todos/getTodoAsync/",
  async () => {
    const response = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);
    return response.data;
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`,
      data
    );
    return response.data;
  }
);
export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    activeFilter: "all",
    isLoading: false,
    error: "",
    addTodoLoading: false,
    addNewTodoError: "",
  },
  reducers: {
    toggle: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
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
      state.addTodoLoading = false;
    },
    [addTodoAsync.pending]: (state, action) => {
      state.addTodoLoading = true;
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.addTodoLoading = false;
      state.addNewTodoError = action.error.message;
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
export const { toggle, destroy, changeActiveFilter, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
