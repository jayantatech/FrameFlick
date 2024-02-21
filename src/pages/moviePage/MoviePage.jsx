import React, { useState, useEffect } from "react";
import HeroMovie from "./heroMovie/HeroMovie";
import AllMovies from "./allMovies/AllMovies";
import fetchData from "../../components/hooks/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTabValu } from "../../store/HomeSlice";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTabValu("movie"));
  }, []);
  return (
    <>
      <HeroMovie data={storeHeroData} loading={loading} tab={"Movies"} />
      <AllMovies data={data} />
    </>
  );
};

export default MoviePage;
