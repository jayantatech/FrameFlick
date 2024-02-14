import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ src, className, alt }) => (
  <div className=" w-full min-h-full flex items-center justify-center overflow-hidden bg-contain">
    <LazyLoadImage
      alt={alt ? alt : "Frameflick"}
      src={src}
      effect="blur"
      width={"100%"}
      height={"100%"}
      className={`${className}`}
    />
  </div>
);

export default MyImage;
