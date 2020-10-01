import React from "react";
import "./ImageComp.css";

function ImageComp({ src }) {
  return (
    <div className="imageDiv">
      <img src={src} alt="random cutie" />
    </div>
  );
}

export default ImageComp;
