import React from "react";

import classes from "./BackgroundVideo.modules.css";
import Binary from "../video/BinaryRainFHDLoop.webm";

const BackgroundVideo = () => {
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={Binary} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default BackgroundVideo;
