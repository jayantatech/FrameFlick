import React, { useEffect, useState, useRef } from "react";
import { GrMenu } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { logo, logoBlack } from "../../assets/icons";
import { IoMdClose } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";
import SearchBarPage from "./SearchBarPage";
import { useDispatch } from "react-redux";
import { setHeaderActive } from "../../store/SearchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMobileBar, setOpenMobileBar] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const locationUrl = useLocation();
  const navigatePage = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationUrl]);

  function navigateToNewPage(page) {
    navigatePage(`${page}`);
    if (openMobileBar) {
      setOpenMobileBar(false);
    }
  }

  const location = useLocation();
  useEffect(() => {
    setActivePage(location?.pathname);
  }, [location]);

  const dispatch = useDispatch();
  function openSearchBar() {
    setOpenSearch(true);
    dispatch(setHeaderActive(true));
  }
  useEffect(() => {
    if (openMobileBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMobileBar]);
  return (
    <header>
      <div className="w-full py-3 bg-white z-50">
        <div
          className={`${
            !openMobileBar ? "hidden" : "block"
          }  z-20 w-full h-full fixed top-0 left-0 bg-[#000] opacity-40`}
          onClick={() => setOpenMobileBar(false)}
        ></div>
        <ContentWrapper>
          <div className="flex justify-between">
            <div>
              <Link to={"/"}>
                <img src={logo} className="w-[140px]" alt="logo" />
              </Link>
            </div>
            <div
              className={`flex items-center justify-center max-md:top-0 max-md:left-0 max-md:px-6 max-md:flex-col max-md:py-3 max-md:items-start max-md:bg-[#E6FFF8] max-md:h-[100%] max-md:w-[70%] max-md:justify-start transition-all duration-300 max-md:fixed max-md:z-50 ${
                !openMobileBar
                  ? "max-md:-translate-x-[100%]"
                  : "max-md:-translate-x-0"
              }`}
            >
              <div className="pb-6 max-md:block max-md:z-50 hidden">
                <Link to={"/"}>
                  <img src={logoBlack} alt="logo" className=" w-[210px]" />
                </Link>
              </div>
              <ul className="flex max-md:flex-col items-center justify-center gap-14 max-md:gap-8 font-bold font-[Roboto] max-md:items-start max-md:justify-start ml-2">
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
                <IoSearch onClick={() => openSearchBar()} />
              </span>
              <span
                className={`hover:text-[#58DAA8] w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 md:hidden  ${
                  openMobileBar ? "bg-[#E6FFF8] shadow-md z-20" : null
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
    </header>
  );
};

export default Header;
