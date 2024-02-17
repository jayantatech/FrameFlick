import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import fetchData from "../../../components/hooks/fetchData";
import { useDispatch, useSelector } from "react-redux";
import MyImage from "../../../components/myImage/MyImage";
import { useLocation, useNavigate, useParams } from "react-router";
import { IoStar } from "react-icons/io5";
import FilmDetails from "../../../components/filmDetails/FilmDetails";
import { setVideoPopBox } from "../../../store/HomeSlice";

const ReviewHero = ({ film, id, newData, loading: newloading }) => {
  const [loadingImg, setLoadingImg] = useState(false);
  const { data, loading } = fetchData(`${film}/${id}`);
  const { data: creditsData, loading: loadingData } =
    fetchData(`${film}/${id}/credits
  `);

  const { url } = useSelector((state) => state?.home);
  const oneVideo = newData?.results?.filter((item) => item?.key);
  const oneTrailer = oneVideo && oneVideo[0];
  const dispatch = useDispatch();
  const averageVote = data && data?.vote_average;
  const votePointer = Number(
    data && data?.vote_average.toString().split(".")[1]
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openVideoBox = () => {
    dispatch(
      setVideoPopBox([{ vidBoxOnPass: true, vidBoxInfoPass: oneTrailer }])
    );
  };
  console.log(data);
  return (
    <div className=" w-full max-md:h-[1460px] max-lg:h-[920px]">
      <div className=" w-full lg:h-[660px] max-lg:h-[430px] max-md:h-[410px] relative overflow-hidden flex items-center justify-center bg-black">
        <div className=" w-full h-full bg-[#00000073] absolute top-0 left-0 z-10"></div>
        {!loading && (
          <MyImage
            src={`${url}${data?.backdrop_path}`}
            className={"w-full h-full bg-cover max-md:scale-[3]"}
          />
        )}
      </div>
      <ContentWrapper>
        <div className=" relative w-full h-[410px] lg:h-[310px] z-20">
          <div className="h-full grid grid-flow-col max-md:grid-flow-row max-md:grid-cols-1 grid-cols-8 gap-3 -translate-y-40">
            <div className=" col-span-2 h-[420px] max-md:w-full max-lg:col-span-3 bg-cover flex p-2">
              <div
                className={
                  "w-full h-full rounded-lg transition-all duration-300 hover:scale-95 overflow-hidden bg-[#000]  max-md:h-full max-lg:h-[390px]"
                }
              >
                {!loading && (
                  <MyImage
                    src={`${url + data?.poster_path}`}
                    className={"scale-105"}
                  />
                )}
              </div>
            </div>
            <div className=" col-span-6 max-lg:col-span-5 w-full h-full px-3 py-2">
              <div className=" w-full min-h-[50px] max-h-[80px]">
                <h1 className=" text-4xl font-bold font-[Roboto] text-white max-md:text-black">
                  {data?.original_title || data?.original_name}
                </h1>
              </div>
              <div
                className=" w-full grid grid-flow-row max-lg:grid-flow-col lg:grid-cols-2 lg:grid-row-2 gap-2 max-lg:gap-5 max-lg:grid-cols-1 max-lg:grid-rows-4"
                style={{ height: "calc(100% - 50px)" }}
              >
                <div className="col-span-1 row-span-2 flex flex-col gap-2">
                  <div className=" w-full h-[30%]">
                    <div className=" min-w-auto w-fit max-w-[95%]  h-auto max-md:w-full mt-2 flex items-center flex-row justify-start gap-2 py-2 bg-[#C5E9D7] px-2 rounded-lg">
                      {averageVote && (
                        <div className="w-[100px] bg-black rounded-md flex items-center justify-center gap-1 px-2 text-white shadow-lg hover:scale-95 transition-all duration-300 cursor-pointer">
                          <IoStar className="text-3xl text-[#ffd700]" />
                          <span className=" text-3xl font-bold font-[Roboto]">
                            {`${Math.floor(averageVote)}.${
                              votePointer
                                ? votePointer.toString().slice(0, 1)
                                : "0"
                            }`}{" "}
                          </span>{" "}
                        </div>
                      )}
                      <div className=" flex items-center justify-start gap-4">
                        {data?.genres[0] && (
                          <span className="text-lg font-semibold font-[Roboto] px-2 md:h-[30px] bg-white rounded-md shadow-md hover:scale-95 transition-all duration-300 cursor-pointer">
                            {data?.genres[0]?.name}
                          </span>
                        )}
                        {data?.genres[1] && (
                          <span className="text-lg font-semibold font-[Roboto] px-2 md:h-[30px] bg-white rounded-md shadow-md hover:scale-95 transition-all duration-300 cursor-pointer">
                            {data?.genres[1]?.name}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className=" w-full h-[70%] px-2 py-1">
                    <div className=" w-full h-[142px] overflow-hidden mt-3 max-md:mt-0">
                      <p className=" font-[Poppins]">{data?.overview}</p>
                    </div>
                    <div className=" w-full h-[70px] 400 py-2 mt-3">
                      {oneTrailer && (
                        <button
                          className="flex items-center justify-center w-full h-full gap-2 text-xl font-bold bg-[#000] font-[Roboto] rounded-md text-white transition-all duration-300 hover:scale-95 shadow-xl"
                          onClick={openVideoBox}
                        >
                          Play Trailler
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className=" col-span-1 row-span-2 flex flex-col gap-2">
                  <div className=" w-full h-[30%] max-lg:hidden"></div>
                  <FilmDetails
                    creditsData={creditsData}
                    loading={loadingData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ReviewHero;
