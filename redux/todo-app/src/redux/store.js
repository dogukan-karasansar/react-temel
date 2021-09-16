import { configureStore } from "@reduxjs/toolkit";
import  todosSlice  from "./todos/index";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
