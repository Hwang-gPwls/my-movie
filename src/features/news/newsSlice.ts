import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { News } from "./types";
import { restAuthTimesNews } from "api/news";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await restAuthTimesNews();
  return response;
});

interface NewsState {
  entities: News[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: NewsState = {
  entities: [],
  loading: "idle",
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = "idle";
      state.entities.push(action.payload);
    });
  },
});

export default newsSlice;
