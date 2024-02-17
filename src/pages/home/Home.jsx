import React, { useEffect } from "react";
import ComingAttractions from "./comingAttractions/ComingAttractions";
import CurrentFavorites from "./currentFavorites/CurrentFavorites";
import MovieGenres from "./movieGenres/MovieGenres";
import HeroTop from "./heroTop/HeroTop";
import { useDispatch } from "react-redux";
import { setCurrentTabValu } from "../../store/HomeSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTabValu("movie"));
  }, []);

  return (
    <div>
      <HeroTop />
      <CurrentFavorites />
      <ComingAttractions />
      <MovieGenres />
    </div>
  );
};

export default Home;
