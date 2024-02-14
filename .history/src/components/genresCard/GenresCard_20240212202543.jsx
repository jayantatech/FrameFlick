import React, { useEffect, useState } from "react";
import MyImage from "../myImage/MyImage";
import fetchData from "../hooks/fetchData";
import { useSelector } from "react-redux";

const GenresCard = ({ item }) => {
  const [storeImage, setStoreImage] = useState([]);

  const { url } = useSelector((state) => state.home);

  const { data, loading } = fetchData(`discover/movie?with_genres=${item}`);

  useEffect(() => {
    setStoreImage(data?.results[0]);
  }, [data]);
  // console.log(storeImage);
  return (
    <div className=" w-[160px] h-[90px] bg-red-300 rounded-lg shadow-md cursor-pointer hover:scale-95 transition-all duration-200 relative overflow-hidden">
      <div className=" w-full h-full bg-[#0000003a] absolute top-0 left-0 z-10"></div>
      <MyImage src={`${url}${storeImage?.backdrop_path}`} />
      <h3>{item?.name}</h3>
    </div>
  );
};

export default GenresCard;
