import React from "react";
import { IoStar } from "react-icons/io5";

const RattingBox = ({ data }) => {
  const averageVote = data && data?.vote_average;

  const votePointer = Number(
    data && data?.vote_average.toString().split(".")[1]
  );

  return (
    <div className=" text-lg font-extrabold font-[Roboto] flex items-center justify-start gap-2 px-2 py-1 rounded-lg bg-white md:w-[150px]  max-md:w-[50%]">
      Rating:
      <span className=" text-[#ffd700] text-2xl flex items-center justify-center font-bold">
        <IoStar />
      </span>
      {votePointer === NaN &&
        `${Math.floor(averageVote)}.${
          votePointer ? votePointer.toString().slice(0, 1) : "0"
        }`}
    </div>
  );
};

export default RattingBox;
