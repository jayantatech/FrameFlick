import React from "react";

const DateBox = ({ data }) => {
  function timeFormath(timeTo) {
    const releaseDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    }).format(new Date(timeTo));
    return releaseDate;
  }
  return (
    <div className=" text-lg font-extrabold font-[Roboto] flex items-center justify-start gap-2 px-2 py-1 rounded-lg bg-white md:w-[160px] max-md:w-[50%]">
      Data:
      <span className="font-bold max-md:text-base">
        {data && timeFormath(data?.release_date)}
      </span>
    </div>
  );
};

export default DateBox;
