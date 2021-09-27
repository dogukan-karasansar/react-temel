import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const NoteSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      { note: "note 1", color: "yellow" },
      { note: "note 2", color: "pink" },
    ],
    filterKey: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    filterSelectKey: (state, action) => {
      state.filterKey = action.payload;
    },
  },
});
export const { addNote, filterSelectKey } = NoteSlice.actions;
export default NoteSlice.reducer;
