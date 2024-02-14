import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { logo } from "../../assets/icons";

const Footer = () => {
  return (
    <div className=" bg-[#000] my-0 relative bottom-0 left-0">
      <ContentWrapper>
        <div className=" xl:py-10 max-xl:py-7 h-[240px] max-md:h-[490px]">
          <div className="w-full h-full grid items-center grid-flow-col grid-cols-9 max-xl:grid-cols-8 max-md:grid-cols-1 max-md:grid-flow-row xl:gap-10 max-xl:gap-3 max-md:gap-8">
            <div className=" col-span-3 max-xl:col-span-3 text-white">
              {" "}
              <ul className=" text-lg max-xl font-[Roboto] font-bold uppercase flex items-start flex-row xl:gap-6 max-xl:gap-4">
                <div className=" flex items-start gap-2 flex-col justify-center">
                  {" "}
                  <li className=" px-3 h-[30px] cursor-pointer border-l-2 border-[#30B170] transition-all duration-300 hover:rounded-md hover:bg-[#30B170] flex items-center justify-center">
                    Home
                  </li>
                  <li className="   px-3 h-[30px] cursor-pointer border-l-2 border-[#30B170] transition-all duration-300 hover:rounded-md hover:bg-[#30B170] flex items-center justify-center">
                    About
                  </li>
                  <li className=" px-3 h-[30px] cursor-pointer border-l-2 border-[#30B170] transition-all duration-300 hover:rounded-md hover:bg-[#30B170] flex items-center justify-center">
                    Contact
                  </li>
                </div>
                <div className=" flex items-start gap-2 flex-col justify-center">
                  <li className=" px-3 h-[30px] cursor-pointer border-l-2 border-[#30B170] transition-all duration-300 hover:rounded-md hover:bg-[#30B170] flex items-center justify-center">
                    Search Page
                  </li>
                  <li className=" px-3 h-[30px] cursor-pointer border-l-2 border-[#30B170] transition-all duration-300 hover:rounded-md hover:bg-[#30B170] flex items-center justify-center">
                    Review Page
                  </li>
                </div>
              </ul>{" "}
            </div>
            <div className="col-span-4 max-xl:col-span-3 px-3">
              <div className=" w-full h-[120px] bg-white rounded-xl grid grid-cols-2 grid-rows-2 px-2 py-2 gap-2">
                <div className=" flex items-center justify-center bg-[#30B170] text-white rounded-lg text-xl font-bold font-[Roboto] cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl gap-1 max-xl:text-lg hover:scale-95">
                  <span className=" text-3xl max-xl:text-2xl">
                    <TbFileCv />
                  </span>
                  Portfolio
                </div>
                <div className=" flex items-center justify-center bg-[#000000] text-white rounded-lg text-xl font-bold font-[Roboto] cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl gap-1 max-xl:text-lg hover:scale-95">
                  <span className=" text-3xl max-xl:text-2xl">
                    <FaLinkedinIn />
                  </span>
                  Linkedin
                </div>
                <div className=" flex items-center justify-center bg-[#000000] text-white rounded-lg text-xl font-bold font-[Roboto] cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl gap-1 col-span-1 max-xl:text-lg hover:scale-95">
                  <span className=" text-3xl max-xl:text-2xl">
                    <FaGithub />
                  </span>
                  <span>Github</span>
                </div>
                <div className=" flex items-center justify-center bg-[#30B170] text-white rounded-lg text-xl font-bold font-[Roboto] cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl gap-1 col-span-1 max-xl:text-lg hover:scale-95">
                  <span className=" text-3xl max-xl:text-2xl">
                    <FaXTwitter />
                  </span>
                  <span>Twitter</span>
                </div>
              </div>
            </div>
            <div className="col-span-3 text-white">
              <div className=" flex items-start justify-start flex-col gap-3 ">
                <img src={logo} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, rerum reprehenderit? Quo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
