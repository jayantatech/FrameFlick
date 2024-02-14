import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    filmGenres: [],
    VideoPopBox: {
      vidboxOn: false,
      vidBoxInfo: {},
    },
    currentTabValu: "movie",
  },
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setFilmGenres: (state, action) => {
      // console.log(action);
      state.filmGenres = action.payload;
    },
    setVideoPopBox: (state, action) => {
      state.VideoPopBox.vidboxOn = action.payload[0].vidBoxOnPass;
      state.VideoPopBox.vidBoxInfo = action.payload[0].vidBoxInfoPass;
    },
    setCurrentTabValu: (state, action) => {
      state.currentTabValu = action.payload;
    },
  },
});

export const { setUrl, setFilmGenres, setVideoPopBox, setCurrentTabValu } =
  homeSlice.actions;
export default homeSlice.reducer;
