import React from "react";
import { IoIosStar } from "react-icons/io";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import GenresCard from "../genresCard/GenresCard";
import BothButton from "../bothButton/BothButton";

const MovieHeroInfo = ({ filmInfo, storeGen }) => {
  const averageVote = filmInfo && testData?.vote_average;

  const votePointer = Number(
    filmInfo && filmInfo?.vote_average.toString().split(".")[1]
  );
  function timeFormath(timeTo) {
    const releaseDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    }).format(new Date(timeTo));
    return releaseDate;
  }
  return (
    <ContentWrapper>
      <div className=" relative top-0 left-0 w-full h-[590px] max-md:h-[670px] flex items-end justify-center py-4 z-40">
        <div className=" w-full min-h-[230px] max-lg:min-h-[270px] max-md:min-h-[470px] rounded-lg  bg-[#636262] backdrop-filter backdrop-blur-sm bg-opacity-60 p-4 max-lg:px-2 flex flex-row gap-2 max-md:flex-col">
          <div className=" md:w-3/6 ">
            <h2 className=" text-3xl font-[Roboto] font-bold text-white min-h-[40px]">
              {filmInfo?.original_title}
            </h2>
            <div className=" w-full h-[40px]  my-2 flex items-center flex-row gap-2 px-2">
              {
                <div className=" flex items-center justify-center gap-1 text-2xl font-bold bg-[#fff] px-2 h-full w-[160px] rounded-md">
                  <span className=" font-[Roboto] text-xl max-lg:text-lg">
                    Ratting:
                  </span>
                  <span className=" text-2xl  text-[#FFD700]">
                    <IoIosStar />
                  </span>
                  <span className=" max-lg:text-lg">
                    {averageVote &&
                      `${Math.floor(averageVote)}.${
                        votePointer ? votePointer.toString().slice(0, 1) : "0"
                      }`}{" "}
                  </span>
                </div>
              }
              {filmInfo && (
                <div className="flex items-center justify-center gap-2 bg-white px-2 h-full rounded-md">
                  <span className=" text-xl max-lg:text-lg font-[Roboto] font-bold">
                    Date:
                  </span>
                  <div className="flex items-center justify-center gap-1 text-xl max-lg:text-lg font-bold">
                    {filmInfo && timeFormath(filmInfo?.release_date)}
                  </div>
                </div>
              )}
            </div>
            {storeGen && (
              <div className=" w-full h-[40px]  flex items-center justify-start px-2 flex-row gap-2">
                {storeGen.map((item) => (
                  <span
                    key={item.id}
                    className="px-1.5 h-[30px] border-l-[3px] border-[#30B170] flex items-center justify-center font-bold font-[Roboto] text-white"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            )}

            <div className=" px-2 py-3 flex items-center justify-center gap-2 flex-row">
              <BothButton />
            </div>
          </div>
          <div className=" md:w-3/6 max-h-[210px] max-lg:max-h-[240px] max-md:min-h-[240px] px-3 py-3 flex items-center justify-start gap-6 max-lg:gap-3 flex-wrap flex-col">
            <div className=" w-full py-1 bg-[#000] text-white text-center rounded-md">
              <span className=" font-[Roboto] font-semibold text-lg">
                {" "}
                {filmInfo?.original_title} Genres
              </span>
            </div>
            <div className=" flex items-center justify-center gap-3 flex-wrap flex-row max-md:flex-row ">
              {storeGen?.map((item, index) => (
                <GenresCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default MovieHeroInfo;
