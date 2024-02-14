import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import fetchData from "../../../components/hooks/fetchData";
import ReactPlayer from "react-player";

const HomeVideoBox = () => {
  const [videoOne, setVideoOne] = useState({});
  const [videoActive, setVideoActive] = useState({});
  const { data, loading } = fetchData(`movie/top_rated`);

  const videoFilter = data?.results?.filter((item) => item?.id);

  const genRendom = Math?.floor(Math.random() * videoFilter?.length);

  useEffect(() => {
    if (genRendom) {
      const videoToPlay = !isNaN(genRendom) && videoFilter[genRendom];
      console.log(videoToPlay);
    }
  }, [videoToPlay]);

  const { data: videoData, loading: videoLoading } = fetchData(
    `movie/${videoToPlay && videoToPlay?.id}/videos`
  );
  // console.log(videoToPlay);
  useEffect(() => {
    if (videoToPlay) {
      setVideoOne(videoToPlay);
    }
  }, []);

  useEffect(() => {
    setVideoActive();
  }, [videoActive]);

  return (
    <div>
      <ContentWrapper>
        <div className="w-full h-[620px] rounded-xl p-4">
          <div className=" w-full h-full bg-[#E5FFF8] rounded-xl p-3 shadow-2xl flex flex-col gap-3 items-center justify-center">
            <div className=" w-full h-[88%] bg-red-100">
              {
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${""}`}
                  width={"100%"}
                  height={"100%"}
                />
              }
            </div>
            <div className=" w-full h-[10%] flex items-center justify-center ">
              <button className=" h-full w-full bg-[#30B170] text-xl font-bold rounded-lg text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HomeVideoBox;
