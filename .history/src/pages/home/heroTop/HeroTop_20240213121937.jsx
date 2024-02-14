import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import fetchData from "../../../components/hooks/fetchData";
import { useSelector } from "react-redux";
import MyImage from "../../../components/myImage/MyImage";
import { IoStar } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroFilmInfo from "../../../components/heroFilmInfo/HeroFilmInfo";

const HeroTop = () => {
  const { data, loading } = fetchData("movie/popular");
  const [heroData, setHeroData] = useState([]);
  const imageAdd = useSelector((state) => state.home.url);
  useEffect(() => {
    const heroInfo = [];
    for (let i = 0; i < 3; i++) {
      let rendom = Math.floor(Math.random() * data?.results?.length - 1);
      if (
        !heroInfo.includes(data?.results[rendom]) &&
        data?.results[rendom] !== undefined
      ) {
        heroInfo.push(data?.results[rendom]);
      }
    }
    setHeroData(heroInfo);
  }, [data]);
  return (
    <ContentWrapper>
      <div className=" w-full h-[670px] max-lg:h-[470px] max-md:h-[230px] bg-[#000] rounded-2xl shadow-lg overflow-hidden my-4 relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, FreeMode, Navigation]}
          className="mySwiper"
        >
          {heroData.length > 0 &&
            heroData?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" w-full h-[670px] max-md:h-full md:-mt-4 bg-contain bg-[#000000]">
                    <div className="absolute bottom-0 left-0 w-full h-full z-10 bg-[#0000004d] scale-y-150 object-cover"></div>
                    <img
                      src={`${imageAdd + item?.backdrop_path}`}
                      className={"  w-full h-full bg-black"}
                    />
                    <div className=" w-full flex items-center justify-center absolute bottom-10 left-0 z-20 md:hidden">
                      <div className=" px-2 mx-auto w-auto h-auto bg-[#747272] backdrop-filter backdrop-blur-sm bg-opacity-90 rounded-lg">
                        <h2 className=" text-white text-2xl font-[Roboto] font-bold">
                          {item?.original_title}
                        </h2>
                      </div>
                    </div>
                    <HeroFilmInfo data={item} imageAdd={imageAdd} />;
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </ContentWrapper>
  );
};

export default HeroTop;
