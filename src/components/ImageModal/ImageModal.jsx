import React from "react";
import s from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.ImageModal}
      overlayClassName={s.Overlay}
    >
      <button onClick={onClose} className={s.closeBtn}>
        {/* <RxCross2 /> */}
      </button>
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
