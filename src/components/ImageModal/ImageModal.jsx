import s from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      className={s.ImageModal}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        <img src={image.urls.regular} />
      </div>
    </Modal>
  );
};

export default ImageModal;
