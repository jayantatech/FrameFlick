import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { useSelector } from "react-redux";
import VideoBox from "../../../components/videoBox/VideoBox";
import MyImage from "../../../components/myImage/MyImage";

const HeroPart = ({ data, loading }) => {
  const imageAdd = useSelector((state) => state.home.url);

  function getTheDescription(description) {
    const words = description.split(" ").slice(0, 30).join(" ") + "...";
    return words;
  }

  return (
    <div className="j w-full h-[720px] max-xl:h-[570px] bg-auto relative max-lg:h-[640px] z-10">
      <div className=" w-full h-full overflow-hidden bg-cover flex items-start justify-center absolute top-0 left-0 -z-20 bg-black">
        <div className="w-full h-full bg-[#00000096] max-md:bg-[#00000094] absolute top-0 left-0 max-md:scale-150"></div>
        <MyImage
          src={`${imageAdd}${data?.backdrop_path}`}
          className=" object-cover w-full h-full"
        />
      </div>
      <ContentWrapper>
        <div className=" flex flex-row items-center justify-center w-full h-full">
          <div className=" md:w-3/6 flex flex-col items-center justify-center h-full">
            <div className=" mt-20 max-xl:mt-4">
              <div className=" w-auto h-[120px] py-1 overflow-hidden flex items-end justify-Start mb-3">
                <h1 className=" font-[Roboto] text-5xl max-xl:text-3xl font-bold text-white">
                  {!loading && `${data?.original_title}`}
                </h1>
              </div>
              <div className=" w-auto h-[110px] max-xl:h-[130px] flex items-start justify-end overflow-hidden mt-2">
                <p className="text-white font-[Poppins] text-md">
                  {!loading &&
                    data?.overview &&
                    `${getTheDescription(data?.overview)}`}
                </p>
              </div>
              <div className="flex items-center justify-start gap-8 xl:mt-4 max-xl:pt-2">
                <button className=" flex items-center justify-center px-4 py-[6px] rounded-xl bg-[#30b170] hover:bg-[#409E7A] text-2xl font-[Roboto] font-semibold gap-1 text-white ">
                  {" "}
                  <span className=" w-[30px] h-[30px] bg-slate-100 text-2xl flex items-center justify-center rounded-full text-black">
                    <MdOutlineSlowMotionVideo />
                  </span>{" "}
                  Trailer
                </button>
                <button className=" flex items-center justify-center px-4 py-[4px] rounded-xl text-2xl font-[Roboto] border-2 border-[#30b170] hover:border-[#409E7A] hover:bg-[#409E7A] font-semibold gap-1 text-white">
                  {" "}
                  <span className=" w-[30px] h-[30px] bg-slate-100 text-xl flex items-center justify-center rounded-full text-black">
                    <FaLocationArrow />
                  </span>{" "}
                  Lern More
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-3/6 h-full"></div>
        </div>
        <div className=" w-full h-auto relative xl:mt-16 max-xl:pt-1 max-xl:mt-10">
          <VideoBox dataInfo={data} />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroPart;
