import React, { useEffect, useState } from "react";
import GenresCard from "../genresCard/GenresCard";
import fetchData from "../hooks/fetchData";
import { useDispatch } from "react-redux";
import { setSetGenresText, setStoreGenresData } from "../../store/SearchSlice";
import { useNavigate } from "react-router";

const SearchHeroBox = ({ data }) => {
  const [activeGenres, setActiveGenres] = useState({ id: 28, name: "Action" });
  const { data: genresData, loading: genresLoading } = fetchData(
    `discover/movie?with_genres=${activeGenres && activeGenres?.id}`
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (genresData) {
      dispatch(setStoreGenresData(genresData));
    }
  }, [activeGenres, dispatch]);

  function findGenres(genresValu) {
    setActiveGenres(genresValu);
    dispatch(setSetGenresText(genresValu));
  }

  return (
    <div className={`flex items-center justify-center flex-col`}>
      <h3 className=" font-[Roboto] bg-[#000]  text-white w-fit py-1 px-2 rounded-md font-bold">
        Search by Genres
      </h3>
      <div className=" py-3 gap-3 flex items-center justify-center flex-wrap min-h-full my-2 bg-[#00000062] max-md:h-auto rounded-lg shadow-xl">
        {data?.map((item) => (
          <div key={item?.id} onClick={() => findGenres(item)}>
            <GenresCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHeroBox;
