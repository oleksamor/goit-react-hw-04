import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => (
  <ul className={s.listGallery}>
    {items.map(({ id, urls, alt_description }) => (
      <li key={id} className={s.listGalleryItem}>
        <img src={urls.small} alt={alt_description} />
      </li>
    ))}
  </ul>
);

<ImageCard />;

export default ImageGallery;
