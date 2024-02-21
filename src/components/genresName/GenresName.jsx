import React from "react";

const GenresName = (item) => {
  return (
    <span className="text-lg font-semibold font-[Roboto] px-2 md:h-[30px] bg-white rounded-md shadow-md hover:scale-95 transition-all duration-300 cursor-pointer">
      {item?.genres[0]?.name}
    </span>
  );
};

export default GenresName;
