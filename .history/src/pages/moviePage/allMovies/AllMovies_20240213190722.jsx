import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import FilmCard from "../../../components/filmCard/FilmCard";

const AllMovies = () => {
  return (
    <div>
      <ContentWrapper>
        <div className=" py-[60px] px-3">
          <div className=" py-3">
            <h2 className=" capitalize text-3xl font-[Roboto] font-bold">
              our Movie suggestions
            </h2>
          </div>
          <div className=" w-full h-auto flex py-5 flex-row flex-wrap gap-4 items-center justify-between">
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
          </div>
          <div className=" w-full h-[60px] bg-[#fff] shadow-xl rounded-md">
            <span className=" w-[30px] h-[30px] bg-blue-500"></span>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default AllMovies;
