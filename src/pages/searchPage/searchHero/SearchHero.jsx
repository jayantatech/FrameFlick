import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import fetchData from "../../../components/hooks/fetchData";
import SearchHeroBox from "../../../components/searchHeroBox/SearchHeroBox";
import { setStoreText } from "../../../store/SearchSlice";

const SearchHero = () => {
  const [storeGenres, setStoreGenres] = useState(null);
  const [imgData, setImgData] = useState(null);
  const { data, loading } = fetchData("movie/upcoming");
  const imageAdd = useSelector((state) => state.home.url);

  const { data: genresData, loading: genresLoading } = fetchData(
    `genre/movie/list?language=en`
  );

  useEffect(() => {
    setStoreGenres(genresData?.genres?.slice(0, 8));
  }, [genresData]);

  const inputRef = useRef(null);
  const dispatch = useDispatch();
  function inputSubmit() {
    if (inputRef?.current?.value.length > 0) {
      dispatch(setStoreText(inputRef.current.value));
    }
    inputRef.current.value = "";
  }

  useEffect(() => {
    if (data?.results) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setImgData(data.results[randomIndex]);
    }
  }, [data]);

  return (
    <ContentWrapper>
      <div className=" w-full h-[670px] max-lg:h-[470px] max-md:h-[230px] bg-[#000] rounded-2xl shadow-lg overflow-hidden my-4 relative">
        <div className=" w-full h-[670px] max-md:h-full md:-mt-4 bg-contain bg-[#000000]">
          <div className="absolute bottom-0 left-0 w-full h-full z-10 bg-[#00000085] scale-y-150 object-cover"></div>
          {imgData && (
            <img
              src={`${imageAdd + imgData?.backdrop_path}`}
              className={"w-full h-full bg-black scale-105"}
            />
          )}
          <div className="w-full h-full z-10 absolute top-0 left-0 flex items-center justify-center">
            <div className=" w-[80%] max-lg:w-[90%] h-[450px] max-md:h-[160px] max-md:w-[95%] bg-[#a19d9d] backdrop-filter backdrop-blur-sm bg-opacity-50 rounded-lg shadow-md px-8 py-7 max-lg:px-2 max-lg:py-2 flex items-center flex-col justify-center gap-5">
              <div className=" max-md:hidden md:min-h-[280px] md:px-4">
                <SearchHeroBox data={storeGenres} />
              </div>
              <div
                className={`w-[95%] h-[60px] max-lg:w-[95%] max-md:w-[95%] bg-white flex items-center justify-center rounded-md py-1 px-1 transition-all max-md:flex-col max-md:h-[120px] `}
              >
                <input
                  type="text"
                  placeholder="Search Movies/TV Shows"
                  className=" w-full h-full bg-transparent outline-none text-[Roboto] font-bold text-[#000] text-xl pl-2 placeholder:text-[#0000005b]"
                  ref={inputRef}
                />
                <button
                  className=" w-[240px] h-full bg-[#30B170] hover:bg-[black] hover:scale-95 transition-all duration-300 font-[Roboto] font-bold text-2xl rounded-md text-white max-md:w-full"
                  onClick={inputSubmit}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:hidden max-md:h-[340px]">
        <SearchHeroBox data={storeGenres} isMobile={true} />
      </div>
    </ContentWrapper>
  );
};

export default SearchHero;
