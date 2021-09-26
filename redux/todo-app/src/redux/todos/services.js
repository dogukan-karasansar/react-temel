import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodoAsync = createAsyncThunk(
  "todos/getTodoAsync/",
  async () => {
    const response = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`
    );
    return response.data;
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async ({ id, data }) => {
    const resp = await axios.patch(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`,
      data
    );
    return resp.data;
  }
);

export const removeTodoItem = createAsyncThunk(
  "todos/removeTodo",
  async ({ id }) => {
    await axios.delete(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`
    );
    return id;
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
