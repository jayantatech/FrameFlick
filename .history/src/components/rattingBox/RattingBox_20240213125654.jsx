import React from "react";

const RattingBox = () => {
  return (
    <div className=" text-lg font-extrabold font-[Roboto] flex items-center justify-start gap-2 px-2 py-1 rounded-lg bg-white md:w-[150px]  max-md:w-[50%]">
      Rating:
      <span className=" text-[#ffd700] text-2xl flex items-center justify-center font-bold">
        <IoStar />
      </span>
      {`${Math.floor(averageVote)}.${
        votePointer ? votePointer.toString().slice(0, 1) : "0"
      }`}
    </div>
  );
};

export default RattingBox;
