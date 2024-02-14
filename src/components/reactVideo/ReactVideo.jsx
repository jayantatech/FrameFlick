import React from "react";
import ReactPlayer from "react-player";

const ReactVideo = ({ data }) => {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${data}`}
      width={"100%"}
      height={"100%"}
    />
  );
};

export default ReactVideo;
