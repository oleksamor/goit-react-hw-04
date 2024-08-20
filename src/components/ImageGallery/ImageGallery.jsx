import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => (
  <ul className={s.listGallery}>
    {items.map((image) => (
      <ImageCard key={image.id} image={image} onImageClick={onImageClick} />
    ))}
  </ul>
);

export default ImageGallery;
