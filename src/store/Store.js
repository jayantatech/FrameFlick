import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";
import FlimPageSlice from "./FlimPageSlice";

const store = configureStore({
  reducer: {
    home: HomeSlice,
    filmPage: FlimPageSlice,
  },
});

export default store;
