import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    border: "none",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
  },
};

export default function ImageModal({ image, state, close }) {
  return (
    <ReactModal
      isOpen={state}
      onRequestClose={close}
      className={css.modal}
      style={customStyles}
    >
      <img className={css.modalImg} src={image} />
    </ReactModal>
  );
}