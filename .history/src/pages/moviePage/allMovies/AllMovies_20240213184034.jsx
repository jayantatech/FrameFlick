import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import FilmCard from "../../../components/filmCard/FilmCard";

const AllMovies = () => {
  return (
    <div>
      <ContentWrapper>
        <div className=" w-full h-auto flex py-5 flex-row flex-wrap gap-3">
          <FilmCard />
          <FilmCard />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default AllMovies;
