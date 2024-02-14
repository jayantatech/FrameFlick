import React from "react";

const BothButton = () => {
  return (
    <>
      <button className=" w-full h-[50px] max-lg:h-[40px] bg-[#000] rounded-md text-white font-bold text-2xl font-[Roboto] hover:scale-95 transition-all duration-300 max-lg:text-xl">
        Trailer
      </button>
      <button className=" w-full h-[50px] bg-[#30B170] rounded-md text-white font-bold text-2xl font-[Roboto]  hover:scale-95 transition-all duration-300 max-lg:h-[40px] max-lg:text-xl">
        Learn More
      </button>
    </>
  );
};

export default BothButton;
