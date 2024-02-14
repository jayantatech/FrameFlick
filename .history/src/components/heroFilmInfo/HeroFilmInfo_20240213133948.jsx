import React, { useState } from "react";
import MyImage from "../myImage/MyImage";
import fetchData from "../hooks/fetchData";
import { setVideoPopBox } from "../../store/HomeSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import ResponsiveTitle from "../responsiveTitle/responsiveTitle";
import ResponsiveText from "../responsiveText/ResponsiveText";
import BothButton from "../bothButton/BothButton";
import RattingBox from "../rattingBox/RattingBox";
import DateBox from "../dateBox/DateBox";

const HeroFilmInfo = ({ data, imageAdd }) => {
  return (
    <div className=" w-full md:h-[280px] max-md:hidden absolute bottom-0 flex items-center justify-center my-8">
      <div className=" h-full lg:w-[70%] min-md:w-[70%] max-lg:w-[90%] max-md:translate-y-24 max-lg:-translate-y-48 bg-[#747272] backdrop-filter backdrop-blur-sm bg-opacity-60 md:px-4 z-20 grid grid-flow-col max-md:grid-flow-row md:grid-cols-5 max-md:grid-rows-4 gap-10 max-lg:gap-24 rounded-lg">
        <div className="w-[170px] h-full flex items-center justify-center col-span-1 max-md:hidden transition-all duration-300 hover:scale-95 cursor-pointer">
          <MyImage
            src={`${imageAdd}${data?.poster_path}`}
            className={"w-full h-full rounded-md  "}
          />
        </div>
        <div className=" md:col-span-4 py-4 md:px-3 md:ml-6 max-md:px-3">
          <ResponsiveTitle data={data} />
          <div className=" w-full h-[100px] max-md:hidden">
            <ResponsiveText data={data} />
          </div>
          <div className=" flex items-center gap-3 max-md:py-2">
            <DateBox data={data} />
            <RattingBox data={data} />
          </div>
          <div className=" flex items-center justify-center w-full h-[60px] mt-3 md:px-2 gap-2 py-1">
            <BothButton data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFilmInfo;
