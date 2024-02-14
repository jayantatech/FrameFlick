import React, { useEffect, useState } from "react";
import MyImage from "../myImage/MyImage";
import fetchData from "../hooks/fetchData";
import { useSelector } from "react-redux";

const GenresCard = ({ item }) => {
  const [storeImage, setStoreImage] = useState([]);

  const { url } = useSelector((state) => state.home);

  const { data, loading } = fetchData(`discover/movie?with_genres=${item?.id}`);

  useEffect(() => {
    const rendomNum = Math.floor(Math.random() * data?.results?.length);
    setStoreImage(data?.results[rendomNum]);
  }, [data]);
  return (
    <>
      {" "}
      {item && (
        <div className=" w-[160px] h-[90px] max-lg:h-[70px] max-md:w-[150px] bg-[#000] rounded-lg shadow-md cursor-pointer hover:scale-95 transition-all duration-200 relative overflow-hidden">
          <div className=" w-full h-full bg-[#0000005b] absolute top-0 left-0 z-10"></div>
          <MyImage src={`${url}${storeImage?.backdrop_path}`} />
          <div className=" z-30 absolute top-0 left-0 w-full h-full flex items-end justify-center ">
            <h3 className="text-lg max-md:text-[16px] text-white font-[Roboto] font-bold capitalize">
              {item?.name}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default GenresCard;
