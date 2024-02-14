import React from "react";

const ResponsiveTitle = ({ data }) => {
  function getTheTittle(titleWord) {
    let newTitle = titleWord?.split("");
    if (newTitle.length > 0 && newTitle?.length < 30) {
      return newTitle.join("");
    } else {
      return newTitle?.slice(0, 28).join("") + "...";
    }
  }
  return (
    <h2 className=" text-3xl font-bold font-[Roboto] text-white">
      {getTheTittle(data?.original_title)}
    </h2>
  );
};

export default ResponsiveTitle;
