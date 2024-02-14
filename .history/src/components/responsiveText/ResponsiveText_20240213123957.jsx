import React from "react";

const ResponsiveText = ({ data, upTo }) => {
  function getTheDescription(description) {
    const words = description.split(" ").slice(0, 20).join(" ") + "...";
    return words;
  }
  return (
    <p className=" font-[Poppins] text-lg text-white ">
      {data && getTheDescription(data?.overview)}
    </p>
  );
};

export default ResponsiveText;
