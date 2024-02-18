import React, { useEffect, useState } from "react";
import MyImage from "../../../components/myImage/MyImage";
import { useDispatch, useSelector } from "react-redux";
import MovieHeroInfo from "../../../components/movieHeroInfo/MovieHeroInfo";

const HeroShows = ({ data }) => {
  const [storeGen, setStoreGen] = useState([]);
  const [storeRendom, setStoreRendom] = useState(null);
  const { url, filmGenres } = useSelector((state) => state.home);

  useEffect(() => {
    let rendomData;
    if (data?.results) {
      const genRanNum = Math.floor(Math.random() * 19);
      rendomData = data?.results[genRanNum];
      setStoreRendom(rendomData);
    }
  }, [data]);

  let movieHeroData = storeRendom && storeRendom;
  useEffect(() => {
    let storeGenNum = [];
    if (movieHeroData) {
      filmGenres?.forEach((element) => {
        if (movieHeroData?.genre_ids.includes(element?.id)) {
          storeGenNum.push(element);
        }
      });
    }
    setStoreGen(storeGenNum);
  }, [filmGenres, movieHeroData]);
  return (
    <div className=" w-full h-[590px] max-md:h-[670px] bg-black relative">
      <div className=" w-full h-full bg-[#0000005d] absolute top-0 left-0 z-10"></div>
      <div className=" overflow-hidden w-full h-full absolute top-0 left-0 z-0 ">
        <MyImage
          src={`${url}${movieHeroData?.backdrop_path}`}
          className={"max-lg:scale-150 max-md:scale-[4]"}
        />
      </div>
      <MovieHeroInfo
        movieHeroData={movieHeroData}
        storeGen={storeGen}
        page={"Tv Shows"}
      />
    </div>
  );
};

export default HeroShows;