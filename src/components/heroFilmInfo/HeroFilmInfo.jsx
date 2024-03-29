import MyImage from "../myImage/MyImage";
import ResponsiveText from "../responsiveText/ResponsiveText";
import BothButton from "../bothButton/BothButton";
import RattingBox from "../rattingBox/RattingBox";
import DateBox from "../dateBox/DateBox";
const HeroFilmInfo = ({ data, imageAdd }) => {
  function getTheTittle(titleWord) {
    let newTitle = titleWord?.split("");
    if (newTitle.length > 0 && newTitle?.length < 30) {
      return newTitle.join("");
    } else {
      return newTitle?.slice(0, 28).join("") + "...";
    }
  }
  return (
    <div className=" w-full md:h-[280px] max-md:hidden absolute bottom-0 flex items-center justify-center my-8">
      <div className=" h-full lg:w-[70%] min-md:w-[70%] max-lg:w-[90%] max-md:translate-y-24 max-lg:-translate-y-48 bg-[#747272] backdrop-filter backdrop-blur-sm bg-opacity-60 md:px-4 z-30 grid grid-flow-col max-md:grid-flow-row md:grid-cols-5 max-md:grid-rows-4 gap-10 max-lg:gap-24 rounded-lg">
        <div className="w-[170px] h-full flex items-center justify-center col-span-1 max-md:hidden transition-all duration-300 hover:scale-95 cursor-pointer">
          <MyImage
            src={`${imageAdd}${data?.poster_path}`}
            className={"w-full h-full rounded-md  "}
          />
        </div>
        <div className=" md:col-span-4 py-4 md:px-3 md:ml-6 max-md:px-3">
          <h2 className=" text-3xl font-bold font-[Roboto] text-white">
            {getTheTittle(data?.original_title)}
          </h2>
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
