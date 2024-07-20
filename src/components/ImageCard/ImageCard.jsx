import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = () => {
  return (
    <div>
      <img src={urls.small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
