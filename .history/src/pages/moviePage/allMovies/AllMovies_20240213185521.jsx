import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import FilmCard from "../../../components/filmCard/FilmCard";

const AllMovies = () => {
  return (
    <div>
      <ContentWrapper>
        <h2 className=" capitalize text-3xl font-[Roboto]">
          our Movie suggestions
        </h2>
        <div className=" w-full h-auto flex py-5 flex-row flex-wrap gap-6 items-center justify-start px-4">
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default AllMovies;
