import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import fetchData from "../../../components/hooks/fetchData";
import SliderComponent from "../../../components/sliderComponent/SliderComponent";
import { useDispatch } from "react-redux";
import { setCurrentTabValu, setFavoritesTabs } from "../../../store/HomeSlice";
import FavoritesSlider from "../../../components/favoritesSlider/FavoritesSlider";

const CurrentFavorites = () => {
  const [changeTab, setChangeTab] = useState(false);
  const [passValu, setPassValu] = useState("movie");
  const { data, loading } = fetchData(`${passValu}/popular`);

  const dispatch = useDispatch();

  function chiengeData(filmInfo, tabInfo) {
    setChangeTab(tabInfo);
    setPassValu(filmInfo);
  }
  useEffect(() => {
    let dataV = "movie";
    if (passValu === "tv") {
      dataV = "tv";
    }

    dispatch(setFavoritesTabs(dataV));
  }, [passValu]);
  return (
    <div className="mt-20">
      <ContentWrapper>
        <div className=" ">
          <h2 className="text-3xl font-bold font-[Roboto] pb-6">
            Current Favorites
          </h2>
          <div className="border-4 border-[#30B170] px-2 rounded-lg shadow-xl pb-3">
            <FavoritesSlider data={data} loading={loading} />
            <div className=" w-full h-[60px] relative flex flex-row gap-5">
              <div
                className={`absolute transition-all duration-300  ${
                  !changeTab ? "ml-[0%]" : "ml-[50%]"
                }  w-1/2 h-full max-md:h-[80%] bg-[#30B170]  -z-10 rounded-lg`}
              ></div>
              <button
                className={`w-1/2 h-full max-md:h-[80%] rounded-lg text-xl max-md:text-lg font-bold ${
                  !changeTab ? "text-white" : "text-black"
                } border-2 border-[#30B170]`}
                onClick={() => chiengeData("movie", false)}
              >
                Favorites Movies
              </button>

              <button
                className={` w-1/2 h-full max-md:h-[80%] rounded-lg text-xl max-md:text-lg font-bold border-2 border-[#30B170] ${
                  !changeTab ? "text-black" : "text-white"
                }`}
                onClick={() => chiengeData("tv", true)}
              >
                Favorites TV
              </button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default CurrentFavorites;
