import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import ReactVideo from "../../../components/reactVideo/ReactVideo";

const VideoSection = ({ data, loading }) => {
  const [checkVideo, setCheckVideo] = useState(false);
  const maninVideo = data?.results[2];
  const sameVideo = data?.results.slice(3, 7) || [];
  useEffect(() => {
    if (maninVideo?.length > 0 || sameVideo?.length > 0) setCheckVideo(true);
  }, [maninVideo, sameVideo]);

  return (
    <div
      className={`${
        checkVideo ? "block" : "hidden"
      } w-full h-[490px] max-lg:h-auto`}
    >
      <ContentWrapper>
        <h2 className=" text-2xl font-bold font-[Roboto] pt-6">
          Videos Section
        </h2>
        <div className="w-auto bg-[#f5efef] h-[390px] max-lg:h-[810px] max-md:h-auto my-3 flex flex-row p-3 gap-3 shadow-lg rounded-lg max-lg:flex-col items-center justify-center">
          <div
            className={`${
              maninVideo ? "block" : "hidden"
            } w-[50%] max-lg:w-full h-full max-lg:h-1/2 bg-black transition-all duration-300 hover:scale-[.98] p-1`}
          >
            {!loading && <ReactVideo data={maninVideo?.key} />}
          </div>
          {sameVideo.length > 0 && (
            <div className=" w-[50%] max-lg:w-full h-full max-lg:h-1/2 grid grid-flow-col grid-cols-4 grid-rows-4 bg-black p-1 gap-2 max-md:h-[760px] max-md:grid-flow-row max-md:grid-cols-1 max-md:grid-rows-4">
              {sameVideo?.length > 0 &&
                sameVideo?.map((item, index) => {
                  return (
                    <div className=" col-span-2 row-span-2 bg-black transition-all duration-300 hover:scale-[.97]">
                      {!loading && <ReactVideo data={item?.key} />}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default VideoSection;
