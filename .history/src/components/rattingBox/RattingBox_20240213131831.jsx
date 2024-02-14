import React from "react";
import { IoStar } from "react-icons/io5";

const RattingBox = ({ data }) => {
  const averageVote = data && data?.vote_average;

  const votePointer = Number(
    data && data?.vote_average.toString().split(".")[1]
  );

  return (
    {averageVote && votePointer && 

    }

  );
};

export default RattingBox;
