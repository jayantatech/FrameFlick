import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "SearchData",
  initialState: {
    storeText: null,
    storeGenresData: null,
    genresText: "",
  },
  reducers: {
    setStoreText: (state, action) => {
      state.storeText = action.payload;
    },
    setStoreGenresData: (state, action) => {
      state.storeGenresData = action.payload;
    },
    setSetGenresText: (state, action) => {
      state.genresText = action.payload;
    },
  },
});

export const { setStoreText, setStoreGenresData, setSetGenresText } =
  SearchSlice.actions;

export default SearchSlice.reducer;
