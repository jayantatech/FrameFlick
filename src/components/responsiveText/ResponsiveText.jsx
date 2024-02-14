import React from "react";

const ResponsiveText = ({ data, upTo = 20 }) => {
  function getTheDescription(description) {
    const words = description.split(" ").slice(0, upTo).join(" ") + "...";
    return words;
  }
  return (
    <p className=" font-[Poppins] text-lg text-white ">
      {data && getTheDescription(data?.overview)}
    </p>
  );
};

export default ResponsiveText;
