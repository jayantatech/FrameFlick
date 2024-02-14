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
          <div className=" w-full h-auto flex py-6 flex-row flex-wrap gap-4 items-center justify-between">
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
          </div>
          <div className=" w-full h-auto flex items-center justify-center pt-8">
            <div className=" w-fit px-3 h-[60px] bg-[#fff] shadow-xl rounded-md flex items-center justify-center gap-6">
              <div className=" w-[40px] h-[40px] bg-[#000] text-white rounded-md flex items-center justify-center font-bold text-2xl cursor-pointer hover:bg-[#30B170] ">
                1
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default AllMovies;
