import { createSlice } from "@reduxjs/toolkit";

const FlimPageSlice = createSlice({
  name: "FlimPage",
  initialState: {
    pageNo: 1,
  },
  reducers: {
    changePage: (state, action) => {
      state.pageNo = action.payload;
    },
  },
});

export const { changePage } = FlimPageSlice.actions;

export default FlimPageSlice.reducer;
