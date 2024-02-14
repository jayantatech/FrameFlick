import React, { useEffect } from "react";
import Header from "./components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setFilmGenres, setUrl } from "./store/HomeSlice";
import Home from "./pages/home/Home";
import fetchData from "./components/hooks/fetchData";
import VideoPopBox from "./components/videoPopBox/VideoPopBox";
import Footer from "./components/footer/Footer";
import ReviewPage from "./pages/reviewPage/ReviewPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./pages/moviePage/MoviePage";

/* 
main green color - #58DAA8
2nd main color - #30b170
light green color - #E6FFF8
deep Green color - #409E7A
deep Green color 2 - #5EBEA3

*/

const App = () => {
  const { data, loading } = fetchData("configuration");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUrl(`${data?.images.secure_base_url + "original"}`));
  }, [data]);

  const { data: genresData, loading: genresLoading } = fetchData(
    `genre/movie/list?language=en`
  );
  useEffect(() => {
    dispatch(setFilmGenres(genresData && genresData?.genres));
  }, [genresData]);

  return (
    <BrowserRouter>
      <VideoPopBox />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:film/:id" element={<ReviewPage />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
      {/* <div className=" w-full h-[800px]"></div> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
