import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router";
import SearchHeroBox from "../searchHeroBox/SearchHeroBox";
import fetchData from "../hooks/fetchData";
import { useDispatch, useSelector } from "react-redux";
import {
  setHeaderActive,
  setStoreGenresData,
  setStoreText,
} from "../../store/SearchSlice";

const SearchBarPage = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [activeGenres, setActiveGenres] = useState({ id: 28, name: "Action" });
  const [storeGenres, setStoreGenres] = useState(null);

  const { data: genresData, loading: genresLoading } = fetchData(
    `discover/movie?with_genres=${activeGenres && activeGenres?.id}`
  );
  const { data: genresData1, loading: genresLoading1 } = fetchData(
    `genre/movie/list?language=en`
  );

  const { headerActive } = useSelector((state) => state.searchPage);

  useEffect(() => {
    setStoreGenres(genresData1?.genres?.slice(0, 10));
  }, [genresData1]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (genresData) {
      dispatch(setStoreGenresData(genresData));
    }
  }, [activeGenres, dispatch]);
  const refValu = useRef();
  function searchPageShow() {
    dispatch(setHeaderActive(false));
  }
  function openSearchPage() {
    searchPageShow();
    inputSubmit();
    navigate("/search");
  }

  function inputSubmit() {
    if (refValu?.current?.value.length > 0) {
      dispatch(setStoreText(refValu.current.value));
    }
    refValu.current.value = "";
  }
  const onSearchHandler = () => {
    setOpenSearch(false);
    openSearchPage();
  };

  const navigate = useNavigate();

  useEffect(() => {
    setOpenSearch(headerActive);
  }, [headerActive]);

  function onKeyHandler(e) {
    if (e.key === "Enter") {
      onSearchHandler();
    }
  }

  const activeopenSearch = () => {
    setOpenSearch(false);
    // openSearchPage();
    searchPageShow();
    inputSubmit();
  };

  return (
    <div
      className={` fixed top-0 left-0 w-full h-full transition-all ${
        openSearch ? "block w-full h-full z-50" : "hidden"
      }`}
    >
      <div className="relative top-0 left-0 w-full h-full flex items-center justify-center">
        <div
          className=" absolute top-0 left-0 w-full h-full bg-[#0000009d]"
          onClick={activeopenSearch}
        ></div>
        <div
          className=" absolute top-[10%] max-md:right-10 max-md:top-[15%] right-[20%] w-[50px] h-[50px] bg-[#30B170] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3a805d] text-3xl z-10"
          onClick={activeopenSearch}
        >
          <IoMdClose />
        </div>
        <div className=" flex items-center justify-center flex-col w-full h-full overflow-hidden max-lg:-translate-y-11 max-md:translate-y-4 z-0">
          <div className=" items-center justify-center flex flex-col bg-[#7c7b7b] backdrop-filter backdrop-blur-sm bg-opacity-90 w-[970px] max-lg:w-[90%] px-4 py-5 rounded-lg gap-4 max-md:h-[690px]">
            <div
              className={`w-full h-[60px] bg-white flex items-center justify-center rounded-md py-1 px-1 transition-all max-md:flex-col max-md:h-[120px] ${
                openSearch ? "translate-y-0" : "translate-y-[550px]"
              }`}
            >
              <input
                type="text"
                placeholder="Search Movies/TV Shows"
                className=" w-full h-full bg-transparent outline-none text-[Roboto] font-bold text-[#000] text-xl pl-2 placeholder:text-[#0000005b] "
                onKeyDown={(e) => onKeyHandler(e)}
                ref={refValu}
              />
              <button
                className=" w-[240px] h-full bg-[#30B170] hover:bg-[black] hover:scale-95 transition-all duration-300 font-[Roboto] font-bold text-2xl rounded-md text-white max-md:w-full"
                onClick={onSearchHandler}
              >
                Search
              </button>
            </div>
            <div
              className=" w-full h-[270px] min-lg:min-h-auto max-lg:max-h-[390px]  max-md:h-[520px]"
              onClick={openSearchPage}
            >
              <SearchHeroBox data={storeGenres} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarPage;
