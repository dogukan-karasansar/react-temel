import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "characters/getAsync",
  async () => {
    const res = await axios(`${process.env.REACT_APP_BASE_ENDPOINT}/characters`);
    return res.data;
  }
);

export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default characterSlice.reducer;
