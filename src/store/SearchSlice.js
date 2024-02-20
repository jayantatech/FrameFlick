import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "SearchData",
  initialState: {
    storeText: null,
    storeGenresData: null,
    genresText: "",
    headerActive: false,
  },
  reducers: {
    setStoreText: (state, action) => {
      console.log(action);
      state.storeText = action.payload;
    },
    setStoreGenresData: (state, action) => {
      state.storeGenresData = action.payload;
    },
    setSetGenresText: (state, action) => {
      state.genresText = action.payload;
    },
    setHeaderActive: (state, action) => {
      state.headerActive = action.payload;
    },
  },
});

export const {
  setStoreText,
  setStoreGenresData,
  setSetGenresText,
  setHeaderActive,
} = SearchSlice.actions;

export default SearchSlice.reducer;
