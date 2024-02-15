import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import fetchData from "../hooks/fetchData";
import ReactPlayer from "react-player";

const VideoBox = ({ dataInfo }) => {
  const [videoList, setVideoList] = useState([]);
  const [videoLoad, setVideoLoad] = useState(false);
  const { data, loading } = fetchData(`movie/${dataInfo?.id}/videos`);
  useEffect(() => {
    if (data?.results) {
      const videoArry = data?.results?.filter((item) => item?.key);
      setVideoList(videoArry);
      setVideoLoad(true);
    }
  }, [dataInfo]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  let isTabActive = window.innerWidth >= 768 && window.innerWidth <= 992;

  const opts = {
    height: isTabActive ? "140" : "150",
    width: isTabActive ? "210" : "240",
    playerVars: {
      autoplay: false,
    },
  };

  useEffect(() => {
    if (isTabActive && videoList.length > 3) {
      setVideoList(videoList.slice(0, 3));
    }
  }, [videoList]);

  return (
    // <ContentWrapper>
    <div
      className={` ${
        videoList?.length >= 1 ? "block" : "hidden"
      } flex flex-row items-center justify-between gap-3 w-full xl:h-[190px] max-xl:h-[170px] px-4 relative`}
    >
      <div className=" absolute top-0 left-0 -z-10 rounded-xl bg-[#ffffff98] inset-0 backdrop-blur-xl opacity-50"></div>

      {videoList?.map((item, index) => {
        return (
          <div
            key={index}
            className="xl:w-[240px] xl:h-[150px] max-xl:w-[210px] max-xl:h-[140px] bg-[#00000080] rounded-md transition-all duration-300 hover:scale-110"
          >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${item?.key}`} />
          </div>
        );
      })}
    </div>
    // {/* </ContentWrapper> */}
  );
};

export default VideoBox;
