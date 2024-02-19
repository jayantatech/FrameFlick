import React, { useEffect, useState, useRef } from "react";
import { GrMenu } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { logo } from "../../assets/icons";
import { IoMdClose } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";
import SearchHeroBox from "../searchHeroBox/SearchHeroBox";
import { useDispatch } from "react-redux";
import fetchData from "../hooks/fetchData";
import { setStoreGenresData } from "../../store/SearchSlice";
import SearchBarPage from "./SearchBarPage";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(true);
  const [openMobileBar, setOpenMobileBar] = useState(false);
  const [activePage, setActivePage] = useState(null);

  const locationUrl = useLocation();
  const navigatePage = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationUrl]);

  function navigateToNewPage(page) {
    navigatePage(`${page}`);
  }

  const location = useLocation();
  useEffect(() => {
    setActivePage(location?.pathname);
  }, [location]);

  return (
    <header>
      <div className="w-full py-3 bg-white z-50">
        <div
          className={`${
            !openMobileBar ? "hidden" : "block"
          } absolute top-0 z-20 left-0 w-full h-full bg-[#000] opacity-40`}
          onClick={() => setOpenMobileBar(false)}
        ></div>
        <ContentWrapper>
          <div className="flex justify-between">
            <div>
              <img src={logo} className="w-[190px]" alt="logo" />
            </div>
            <div
              className={`flex items-center justify-center max-md:top-0 max-md:left-0 max-md:px-6 max-md:flex-col max-md:py-3 max-md:items-start max-md:bg-[#E6FFF8] max-md:h-[100%] max-md:justify-start transition-all duration-300 max-md:fixed ${
                !openMobileBar
                  ? "max-md:-translate-x-[100%]"
                  : "max-md:-translate-x-0"
              }`}
            >
              <div className="pb-6 max-md:block max-md:z-50 hidden">
                <img src={logo} alt="logo" />
              </div>
              <ul className="flex max-md:flex-col  items-center justify-center gap-14 max-md:gap-8 font-bold font-[Roboto] max-md:items-start max-md:justify-start ml-2">
                <li
                  className={`cursor-pointer transition-all duration-200 px-2 py-1 rounded-md ${
                    activePage === "/"
                      ? "bg-[#30B170] hover:text-white text-white"
                      : "bg-[#E6FFF8] hover:bg-[#30B170] hover:text-white"
                  }`}
                  onClick={() => navigateToNewPage("/")}
                >
                  Home
                </li>
                <li
                  className={`cursor-pointer transition-all duration-200 px-2 py-1 rounded-md ${
                    activePage === "/movies"
                      ? "bg-[#30B170] hover:text-white text-white"
                      : "bg-[#E6FFF8] hover:bg-[#30B170] hover:text-white"
                  }`}
                  onClick={() => navigateToNewPage("/movies")}
                >
                  Movies
                </li>
                <li
                  className={`cursor-pointer transition-all duration-200 px-2 py-1 rounded-md ${
                    activePage === "/tv_shows"
                      ? "bg-[#30B170] hover:text-white text-white"
                      : "bg-[#E6FFF8] hover:bg-[#30B170] hover:text-white"
                  }`}
                  onClick={() => navigateToNewPage("/tv_shows")}
                >
                  TV Shows
                </li>
                <li
                  className={`cursor-pointer transition-all duration-200 px-2 py-1 rounded-md ${
                    activePage === "/search"
                      ? "bg-[#30B170] hover:text-white text-white"
                      : "bg-[#E6FFF8] hover:bg-[#30B170] hover:text-white"
                  }`}
                  onClick={() => navigateToNewPage("/search")}
                >
                  Search
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center gap-4 text-2xl max-md:text-2xl ">
              <span className=" hover:text-[#30B170] cursor-pointer transition-all duration-200">
                <IoSearch onClick={() => setOpenSearch(true)} />
              </span>
              <span className=" hover:text-[#30B170] cursor-pointer transition-all duration-200 max-md:hidden">
                <GrMenu />
              </span>
              <span
                className={`hover:text-[#58DAA8] w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 md:hidden  ${
                  openMobileBar && "bg-[#E6FFF8] shadow-md z-20"
                }`}
                onClick={() => setOpenMobileBar(!openMobileBar)}
              >
                {!openMobileBar ? <GrMenu /> : <IoMdClose />}
              </span>
            </div>
          </div>
        </ContentWrapper>
      </div>
      <SearchBarPage openMobileBar={openMobileBar} />
      {/* <div
        className={` fixed top-0 left-0 w-full h-full transition-all ${
          openSearch ? "block w-full h-full z-50" : "hidden"
        }`}
      >
        <div className="relative top-0 left-0 w-full h-full flex items-center justify-center">
          <div
            className=" absolute top-0 left-0 w-full h-full bg-[#000000b6]"
            onClick={onSearchHandler}
          ></div>
          <div
            className=" absolute top-[10%] max-md:right-10 max-md:top-[15%] right-[20%] w-[50px] h-[50px] bg-[#30B170] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3a805d] text-3xl z-10"
            onClick={onSearchHandler}
          >
            <IoMdClose />
          </div>
          <div className=" flex items-center justify-center flex-col w-full h-full overflow-hidden max-md:-translate-y-40 z-0">
            <div
              className={`w-[50%] h-[60px] max-lg:w-[80%] max-md:w-[80%] bg-white flex items-center justify-center rounded-xl py-1 px-1 transition-all max-md:flex-col max-md:h-[120px] ${
                openSearch ? "translate-y-0" : "translate-y-[550px]"
              }`}
            >
              <input
                type="text"
                placeholder="Search Movies/TV Shows"
                className=" w-full h-full bg-transparent outline-none text-[Roboto] font-bold text-[#000] text-xl pl-4 placeholder:text-[#0000005b] "
                onKeyDown={() => onKeyHandler(e)}
                ref={refValu}
              />
              <button
                className=" w-[240px] h-full bg-[#30B170] hover:bg-[black] hover:scale-95 transition-all duration-300 font-[Roboto] font-bold text-2xl rounded-lg text-white max-md:w-full"
                onClick={onSearchHandler}
              >
                Search
              </button>
            </div>
            <SearchHeroBox data={storeGenres} />
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
