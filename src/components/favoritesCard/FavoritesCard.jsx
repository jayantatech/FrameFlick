import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoStar } from "react-icons/io5";
import fetchData from "../hooks/fetchData";
import { setVideoPopBox } from "../../store/HomeSlice";
import MyImage from "../myImage/MyImage";
import { useNavigate } from "react-router";

const FavoritesCard = ({ data, loading, currentTabValu = "movie" }) => {
  const [videoBoxActive, setVideoBoxActive] = useState(false);
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state?.home);

  const { data: newData, loading: newLoading } = fetchData(
    `${currentTabValu}/${data?.id}/videos`
  );

  const averageVote = data && data?.vote_average;
  const votePointer = Number(
    data && data?.vote_average.toString().split(".")[1]
  );

  const originalTitle = data?.original_title || data?.name || "";
  let truncatedTitle;

  if (originalTitle.length >= 18) {
    truncatedTitle = originalTitle.slice(0, 18) + "...";
  } else {
    truncatedTitle = originalTitle;
  }

  let newReleaseDate = data?.release_date || data?.first_air_date;
  const oneVideo = newData?.results?.filter((item) => item?.key);
  const oneTrailer = oneVideo && oneVideo[0];
  const releaseDate =
    newReleaseDate &&
    new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    }).format(new Date(newReleaseDate));
  const openVideoBox = () => {
    dispatch(
      setVideoPopBox([{ vidBoxOnPass: true, vidBoxInfoPass: oneTrailer }])
    );
  };
  const navigateNew = useNavigate();

  const navigateToNewPage = () => {
    navigateNew(`/review/${currentTabValu}/${data?.id}`);
  };

  return (
    <div className="w-[250px] max-lg:max-w-[220px] max-lg:h-[380px] h-[430px] max-md:w-[240px] rounded-lg overflow-hidden shadow cursor-pointer transition-all duration-300 bg-yellow">
      <div className=" w-full h-full relative">
        <div className=" w-full h-[77%] bg-[#000000f3] overflow-hidden">
          {!loading && (
            <MyImage
              src={`${url}${data?.poster_path}`}
              className="w-full h-full"
            />
          )}
        </div>
        <div className="absolute flex flex-col bottom-0 left-0 w-full h-[30%] bg-gradient-to-b from-[#000000] via-[#000000] to-[#000000] p-2 rounded-tr-3xl text-white">
          <div className="w-full h-[30px] overflow-hidden">
            <h3 className=" text-white text-xl font-semibold">
              {truncatedTitle}
            </h3>
          </div>
          <div className=" flex gap-4">
            <p className=" font-bold">{releaseDate}</p>
            <span className=" flex items-center justify-center gap-2 font-bold">
              <span className=" font-bold text-xl text-[#FFD700]">
                <IoStar />
              </span>
              {`${Math.floor(averageVote)}.${
                votePointer ? votePointer.toString().slice(0, 1) : "0"
              }`}
            </span>
          </div>
          <div className=" w-full h-[50px] bg-white px-2 rounded-xl py-2 flex items-center justify-center gap-2 max-lg:gap-1 font-bold mt-2">
            {oneTrailer && (
              <button
                className=" h-full w-full bg-[black] col-span-1 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105"
                onClick={openVideoBox}
              >
                Trailer
              </button>
            )}
            <button
              className="h-full w-full bg-[#30B170] rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105"
              onClick={navigateToNewPage}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
