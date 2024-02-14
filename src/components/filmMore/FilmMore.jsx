import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../store/FlimPageSlice";
const FilmMore = () => {
  const [pageToshow, setPageToshow] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [storePage, setStorePage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePage(storePage));
  }, [storePage]);

  return (
    <div className=" w-full h-auto flex items-center justify-center pt-8">
      <div className=" w-fit px-3 h-[110px] bg-[#E5FFF8] shadow-xl rounded-md flex items-center justify-center flex-col gap-3">
        <h4 className=" text-xl font-bold bg-green-500 px-2 font-[Roboto] rounded-lg text-white shadow-md hover:scale-95 transition-all duration-200 cursor-pointer">
          Find by Pages
        </h4>
        <div className=" flex items-center justify-center gap-6 max-md:h-auto max-md:flex-wrap max-md:gap-3 max-md:py-4 max-md:w-full">
          {pageToshow.map((item, index) => (
            <div
              className={`w-[40px] h-[40px]  text-white rounded-md flex items-center justify-center font-bold text-2xl cursor-pointer hover:bg-[#30B170] transition-all duration-200 shadow-xl hover:scale-95 ${
                item === storePage ? "bg-[#30B170]" : "bg-[#000]"
              }`}
              onClick={() => setStorePage(item)}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmMore;
