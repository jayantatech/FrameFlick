import React from "react";
import ReviewHero from "./reviewHero/ReviewHero";
import SimilerFilm from "./similerFilm/SimilerFilm";
import { useParams } from "react-router";
import fetchData from "../../components/hooks/fetchData";
import VideoSection from "./videoSection/VideoSection";
import { useSelector } from "react-redux";
import Recommendations from "./recommendations/Recommendations";

const ReviewPage = () => {
  // const oneData = data?.results[8];
  // main green color - #58DAA8
  // 2nd main color - #30b170
  // light green color - #E6FFF8
  // deep Green color - #409E7A
  // deep Green color 2 - #5EBEA3

  const { film, id } = useParams();
  const { data, loading } = fetchData(`${film}/${id}/similar`);
  const { currentTabValu } = useSelector((state) => state?.home);

  const { data: newData, loading: newLoading } = fetchData(
    `${currentTabValu}/${id && id}/videos`
  );
  console.log(data);
  return (
    <>
      <ReviewHero
        film={film}
        id={id}
        newData={newData}
        newLoading={newLoading}
      />
      {newData?.results.length > 0 && (
        <VideoSection data={newData} loading={newLoading} />
      )}
      {data?.results?.length > 0 && (
        <SimilerFilm data={data} loading={loading} />
      )}
      <Recommendations id={id} film={film} />
    </>
  );
};

export default ReviewPage;
