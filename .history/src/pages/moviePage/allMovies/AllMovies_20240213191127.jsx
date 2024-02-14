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
          <div className=" w-full">
            <div className=" w-fit px-3 h-[60px] bg-[#b42323] shadow-xl rounded-md flex items-center justify-center gap-6">
              <div className=" w-[40px] h-[40px] bg-[#30B170] text-white rounded-md flex items-center justify-center font-semibold">
                1
              </div>
              <div className=" w-[40px] h-[40px] bg-[#30B170] text-white rounded-md flex items-center justify-center font-semibold">
                1
              </div>
              <div className=" w-[40px] h-[40px] bg-[#30B170] text-white rounded-md flex items-center justify-center font-semibold">
                1
              </div>
              <div className=" w-[40px] h-[40px] bg-[#30B170] text-white rounded-md flex items-center justify-center font-semibold">
                1
              </div>
              <div className=" w-[40px] h-[40px] bg-[#30B170] text-white rounded-md flex items-center justify-center font-semibold">
                1
              </div>
              <div className=" w-[40px] h-[40px] bg-[#30B170] text-white rounded-md flex items-center justify-center font-semibold">
                1
              </div>
              <div className=" w-[40px] h-[40px] bg-[#30B170] text-white rounded-md flex items-center justify-center font-semibold">
                1
              </div>
              <div className=" w-[40px] h-[40px] bg-[#30B170] text-white rounded-md flex items-center justify-center font-semibold">
                1
              </div>
              <div className=" w-[40px] h-[40px] bg-[#30B170] text-white rounded-md flex items-center justify-center font-semibold">
                1
              </div>
              <div className=" w-[40px] h-[40px] bg-[#30B170] text-white rounded-md flex items-center justify-center font-semibold">
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
