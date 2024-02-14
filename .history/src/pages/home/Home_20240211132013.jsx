import React from "react";
import ComingAttractions from "./comingAttractions/ComingAttractions";
import CurrentFavorites from "./currentFavorites/CurrentFavorites";
import MovieGenres from "./movieGenres/MovieGenres";
import HeroTop from "./heroTop/HeroTop";

const Home = () => {
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
