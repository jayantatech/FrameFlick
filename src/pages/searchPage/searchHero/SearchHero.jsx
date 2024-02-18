import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import fetchData from "../../../components/hooks/fetchData";
import SearchHeroBox from "../../../components/searchHeroBox/SearchHeroBox";

const SearchHero = () => {
  const [storeGenres, setStoreGenres] = useState(null);
  const { data, loading } = fetchData("movie/popular");
  const [heroData, setHeroData] = useState([]);
  const imageAdd = useSelector((state) => state.home.url);
  useEffect(() => {
    const heroInfo = [];
    for (let i = 0; i < 3; i++) {
      let rendom = Math.floor(Math.random() * data?.results?.length - 1);
      if (
        !heroInfo.includes(data?.results[rendom]) &&
        data?.results[rendom] !== undefined
      ) {
        heroInfo.push(data?.results[rendom]);
      }
    }
    setHeroData(heroInfo);
  }, [data]);

  const { data: genresData, loading: genresLoading } = fetchData(
    `genre/movie/list?language=en`
  );

  useEffect(() => {
    setStoreGenres(genresData?.genres?.slice(0, 8));
  }, [genresData]);
  const demoData = data?.results[3];
  return (
    <ContentWrapper>
      <div className=" w-full h-[670px] max-lg:h-[470px] max-md:h-[230px] bg-[#000] rounded-2xl shadow-lg overflow-hidden my-4 relative">
        <div className=" w-full h-[670px] max-md:h-full md:-mt-4 bg-contain bg-[#000000]">
          <div className="absolute bottom-0 left-0 w-full h-full z-10 bg-[#00000085] scale-y-150 object-cover"></div>
          <img
            src={`${imageAdd + demoData?.backdrop_path}`}
            className={"  w-full h-full bg-black"}
          />
          <div className="w-full h-full z-10 absolute top-0 left-0 flex items-center justify-center">
            <div className=" w-[80%] max-lg:w-[90%] h-[450px] max-md:h-[160px] max-md:w-[95%] bg-[#a19d9d] backdrop-filter backdrop-blur-sm bg-opacity-50 rounded-lg shadow-md px-8 py-7 max-lg:px-2 max-lg:py-2 flex items-center flex-col justify-center gap-5">
              <SearchHeroBox data={storeGenres} isMobile={false} />
              <div
                className={`w-[90%] h-[60px] max-lg:w-[90%] max-md:w-[95%] bg-white flex items-center justify-center rounded-xl py-1 px-1 transition-all max-md:flex-col max-md:h-[120px] `}
              >
                <input
                  type="text"
                  placeholder="Search Movies/TV Shows"
                  className=" w-full h-full bg-transparent outline-none text-[Roboto] font-bold text-[#000] text-xl pl-4 placeholder:text-[#0000005b]"
                />
                <button className=" w-[240px] h-full bg-[#30B170] hover:bg-[black] hover:scale-95 transition-all duration-300 font-[Roboto] font-bold text-2xl rounded-lg text-white max-md:w-full">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchHeroBox data={storeGenres} isMobile={true} />
    </ContentWrapper>
  );
};

export default SearchHero;
