import React, { useEffect, useState } from "react";
import MyImage from "../../../components/myImage/MyImage";
import fetchData from "../../../components/hooks/fetchData";
import { useSelector } from "react-redux";
import MovieHeroInfo from "../../../components/movieHeroInfo/MovieHeroInfo";

const HeroMovie = () => {
  const [storeGen, setStoreGen] = useState([]);
  const [filmInfo, setFilmInfo] = useState([]);
  const [storeRendom, setStoreRendom] = useState(null);
  const { data, loading } = fetchData(`trending/movie/week`);
  const { url, filmGenres } = useSelector((state) => state.home);

  useEffect(() => {
    const genRanNum = Math.floor(Math.random() * data?.results?.length);
    testData = data?.results[genRanNum];
  }, []);

  let testData;
  useEffect(() => {
    let storeGenNum = [];
    if (testData) {
      filmGenres?.forEach((element) => {
        if (testData?.genre_ids.includes(element?.id)) {
          storeGenNum.push(element);
        }
      });
    }
    setStoreGen(storeGenNum);
  }, [filmGenres]);

  return (
    <div className=" w-full h-[590px] max-md:h-[670px] bg-black relative">
      <div className=" w-full h-full bg-[#0000005d] absolute top-0 left-0 z-10"></div>
      <div className=" overflow-hidden w-full h-full absolute top-0 left-0 z-0 ">
        <MyImage
          src={`${url}${!loading && testData?.backdrop_path}`}
          className={"max-lg:scale-150 max-md:scale-[4]"}
        />
      </div>
      <MovieHeroInfo testData={testData} storeGen={storeGen} />
    </div>
  );
};

export default HeroMovie;
