import s from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <li className={s.card}>
      <img
        src={image.urls.small}
        alt={image.slug}
        onClick={() => onImageClick(image)}
        style={{ cursor: "zoom-in" }}
      />
    </li>
  );
};

export default ImageCard;
