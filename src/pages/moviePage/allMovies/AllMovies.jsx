import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import FilmCard from "../../../components/filmCard/FilmCard";
import FilmMore from "../../../components/filmMore/FilmMore";

const AllMovies = ({ data, loading }) => {
  return (
    <div>
      <ContentWrapper>
        <div className=" py-[60px] px-3">
          <div className=" py-3">
            <h2 className=" capitalize text-3xl font-[Roboto] font-bold">
              our Movie suggestions
            </h2>
          </div>
          <FilmMore data={data} />

          <div className=" w-full h-auto flex py-6 flex-row flex-wrap gap-4 items-center justify-between max-md:justify-center">
            {data?.results?.map((item, index) => (
              <FilmCard key={index} data={item} loading={loading} />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default AllMovies;
