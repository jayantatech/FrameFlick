import React from "react";

const FilmDetails = ({ creditsData, loading }) => {
  function findTheName(creditsPath, path, jobRoll) {
    let filmDirecting = creditsData?.[creditsPath].filter(
      (item) => item?.[path] === jobRoll
    );

    let storeName = [];

    filmDirecting?.filter((item) => {
      if (!storeName.includes(item.name) && item?.name?.length < 30) {
        storeName.push(item.name);
        return true;
      }
      return false;
    });
    return storeName;
  }

  const directed = findTheName("crew", "known_for_department", "Directing");
  const writingName = findTheName("crew", "known_for_department", "Writing");
  const actingName = findTheName("cast", "known_for_department", "Acting");
  return (
    <div className=" bg-[#30b17048] w-full h-[75%] max-md:h-[85%] rounded-lg px-4 py-2 shadow-lg hover:scale-[.98] transition-all duration-300 mt-3">
      <span className=" text-2xl font-bold font-[Roboto] capitalize">
        film Details
      </span>
      <div className=" flex flex-col gap-2 w-full h-[110px] mt-2">
        {directed?.length > 0 && (
          <div className=" flex items-start flex-col justify-between gap-1">
            <span className=" font-[Roboto] text-bese">Directed:</span>
            <div className=" text-end font-[Poppins] font-bold flex items-center justify-center gap-2 text-[15px]">
              {directed[0] && (
                <span className=" px-2 bg-[#30B170] rounded-lg text-white">
                  {directed[0]}
                </span>
              )}
              {directed[1] && (
                <span className=" px-2 bg-[#000] rounded-lg text-white">
                  {directed[1]}
                </span>
              )}
            </div>
          </div>
        )}

        {writingName?.length > 0 && (
          <div className=" flex items-start flex-col justify-between gap-1">
            <span className=" font-[Roboto] text-bese">Writing:</span>
            <div className=" text-end font-[Poppins] font-bold flex items-center justify-center gap-2 text-[15px]">
              {writingName[0] && (
                <span className=" px-2 bg-[#30B170] rounded-lg text-white">
                  {writingName[0]}
                </span>
              )}
              {writingName[1] && (
                <span className=" px-2 bg-[#000] rounded-lg text-white">
                  {writingName[1]}
                </span>
              )}
            </div>
          </div>
        )}

        {actingName?.length > 0 && (
          <div className=" flex items-start flex-col justify-between gap-1">
            <span className=" font-[Roboto] text-bese">Acting:</span>
            <div className=" text-end font-[Poppins] font-bold flex items-center justify-center gap-2 text-[15px]">
              {actingName[0] && (
                <span className=" px-2 bg-[#000] rounded-lg text-white">
                  {actingName[0]}
                </span>
              )}
              {actingName[1] && (
                <span className=" px-2 bg-[#30B170] rounded-lg text-white">
                  {actingName[1]}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmDetails;
