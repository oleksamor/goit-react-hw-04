import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  console.log("image, onClick", image, onClick);
  return (
    <li className={s.card}>
      <img
        src={image.urls.small}
        alt={image.slug}
        onClick={() => onClick(image.urls.regular)}
        style={{ cursor: "zoom-in" }}
      />
    </li>
  );
};

export default ImageCard;
