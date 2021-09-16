import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      { id: 1, title: "learn react", completed: true },
      { id: 2, title: "react hook", completed: false },
    ],
  },
  reducers: {},
});

export default todosSlice.reducer;
