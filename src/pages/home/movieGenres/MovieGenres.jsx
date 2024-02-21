import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import fetchData from "../../../components/hooks/fetchData";
import SliderComponent from "../../../components/sliderComponent/SliderComponent";

const MovieGenres = () => {
  const [storeGenres, setStoreGenres] = useState([]);
  const [activeGenres, setActiveGenres] = useState(null);
  const { data: genresData, loading: genresLoading } = fetchData(
    `genre/movie/list?language=en`
  );
  const { data, loading } = fetchData(
    `discover/movie?with_genres=${activeGenres?.id}`
  );

  useEffect(() => {
    if (!genresLoading && genresData) {
      setStoreGenres(genresData?.genres?.slice(0, 14));
      setActiveGenres(genresData?.genres?.slice(0, 14)[0]);
    }
  }, [genresData]);

  return (
    <div className=" py-16 my-14">
      <ContentWrapper>
        <div className=" ">
          <h2 className="text-3xl font-bold font-[Roboto] pb-6">
            {`All-Time ${
              activeGenres?.name ? activeGenres?.name : "My"
            } Favorites`}
          </h2>
          <div className=" px-2 rounded-lg shadow-xl pb-4 bg-[#fff]">
            <SliderComponent data={data && data} loading={loading} />
          </div>
        </div>
        <div className=" py-6 px-4 bg-[#FFFFFF] shadow-2xl rounded-xl translate-y-3">
          <div className=" px-2 pb-3">
            <h2 className=" text-2xl font-bold text-center font-[Roboto]">
              Explore By Genres
            </h2>
          </div>
          <div className=" flex items-center flex-wrap justify-center gap-4 max-md:gap-3 ">
            {storeGenres?.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`px-3 h-[40px] max-md:h-[30px] max-md:text-lg text-xl rounded-lg text-white font-bold font-[Roboto] shadow-lg transition-all duration-300 hover:shadow-2xl capitalize ${
                    item === activeGenres ? "bg-green-600" : "bg-[#000000]"
                  }`}
                  onClick={() => setActiveGenres(item)}
                >
                  {item?.name}
                </button>
              );
            })}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default MovieGenres;
