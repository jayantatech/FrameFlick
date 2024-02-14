import React, { useState, useEffect } from "react";
import HeroMovie from "./heroMovie/HeroMovie";
import AllMovies from "./allMovies/AllMovies";
import fetchData from "../../components/hooks/fetchData";
import FilmMore from "../../components/filmMore/FilmMore";
import { useSelector } from "react-redux";

const MoviePage = () => {
  const [moviePageNo, setMoviePageNo] = useState(1);
  const [storeHeroData, setStoreHeroData] = useState(null);
  const { data, loading } = fetchData(
    `movie/top_rated?language=en-US&page=${moviePageNo}`
  );

  const { pageNo } = useSelector((state) => state.filmPage);

  useEffect(() => {
    setMoviePageNo(pageNo);
  }, [pageNo]);

  useEffect(() => {
    if (data && !storeHeroData) {
      setStoreHeroData(data);
    }
  }, [data, storeHeroData]);

  return (
    <>
      <HeroMovie data={storeHeroData} loading={loading} />
      <AllMovies data={data} />
    </>
  );
};

export default MoviePage;
