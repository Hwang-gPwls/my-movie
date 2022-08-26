import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "features/news/newsSlice";

export const store = configureStore({
  reducer: { news: newsSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
