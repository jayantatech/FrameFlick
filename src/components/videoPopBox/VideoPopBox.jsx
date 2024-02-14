import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setVideoPopBox } from "../../store/HomeSlice";
import ReactPlayer from "react-player";

const VideoPopBox = () => {
  const [activeVideo, setActiveVideo] = useState(false);
  const [videoInfo, setVideoInfo] = useState([]);
  const dispatch = useDispatch();
  const { vidboxOn, vidBoxInfo } = useSelector(
    (state) => state.home.VideoPopBox
  );
  useEffect(() => {
    if (vidboxOn) setActiveVideo(vidboxOn);
    if (vidBoxInfo) setVideoInfo(vidBoxInfo);
  }, [vidboxOn, vidBoxInfo]);

  // useEffect(() => {
  //   if (activeVideo) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [activeVideo]);

  function hideVideoBox() {
    dispatch(setVideoPopBox([{ vidBoxOnPass: false, vidBoxInfoPass: {} }]));
    setActiveVideo(false);
  }

  return (
    <div
      className={` fixed w-screen h-screen top-0 left-0 ${
        activeVideo ? "block z-40" : "hidden -z-0"
      }`}
    >
      <div
        className={` relative top-0 left-0 min-h-screen min-w-screen flex items-center justify-center overflow-hidden`}
      >
        <div
          className=" absolute top-0 left-0 w-full h-full bg-[#000000af]"
          onClick={hideVideoBox}
        ></div>
        <div
          className={`w-[840px] h-[540px] max-lg:w-[660px] max-lg:h-[440px] max-md:w-[360px] max-md:h-[240px] bg-[#fff] shadow-xl rounded-xl py-4 px-4 relative transition-all duration-300 ${
            activeVideo ? "translate-y-[0%]" : "translate-y-[150%]"
          }`}
        >
          <div
            className=" w-[50px] h-[50px] bg-[#30B170] hover:bg-[#58DAA8] text-black hover:text-gray-600  absolute -top-5 -right-5 rounded-full flex items-center justify-center text-4xl cursor-pointer"
            onClick={hideVideoBox}
          >
            <IoClose />
          </div>
          <div className=" w-full h-full bg-black">
            {videoInfo && (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoInfo?.key}`}
                width={"100%"}
                height={"100%"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPopBox;
