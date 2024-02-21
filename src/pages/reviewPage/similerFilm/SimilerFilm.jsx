import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SliderComponent from "../../../components/sliderComponent/SliderComponent";
import { useParams } from "react-router";
const SimilerFilm = ({ data, loading }) => {
  const { film, id } = useParams();
  return (
    <div className=" py-16 my-14 bg-[#E6FFF8]">
      <ContentWrapper>
        <div className=" ">
          <h2 className="text-3xl font-bold font-[Roboto] pb-6">
            Audience Favorites
          </h2>
          <div className=" px-2 rounded-lg shadow-xl pb-4 bg-white">
            <SliderComponent
              data={data}
              loading={loading}
              tabTo={film && film}
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default SimilerFilm;
