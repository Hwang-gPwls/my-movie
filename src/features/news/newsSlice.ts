import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { News } from "./types";
import { restAuthTimesNews } from "api/news";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await restAuthTimesNews();
  return response;
});

type EntitesType = {
  status: string;
  copyright: string;
  num_results: number;
  results: News[];
};

interface NewsState {
  entities: EntitesType;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: NewsState = {
  entities: { status: "", copyright: "", num_results: 200, results: [] },
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
      if (state.entities) {
        state.entities = action.payload;
      }
    });
  },
});

export default newsSlice;
