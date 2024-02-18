import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "SearchData",
  initialState: {
    storeText: null,
  },
  reducers: {
    setStoreText: (state, action) => {
      state.storeText = action.payload;
    },
  },
});

export const { setStoreText } = SearchSlice.actions;

export default SearchSlice.reducer;
