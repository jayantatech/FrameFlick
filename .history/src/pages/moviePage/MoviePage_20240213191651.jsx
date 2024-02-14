import React from "react";
import HeroMovie from "./heroMovie/HeroMovie";
import AllMovies from "./allMovies/AllMovies";

const MoviePage = () => {
  const { data, loading } = fetchData(`trending/movie/week`);

  return (
    <div>
      <HeroMovie data={data} loading={loading} />
      <AllMovies />
    </div>
  );
};

export default MoviePage;
