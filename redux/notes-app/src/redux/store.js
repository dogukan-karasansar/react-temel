import { configureStore } from "@reduxjs/toolkit";
import NoteSlice from "./notes";

export const store = configureStore({
  reducer: {
    notes: NoteSlice,
  },
});
