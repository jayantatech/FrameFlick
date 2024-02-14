import React, { useState } from "react";
import HeroMovie from "./heroMovie/HeroMovie";
import AllMovies from "./allMovies/AllMovies";
import fetchData from "../../components/hooks/fetchData";
import FilmMore from "../../components/filmMore/FilmMore";

const MoviePage = () => {
  const [moviePageNo, setMoviePageNo] = useState(1);
  const { data, loading } = fetchData(
    // `trending/movie/week?page=${moviePageNo}`
    `movie/top_rated?language=en-US&page=1`
  );
  return (
    <div>
      <HeroMovie data={data} loading={loading} />
      <AllMovies data={data} />
      <FilmMore />
    </div>
  );
};

export default MoviePage;
