import React from "react";
import HeroMovie from "./heroMovie/HeroMovie";
import AllMovies from "./allMovies/AllMovies";
import fetchData from "../../components/hooks/fetchData";

const MoviePage = () => {
  const { data, loading } = fetchData(`trending/movie/week`);
  console.log(data);
  return (
    <div>
      <HeroMovie data={data} loading={loading} />
      <AllMovies />
    </div>
  );
};

export default MoviePage;
