import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import FilmCard from "../filmCard/FilmCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./button.css";

const SliderComponent = ({ data, loading, tabTo }) => {
  let viewDisplay = window.innerWidth >= 768 && window.innerWidth <= 992;
  let mobileView = window.innerWidth <= 600;
  return (
    <div
      className={`w-full h-[470px] max-lg:h-[420px] flex items-center justify-center px-2 py-3 gap-4 bg-slae-900 ${
        loading ? "bg-black" : "bg-white"
      }`}
    >
      <Swiper
        slidesPerView={mobileView ? 1 : 0 || !viewDisplay ? 4 : 3}
        spaceBetween={!viewDisplay ? 30 : 20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.results?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="max-md:flex max-md:items-center max-md:justify-center"
            >
              <FilmCard
                key={index}
                data={item}
                loading={loading}
                tabTo={tabTo}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
