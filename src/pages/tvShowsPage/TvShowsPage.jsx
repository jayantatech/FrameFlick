import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../components/hooks/fetchData";
import { useEffect, useState } from "react";
import HeroShows from "./heroShows/HeroShows";
import AllShows from "./allShows/AllShows";
import { setCurrentTabValu } from "../../store/HomeSlice";

const TvShowsPage = () => {
  const [moviePageNo, setMoviePageNo] = useState(1);
  const [storeHeroData, setStoreHeroData] = useState(null);
  const [storeTab, setStoreTab] = useState("movies");
  const { data, loading } = fetchData(
    `tv/top_rated?language=en-US&page=${moviePageNo}`
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
    dispatch(setCurrentTabValu("tv"));
  }, [storeTab]);

  return (
    <>
      <HeroShows data={storeHeroData} loading={loading} />
      <AllShows data={data} />
    </>
  );
};

export default TvShowsPage;
