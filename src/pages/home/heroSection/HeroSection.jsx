import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import fetchData from "../../../components/hooks/fetchData";
import { matchRoutes } from "react-router";
import { useSelector } from "react-redux";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import HeroPart from "./heroPart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const { data, loading } = fetchData("movie/popular");
  const [heroData, setHeroData] = useState([]);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="w-full xl:h-[740px] max-xl:h-[580px] overflow-hidden">
      <Slider {...settings}>
        {heroData.map((item, index) => {
          return <HeroPart key={item?.id} data={item} loading={loading} />;
        })}
      </Slider>
    </div>
  );
};

export default HeroSection;
