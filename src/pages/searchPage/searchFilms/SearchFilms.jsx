import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import FilmCard from "../../../components/filmCard/FilmCard";
import FilmMore from "../../../components/filmMore/FilmMore";
import { useSelector } from "react-redux";

const SearchFilms = ({ searchInfo, data, loading, isMorePage = true }) => {
  return (
    <div>
      <ContentWrapper>
        <div className=" py-[60px] px-3">
          <div className=" py-3">
            <h2 className=" capitalize text-3xl font-[Roboto] font-bold">
              Search: {searchInfo}
            </h2>
          </div>
          {isMorePage && <FilmMore data={data} />}

          <div className=" w-full h-auto flex py-6 flex-row flex-wrap gap-4 items-center justify-between max-md:justify-center min-h-[750px]">
            {data?.results?.map((item, index) => (
              <FilmCard
                key={index}
                data={item}
                loading={loading}
                tabTo={item?.media_type}
              />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default SearchFilms;
