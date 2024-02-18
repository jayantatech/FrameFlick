import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";
import FlimPageSlice from "./FlimPageSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    home: HomeSlice,
    filmPage: FlimPageSlice,
    searchPage: SearchSlice,
  },
});

export default store;
