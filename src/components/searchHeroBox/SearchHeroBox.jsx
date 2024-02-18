// import React, { useEffect, useState } from "react";
// import GenresCard from "../genresCard/GenresCard";
// import fetchData from "../hooks/fetchData";
// import { useDispatch } from "react-redux";
// import { setStoreGenresData } from "../../store/SearchSlice";

// const SearchHeroBox = ({ data }) => {
//   const [activeGenres, setActiveGenres] = useState(null);
//   const { data: genresData, loading: genresLoading } = fetchData(
//     `discover/movie?with_genres=${activeGenres?.id}`
//   );
//   const dispatch = useDispatch();

//   function findGenres(genresValu) {
//     setActiveGenres(genresValu);
//     if (activeGenres) {
//       dispatch(setStoreGenresData(activeGenres));
//     }
//   }

//   // useEffect(() => {
//   //   if (activeGenres?.results?.length) {
//   //     dispatch(setStoreGenresData(activeGenres));
//   //   }
//   // }, [genresData]);

//   return (
//     <div className={`flex items-center justify-center flex-col`}>
//       <h3 className=" font-[Roboto] bg-[#000]  text-white w-fit py-1 px-2 rounded-md font-bold">
//         Search by Genres
//       </h3>
//       <div className=" py-3 gap-3 flex items-center justify-center flex-wrap min-h-[260px] my-2 bg-[#00000062] w-[750px] max-lg:w-[550px] max-md:w-full max-md:h-[370px]  rounded-lg shadow-xl">
//         {data?.map((item) => (
//           <div onClick={() => findGenres(item)}>
//             <GenresCard key={item?.id} item={item} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchHeroBox;

import React, { useEffect, useState } from "react";
import GenresCard from "../genresCard/GenresCard";
import fetchData from "../hooks/fetchData";
import { useDispatch } from "react-redux";
import { setSetGenresText, setStoreGenresData } from "../../store/SearchSlice";

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
      <div className=" py-3 gap-3 flex items-center justify-center flex-wrap min-h-[260px] my-2 bg-[#00000062] w-[750px] max-lg:w-[550px] max-md:w-full max-md:h-[370px]  rounded-lg shadow-xl">
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
