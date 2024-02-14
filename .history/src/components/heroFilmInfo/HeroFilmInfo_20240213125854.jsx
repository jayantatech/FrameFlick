import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import MyImage from "../myImage/MyImage";
import fetchData from "../hooks/fetchData";
import { setVideoPopBox } from "../../store/HomeSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import ResponsiveTitle from "../responsiveTitle/responsiveTitle";
import ResponsiveText from "../responsiveText/ResponsiveText";
import BothButton from "../bothButton/BothButton";

const HeroFilmInfo = ({ data, imageAdd }) => {
  function timeFormath(timeTo) {
    const releaseDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    }).format(new Date(timeTo));
    return releaseDate;
  }
  const dispatch = useDispatch();
  const averageVote = data && data?.vote_average;

  const votePointer = Number(
    data && data?.vote_average.toString().split(".")[1]
  );

  const { data: newData, loading: newLoading } = fetchData(
    `movie/${data?.id && data?.id}/videos`
  );
  const oneVideo = newData?.results?.filter((item) => item?.key);
  const oneTrailer = oneVideo && oneVideo[0];
  const openVideoBox = () => {
    dispatch(
      setVideoPopBox([{ vidBoxOnPass: true, vidBoxInfoPass: oneTrailer }])
    );
  };

  const navigateNew = useNavigate();

  const navigateToNewPage = () => {
    navigateNew(`review/${"movie"}/${data?.id}`);
  };
  return (
    <div className=" w-full md:h-[280px] max-md:hidden absolute bottom-0 flex items-center justify-center my-8">
      <div className=" h-full lg:w-[70%] min-md:w-[70%] max-lg:w-[90%] max-md:translate-y-24 max-lg:-translate-y-48 bg-[#747272] backdrop-filter backdrop-blur-sm bg-opacity-60 md:px-4 z-30 grid grid-flow-col max-md:grid-flow-row md:grid-cols-5 max-md:grid-rows-4 gap-10 max-lg:gap-24 rounded-lg">
        <div className="w-[170px] h-full flex items-center justify-center col-span-1 max-md:hidden transition-all duration-300 hover:scale-95 cursor-pointer">
          <MyImage
            src={`${imageAdd}${data?.poster_path}`}
            className={"w-full h-full rounded-md  "}
          />
        </div>
        <div className=" md:col-span-4 py-4 md:px-3 md:ml-6 max-md:px-3">
          <ResponsiveTitle data={data} />
          <div className=" w-full h-[100px] max-md:hidden">
            <ResponsiveText data={data} />
          </div>
          <div className=" flex items-center gap-3 max-md:py-2">
            <div className=" text-lg font-extrabold font-[Roboto] flex items-center justify-start gap-2 px-2 py-1 rounded-lg bg-white md:w-[160px] max-md:w-[50%]">
              Data:
              <span className="font-bold max-md:text-base">
                {data && timeFormath(data?.release_date)}
              </span>
            </div>
            <div className=" text-lg font-extrabold font-[Roboto] flex items-center justify-start gap-2 px-2 py-1 rounded-lg bg-white md:w-[150px]  max-md:w-[50%]">
              Rating:
              <span className=" text-[#ffd700] text-2xl flex items-center justify-center font-bold">
                <IoStar />
              </span>
              {`${Math.floor(averageVote)}.${
                votePointer ? votePointer.toString().slice(0, 1) : "0"
              }`}
            </div>
          </div>
          <div className=" flex items-center justify-center w-full h-[60px] mt-3 md:px-2 gap-2 py-1">
            <button
              className=" w-full h-full bg-black rounded-md text-white text-2xl font-bold transition-all duration-300 hover:scale-95"
              onClick={openVideoBox}
            >
              Trailer
            </button>
            <button
              className=" w-full h-full bg-[#30B170] rounded-md text-white text-2xl font-bold transition-all duration-300 hover:scale-95"
              onClick={navigateToNewPage}
            >
              Learn More
            </button>
            {/* <BothButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFilmInfo;
