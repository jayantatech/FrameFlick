import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SliderComponent from "../../../components/sliderComponent/SliderComponent";
const Recommendations = ({ data, loading }) => {
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
