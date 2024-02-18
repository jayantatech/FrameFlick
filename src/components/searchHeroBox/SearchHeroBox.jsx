import React, { useEffect, useState } from "react";
import GenresCard from "../genresCard/GenresCard";

const SearchHeroBox = ({ data }) => {
  return (
    <div className={`flex items-center justify-center flex-col`}>
      <h3 className=" font-[Roboto] bg-[#000]  text-white w-fit py-1 px-2 rounded-md font-bold">
        Search by Genres
      </h3>
      <div className=" py-3 gap-3 flex items-center justify-center flex-wrap min-h-[260px] my-2 bg-[#00000062] w-[750px] max-lg:w-[550px] max-md:w-full max-md:h-[370px]  rounded-lg shadow-xl">
        {data?.map((item) => (
          <GenresCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchHeroBox;
