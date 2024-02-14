import React, { useState } from "react";

const FilmMore = () => {
  const [pageToshow, setPageToshow] = useState(10);

  return (
    <div className=" w-full h-auto flex items-center justify-center pt-8">
      <div className=" w-fit px-3 h-[60px] bg-[#fff] shadow-xl rounded-md flex items-center justify-center gap-6">
        <div className=" w-[40px] h-[40px] bg-[#000] text-white rounded-md flex items-center justify-center font-bold text-2xl cursor-pointer hover:bg-[#30B170] transition-all duration-200">
          1
        </div>
      </div>
    </div>
  );
};

export default FilmMore;
