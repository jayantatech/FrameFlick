import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import fetchData from "../../../components/hooks/fetchData";
import SliderComponent from "../../../components/sliderComponent/SliderComponent";
const Recommendations = ({ film, id }) => {
  const { data, loading } = fetchData(`/movie/${id}/recommendations`);
  console.log(data);
  return (
    <div className=" py-16 my-14">
      <ContentWrapper>
        <div className=" ">
          <h2 className="text-3xl font-bold font-[Roboto] pb-6">
            Recommendations
          </h2>
          <div className=" px-2 rounded-lg shadow-xl pb-4 bg-white">
            <SliderComponent data={data} loading={loading} />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Recommendations;
