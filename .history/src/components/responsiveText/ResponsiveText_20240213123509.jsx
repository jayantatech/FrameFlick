import React from "react";

const ResponsiveText = () => {
  return (
    <p className=" font-[Poppins] text-lg text-white ">
      {data && getTheDescription(data?.overview)}
    </p>
  );
};

export default ResponsiveText;
