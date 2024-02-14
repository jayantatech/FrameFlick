import React from "react";

const responsiveTitle = () => {
  return (
    <h2 className=" text-3xl font-bold font-[Roboto] text-white">
      {getTheTittle(data?.original_title)}
    </h2>
  );
};

export default responsiveTitle;
